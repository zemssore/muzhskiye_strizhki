import { NextRequest, NextResponse } from "next/server"

// Temporary in-memory store for booked time slots (resets on server restart)
const bookedSlots = new Set<string>()

function normalizeToSlot(dateIso: string): string {
  const date = new Date(dateIso)
  // Round to nearest 30-minute slot downwards
  const minutes = date.getMinutes()
  const slotMinutes = minutes < 30 ? 0 : 30
  date.setMinutes(slotMinutes, 0, 0)
  return date.toISOString()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, email, phone, service, date } = body

    // Validate required fields
    if (!firstName || !phone || !service || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Get bot token and chat ID from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured")
      return NextResponse.json(
        { error: "Telegram bot not configured" },
        { status: 500 }
      )
    }

    // Normalize to a booking slot first and check for conflicts
    const slotKey = normalizeToSlot(date)
    if (bookedSlots.has(slotKey)) {
      return NextResponse.json(
        { error: "На это время уже есть запись. Пожалуйста, выберите другое время." },
        { status: 409 }
      )
    }

    // Format the date
    const formattedDate = new Date(date).toLocaleString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    // Map current Russian service names to prices
    const servicePrices: Record<string, string> = {
      "Мужская стрижка": "₽500",
      "Детская стрижка": "₽400",
      "Стрижка отец + сын": "₽800",
      "Оформление бороды": "₽300",
      "Стрижка + оформление бороды": "₽800",
      "Стрижка одной насадкой": "₽400",
      "Стрижка ножницами": "₽700",
      "Тонирование волос": "₽500",
      "Восковая депиляция": "₽200",
    }

    const serviceName = service
    const servicePrice = servicePrices[serviceName]

    // Format message
    const message = `🔔 *Новая запись в парикмахерскую*

👤 *Клиент:*
Имя: ${firstName}
${email ? `Email: ${email}` : ""}
Телефон: ${phone}

📅 *Услуга:*
${serviceName}${servicePrice ? ` — Стоимость: ${servicePrice}` : ""}
Дата и время: ${formattedDate}

⏰ Время получения: ${new Date().toLocaleString("ru-RU")}`

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Telegram API error:", errorData)
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 500 }
      )
    }

    // Mark slot as booked only after successful notification
    bookedSlots.add(slotKey)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending to Telegram:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

