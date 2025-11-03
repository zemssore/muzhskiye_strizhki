export function ServicesSection() {
  const services = [
    {
      name: "Мужская стрижка",
      description: "Мытье головы до и после стрижки, стрижка, укладка, стайлинг",
      price: "₽500",
    },
    {
      name: "Детская стрижка",
      description: "Мытье головы до и после стрижки, стрижка, укладка",
      price: "₽400",
    },
    {
      name: "Стрижка отец + сын",
      description: "Две стрижки в одном визите: индивидуальный подход для каждого",
      price: "₽800",
    },
    {
      name: "Оформление бороды",
      description: "Контуры, длина, уход и укладка по форме лица",
      price: "₽300",
    },
    {
      name: "Стрижка + оформление бороды",
      description: "Комплекс: стрижка, укладка и аккуратное оформление бороды",
      price: "₽800",
    },
    {
      name: "Стрижка одной насадкой",
      description: "Быстрая машинная стрижка одной длины по всему периметру",
      price: "₽400"
    },
    {
      name: "Стрижка ножницами",
      description: "Точная стрижка ножницами для естественной формы и объёма",
      price: "₽700"
    },
    {
      name: "Тонирование волос",
      description: "Лёгкое тонирование для освежения оттенка и блеска",
      price: "₽500"
    },
    {
      name: "Восковая депиляция",
      description: "Чистая окантовка и удаление нежелательных волос воском",
      price: "₽200"
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/barbershop-tools-scissors-clippers-on-wooden-table.jpg"
          alt="Инструменты парикмахерской"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-serif">
          Где груминг встречается
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>с уникальным опытом.
        </h2>

        <p className="text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          От классических стрижек до выцветания кожи, стрижки бороды и бритья горячим полотенцем — у нас есть навыки,
          чтобы соответствовать вашему стилю. Скажите нам, что вам нравится — традиционное, смелое или что-то среднее —
          и мы воплотим это в жизнь. Каждый визит — это больше, чем услуга, это опыт, которого вы будете ждать каждый
          раз.
        </p>

        <div className="space-y-4 md:space-y-6 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 pb-4 border-b border-gray-700 transition-all duration-300 hover:border-[#E5A51A] hover:transform hover:translate-x-2 group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[#E5A51A] text-lg sm:text-xl font-semibold mb-1 transition-all duration-300 group-hover:text-[#d49615]">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm transition-all duration-300 group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
              <div className="bg-[#E5A51A] text-black px-3 sm:px-4 py-1 rounded font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 group-hover:bg-[#d49615] group-hover:scale-110 group-hover:shadow-lg self-start sm:self-auto">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif">
            Ваш местный центр груминга
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Стрижки, окантовки, бритьё
          </h3>
        </div>
      </div>
    </section>
  )
}
