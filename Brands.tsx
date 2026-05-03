import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Star, Shield, Check, ArrowLeft } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const brands = [
  {
    id: 1,
    name: 'ENARAH',
    description: 'شركة رائدة في مجال الإنارة LED بتقنيات مبتكرة وحلول موفرة للطاقة',
    logo: 'EN',
    color: '#ff8a00',
    features: ['إنارة LED متطورة', 'كفاءة طاقة عالية', 'ضمان 5 سنوات'],
  },
  {
    id: 2,
    name: 'WELLMAX',
    description: 'علامة تجارية عالمية متخصصة في المنتجات الكهربائية عالية الجودة',
    logo: 'WM',
    color: '#C9A96E',
    features: ['منتجات premium', 'معايير أوروبية', 'تنوع المنتجات'],
  },
]

const stats = [
  { icon: Award, value: '12+', label: 'سنوات خبرة' },
  { icon: Star, value: '340+', label: 'مشروع منجز' },
  { icon: Shield, value: '6', label: 'شركاء عالميين' },
  { icon: Check, value: '24/7', label: 'دعم فني' },
]

export default function Brands() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.brand-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.stat-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 85%',
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
            <Award className="w-4 h-4" />
            شركاء النجاح
          </span>
          <h1 className="heading-xl text-brand-cream mb-4 font-arabic">
            الماركات <span className="text-gradient-gold">المعتمدة</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            نتعاون مع أفضل الماركات العالمية في مجال الإنارة والأنظمة الكهربائية لضمان أعلى جودة لعملائنا
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section ref={sectionRef} className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="brand-card glass-card overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
              >
                {/* Brand Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-center gap-5 mb-6">
                    {/* Logo Placeholder */}
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${brand.color}15`, border: `2px solid ${brand.color}40` }}
                    >
                      <span
                        className="text-2xl font-bold"
                        style={{ color: brand.color }}
                      >
                        {brand.logo}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-brand-cream text-2xl font-bold">
                        {brand.name}
                      </h2>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-brand-gold text-brand-gold"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-brand-gray leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {brand.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-brand-gold/10 text-brand-gold text-sm border border-brand-gold/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="px-8 py-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-brand-gray text-sm">
                    شريك معتمد من الإنارة الحديثة
                  </span>
                  <Check className="w-5 h-5 text-brand-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-item glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <p className="text-3xl font-bold text-brand-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-brand-gray text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="glass-card p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <h2 className="heading-md text-brand-cream mb-4 font-arabic">
              هل تريد أن تكون شريكاً؟
            </h2>
            <p className="body-lg mb-8">
              نرحب بالشركات والمصنعين الراغبين في التعاون معنا. تواصل مع فريقنا لمناقشة فرص الشراكة.
            </p>
            <a
              href="mailto:partners@alinara.ly"
              className="btn-primary inline-flex items-center gap-2"
            >
              تواصل معنا
              <ArrowLeft className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
