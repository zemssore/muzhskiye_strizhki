"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, MapPin, Phone, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const showSocial = false

  const scrollToBooking = () => {
    // Close menu first to avoid focus restore jumping, then scroll
    setMenuOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    }, 50)
  }

  const scrollToAddress = () => {
    setMenuOpen(false)
    setTimeout(() => {
      const address = document.getElementById('address-card')
      if (address) {
        address.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 50)
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="bg-black/30 backdrop-blur-md text-white py-3 md:py-5 px-4 md:px-6 text-sm md:text-base border-b border-[#E5A51A]/30">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3 md:gap-6">
          {/* Desktop Contact Info - Hidden on mobile */}
          <div className="hidden md:flex flex-row items-center gap-6 text-gray-200">
            <a
              href="https://yandex.ru/navi/org/muzhskiye_strizhki/154061548383?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#E5A51A] transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-base">улица Павлюхина, 99, Казань, Республика Татарстан</span>
            </a>
            <span className="text-[#E5A51A]">|</span>
            <a
              href="tel:+1512456789"
              className="flex items-center gap-2 hover:text-[#E5A51A] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base">+7 (993) 407-08-98</span>
            </a>
          </div>

          {/* Mobile Logo/Brand - Hidden on desktop */}
          <div className="md:hidden flex items-center">
            <span className="text-[#E5A51A] font-serif font-bold text-lg">МУЖСКИЕ СТРИЖКИ</span>
          </div>

          {/* Desktop Social Links - Hidden on mobile */}
          {showSocial && (
            <div className="hidden md:flex gap-8 items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E5A51A] transition-all duration-300 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-base">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E5A51A] transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-base">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E5A51A] transition-all duration-300 hover:scale-110 transform"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
                <span className="text-base">Youtube</span>
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-[#E5A51A] hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby="menu-description"
              className="w-[320px] sm:w-[420px] bg-gradient-to-b from-black/95 to-black/85 backdrop-blur-md border border-[#E5A51A]/30 shadow-2xl p-0"
              onCloseAutoFocus={(e) => e.preventDefault()}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <p id="menu-description" className="sr-only">Навигация и контакты барбершопа</p>
              <div className="border-b border-[#E5A51A]/30 px-5 py-4 bg-black/40">
                <SheetHeader>
                  <SheetTitle className="text-[#E5A51A] font-serif text-2xl text-left tracking-wide">
                    Меню
                  </SheetTitle>
                </SheetHeader>
                <p className="text-gray-400 text-xs mt-1">Быстрый доступ к контактам и записи</p>
              </div>
              <div className="flex flex-col gap-6 mt-6 px-5 pb-6">
                {/* Contact Info in Menu */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-white font-semibold text-lg border-b border-[#E5A51A]/30 pb-3">
                    Контакты
                  </h3>
                  <a
                    href="https://yandex.ru/navi/org/muzhskiye_strizhki/154061548383?"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-200 bg-white/5 hover:bg-[#E5A51A]/10 border border-white/10 hover:border-[#E5A51A]/30 rounded-lg px-4 py-3 transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5 text-[#E5A51A]" />
                    <span className="text-sm">улица Павлюхина, 99, Казань, Республика Татарстан</span>
                  </a>
                  <a
                    href="tel:+1512456789"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-200 bg-white/5 hover:bg-[#E5A51A]/10 border border-white/10 hover:border-[#E5A51A]/30 rounded-lg px-4 py-3 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-[#E5A51A]" />
                    <span className="text-sm">+7 (993) 407-08-98</span>
                  </a>
                </div>

                {/* Social Links in Menu */}
                {showSocial && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg border-b border-[#E5A51A]/30 pb-2">
                      Социальные сети
                    </h3>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#E5A51A] transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#E5A51A] transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#E5A51A] transition-all duration-300"
                    >
                      <Youtube className="w-5 h-5" />
                      <span className="text-sm">Youtube</span>
                    </a>
                  </div>
                )}

                {/* Navigation in Menu */}
                <div className="flex flex-col gap-4 pt-5 border-t border-[#E5A51A]/30">
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-[#E5A51A] hover:bg-[#d49615] text-black font-semibold rounded-lg shadow-lg shadow-[#E5A51A]/20"
                  >
                    Записаться на приём
                  </Button>
                  <Button
                    onClick={scrollToAddress}
                    variant="outline"
                    className="w-full border-[#E5A51A] text-[#E5A51A] hover:bg-[#E5A51A] hover:text-black rounded-lg"
                  >
                    Как добраться
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-barbershop-interior-with-vintage-barber-cha.jpg"
            alt="Интерьер парикмахерской"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-12 md:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-wider animate-fade-in-up px-2">
            МУЖСКИЕ
            <br />
            СТРИЖКИ
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 font-serif animate-fade-in-up animation-delay-200 px-2">
            Профессиональные стрижки
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>и роскошное бритьё
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Button 
              onClick={scrollToAddress}
              className="bg-[#6B8E23] hover:bg-[#5a7a1e] text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6B8E23]/50"
            >
              Как добраться
            </Button>
            <Button 
              onClick={scrollToBooking}
              className="bg-[#E5A51A] hover:bg-[#d49615] text-black px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E5A51A]/50"
            >
              Записаться на приём
            </Button>
          </div>

          {/* Feature Icons (reflect current services) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-2">
            <FeatureIcon icon={<CheckCircleIcon />} title="Гарантия" subtitle="уверенности" />
            <FeatureIcon icon={<BeardIcon />} title="Оформление" subtitle="бороды" />
            <FeatureIcon icon={<ShearsIcon />} title="Стрижка" subtitle="ножницами" />
            <FeatureIcon icon={<DropletIcon />} title="Тонирование" subtitle="волос" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureIcon({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-2 border-[#E5A51A] flex items-center justify-center mb-2 md:mb-3 transform rotate-45 bg-black/50 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#E5A51A]/10 group-hover:border-[#E5A51A] group-hover:shadow-lg group-hover:shadow-[#E5A51A]/30">
        <div className="transform -rotate-45 text-[#E5A51A] transition-all duration-500 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <div className="text-white text-center transition-all duration-300 group-hover:text-[#E5A51A]">
        <div className="font-semibold text-xs sm:text-sm md:text-base">{title}</div>
        <div className="text-xs sm:text-sm">{subtitle}</div>
      </div>
    </div>
  )
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" strokeWidth={2}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <path d="M20 4L7 17M20 20L7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BeardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" strokeWidth={2}>
      <path d="M4 9c0-3 2.5-5 8-5s8 2 8 5c0 5-4 9-8 9S4 14 4 9z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11c.5 1 2 2 4 2s3.5-1 4-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShearsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" strokeWidth={2}>
      <path d="M3 6l9 6-9 6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" strokeWidth={2}>
      <path d="M12 2s6 6 6 10a6 6 0 1 1-12 0c0-4 6-10 6-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
