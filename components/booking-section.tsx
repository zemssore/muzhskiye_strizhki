"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { MapPin, Phone, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function BookingSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.firstName || !formData.phone || !formData.service || !formData.date) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Ошибка при отправке заявки")
      }

      // Reset form
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
      })

      toast({
        title: "Успешно!",
        description: "Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.",
      })
    } catch (error) {
      console.error("Error submitting booking:", error)
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking-section" className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-barbershop-interior-barber-chairs-dark-atmo.jpg"
          alt="Интерьер парикмахерской"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-serif px-2">
            Ваш местный центр груминга
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Стрижки, окантовки, бритьё
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Удобно расположенный рядом с центром города, недалеко от ресторанов, магазинов и городского парка, наш
            парикмахерская предлагает изысканный груминг в доступном месте. С индивидуальной записью и опытными барберами
            каждый визит обеспечивает точность, комфорт и безупречный вид, который вы будете носить с уверенностью.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div id="address-card">
            <InfoCard
              icon={<MapPin className="w-8 h-8 md:w-10 md:h-10" />}
              title="Адрес"
              lines={["ул. Павлюхина, 99, Казань"]}
              link="https://yandex.ru/navi/org/muzhskiye_strizhki/154061548383?"
            />
          </div>
          <InfoCard
            icon={<Phone className="w-8 h-8 md:w-10 md:h-10" />}
            title="Контакты"
            lines={["+7 (993) 407-08-98"]}
            link="tel:+7 (993) 407-08-98"
          />
          <InfoCard
            icon={<Clock className="w-8 h-8 md:w-10 md:h-10" />}
            title="Часы работы"
            lines={["Ежедневно 09:00—21:00"]}
          />
        </div>

        <div className="bg-[#E5A51A] rounded-lg p-6 md:p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E5A51A]/20">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label className="block text-black font-semibold mb-2 text-sm md:text-base">Имя</label>
                <Input
                  type="text"
                  placeholder="Введите имя"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-[#d49615] border-none text-black placeholder:text-black/60 transition-all duration-300 focus:bg-[#c48a12] focus:scale-105"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label className="block text-black font-semibold mb-2 text-sm md:text-base">Электронная почта</label>
                <Input
                  type="email"
                  placeholder="Введите адрес электронной почты"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#d49615] border-none text-black placeholder:text-black/60 transition-all duration-300 focus:bg-[#c48a12] focus:scale-105"
                />
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label className="block text-black font-semibold mb-2 text-sm md:text-base">Номер телефона</label>
                <Input
                  type="tel"
                  placeholder="Введите номер телефона"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#d49615] border-none text-black placeholder:text-black/60 transition-all duration-300 focus:bg-[#c48a12] focus:scale-105"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label className="block text-black font-semibold mb-2 text-sm md:text-base">Выберите услугу</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 bg-[#d49615] border-none text-black rounded-md transition-all duration-300 focus:bg-[#c48a12] focus:scale-105"
                >
                  <option value="">Выберите услугу</option>
                  <option value="Мужская стрижка">Мужская стрижка</option>
                  <option value="Детская стрижка">Детская стрижка</option>
                  <option value="Стрижка отец + сын">Стрижка отец + сын</option>
                  <option value="Оформление бороды">Оформление бороды</option>
                  <option value="Стрижка + оформление бороды">Стрижка + оформление бороды</option>
                  <option value="Стрижка одной насадкой">Стрижка одной насадкой</option>
                  <option value="Стрижка ножницами">Стрижка ножницами</option>
                  <option value="Тонирование волос">Тонирование волос</option>
                  <option value="Восковая депиляция">Восковая депиляция</option>
                </select>
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105">
                <label className="block text-black font-semibold mb-2 text-sm md:text-base">Дата записи</label>
                <Input
                  type="datetime-local"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-[#d49615] border-none text-black transition-all duration-300 focus:bg-[#c48a12] focus:scale-105"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-900 text-white py-5 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-gray-400 text-xs md:text-sm">Авторские права © 2025 парикмахерской</p>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, lines, link }: { icon: React.ReactNode; title: string; lines: string[]; link?: string }) {
  const content = (
    <>
      <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#E5A51A] flex items-center justify-center mb-3 md:mb-4 transform rotate-45 bg-black/50 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#E5A51A]/10 group-hover:border-[#E5A51A] group-hover:shadow-lg group-hover:shadow-[#E5A51A]/30">
        <div className="transform -rotate-45 text-[#E5A51A] transition-all duration-500 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="text-white font-semibold text-base md:text-lg mb-2 transition-all duration-300 group-hover:text-[#E5A51A]">
        {title}
      </h3>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-300 text-xs md:text-sm transition-all duration-300 group-hover:text-white">
          {line}
        </p>
      ))}
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center text-center group cursor-pointer"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      {content}
    </div>
  )
}
