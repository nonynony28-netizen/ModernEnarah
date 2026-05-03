import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const branches = [
  {
    id: 1,
    city: 'طرابلس',
    address: 'شارع المدينة المنورة، بالقرب من جسر السبعة',
    phone: '+218 21 345 6789',
    hours: 'السبت - الخميس: 9:00 ص - 6:00 م',
    mapLink: 'https://maps.google.com/?q=Tripoli+Libya',
    isMain: true,
  },
  {
    id: 2,
    city: 'بنغازي',
    address: 'شارع عمر المختار، المنطقة الصناعية',
    phone: '+218 61 234 5678',
    hours: 'السبت - الخميس: 9:00 ص - 6:00 م',
    mapLink: 'https://maps.google.com/?q=Benghazi+Libya',
    isMain: false,
  },
  {
    id: 3,
    city: 'مصراته',
    address: 'شارع الجمهورية، المنطقة الصناعية الجديدة',
    phone: '+218 51 123 4567',
    hours: 'السبت - الخميس: 9:00 ص - 5:00 م',
    mapLink: 'https://maps.google.com/?q=Misrata+Libya',
    isMain: false,
  },
]

export default function Branches() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.branch-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 to-brand-dark" />
        </div>

        <div className="relative z-10 section-padding text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            نحن قريبون منك
          </span>
          <h1 className="heading-xl text-brand-cream mb-4 font-arabic">
            فروعنا <span className="text-gradient-gold">في ليبيا</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            نتواجد في المدن الرئيسية لخدمتك أينما كنت. زور أقرب فرع للتعرف على منتجاتنا وخدماتنا
          </p>
        </div>
      </section>

      {/* Branches Grid */}
      <section ref={sectionRef} className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className={`branch-card glass-card overflow-hidden hover:border-brand-gold/30 transition-all duration-500 ${
                  branch.isMain ? 'md:scale-105 border-brand-gold/20' : ''
                }`}
              >
                {/* Header */}
                <div className="relative p-6 pb-4">
                  {branch.isMain && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30">
                      <span className="text-brand-gold text-xs font-semibold">الفرع الرئيسي</span>
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h2 className="text-brand-cream text-2xl font-bold font-arabic">
                    {branch.city}
                  </h2>
                </div>

                {/* Details */}
                <div className="px-6 pb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Navigation className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-brand-gray text-xs mb-1">العنوان</p>
                      <p className="text-brand-cream text-sm">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-brand-gray text-xs mb-1">الهاتف</p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-brand-cream text-sm hover:text-brand-gold transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-brand-gray text-xs mb-1">ساعات العمل</p>
                      <p className="text-brand-cream text-sm">{branch.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Map Button */}
                <div className="px-6 pb-6">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-gold/10 text-brand-gold font-medium hover:bg-brand-gold/20 transition-colors border border-brand-gold/20"
                  >
                    <Navigation className="w-4 h-4" />
                    عرض على الخريطة
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="glass-card overflow-hidden max-w-5xl mx-auto">
            <div className="relative h-[400px] bg-brand-navy/30 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-brand-gold/50 mx-auto mb-4" />
                <p className="text-brand-gray text-lg mb-2">خريطة الفروع</p>
                <p className="text-brand-gray/60 text-sm">
                  طرابلس | بنغازي | مصراته
                </p>
              </div>

              {/* Decorative dots representing cities */}
              <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-brand-gold animate-pulse-glow" />
              <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-brand-gold animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 rounded-full bg-brand-gold animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
