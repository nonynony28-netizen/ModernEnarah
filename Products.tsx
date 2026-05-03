import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Lightbulb,
  Sparkles,
  Cable,
  Layers,
  ArrowLeft,
  Check,
  Zap,
  Phone,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    id: 1,
    name: 'سبوتات',
    nameEn: 'Spotlights',
    image: '/images/cat-spotlight.jpg',
    description: 'سبوتات LED عالية الجودة بأشكال وتصاميم متنوعة تناسب جميع الأماكن',
    features: ['LED عالي الكفاءة', 'تصاميم حديثة', 'عمر افتراضي طويل', 'سهولة التركيب'],
    count: '120+',
  },
  {
    id: 2,
    name: 'ثريات',
    nameEn: 'Chandeliers',
    image: '/images/cat-chandelier.jpg',
    description: 'ثريات فاخرة بتصاميم كلاسيكية وعصرية لإضفاء لمسة elegance على المكان',
    features: ['تصاميم فاخرة', 'مواد premium', 'إضاءة مثالية', 'صناعة يدوية'],
    count: '85+',
  },
  {
    id: 3,
    name: 'أسلاك وكوابل',
    nameEn: 'Wires & Cables',
    image: '/images/cat-cables.jpg',
    description: 'أسلاك وكوابل كهربائية عالية الجودة لمختلف الاستخدامات الصناعية والسكنية',
    features: ['معايير safety عالية', 'مقاومة للحرارة', 'عزل ممتاز', 'مواصفات عالمية'],
    count: '200+',
  },
  {
    id: 4,
    name: 'LED Profile',
    nameEn: 'LED Profiles',
    image: '/images/cat-ledprofile.jpg',
    description: 'بروفايلات LED بأطوال وأشكال متنوعة للإنارة المخفية والديكورية',
    features: ['ألمنيوم premium', 'تصميم مرن', 'تركيب سهل', 'إضاءة موزعة'],
    count: '60+',
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-page-card',
        { y: 60, opacity: 0 },
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
          <img
            src="/images/company.jpg"
            alt="Products background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        </div>

        <div className="relative z-10 section-padding text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            تشكيلة واسعة
          </span>
          <h1 className="heading-xl text-brand-cream mb-4 font-arabic">
            منتجات <span className="text-gradient-gold">الإنارة الحديثة</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من منتجات الإنارة والمواد الكهربائية بأعلى معايير الجودة من أفضل الماركات العالمية
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={sectionRef} className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="product-page-card group glass-card overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent" />
                  
                  {/* Count Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30">
                    <span className="text-brand-gold text-sm font-semibold">{cat.count} منتج</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                      {cat.id === 1 && <Lightbulb className="w-5 h-5 text-brand-gold" />}
                      {cat.id === 2 && <Sparkles className="w-5 h-5 text-brand-gold" />}
                      {cat.id === 3 && <Cable className="w-5 h-5 text-brand-gold" />}
                      {cat.id === 4 && <Layers className="w-5 h-5 text-brand-gold" />}
                    </div>
                    <div>
                      <h3 className="text-brand-cream text-xl font-bold font-arabic">
                        {cat.name}
                      </h3>
                      <p className="text-brand-gray text-xs">{cat.nameEn}</p>
                    </div>
                  </div>

                  <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {cat.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        <span className="text-brand-gray text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-outline flex items-center justify-center gap-2 text-sm">
                    استعرض المنتجات
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="glass-card p-8 sm:p-12 max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-brand-cream mb-4 font-arabic">
              لا تجد ما تبحث عنه؟
            </h2>
            <p className="body-lg mb-8">
              نقدم خدمة الطلب الخاصة للمنتجات غير المتوفرة في المخزن. تواصل معنا وسنساعدك في توفير ما تحتاجه.
            </p>
            <a
              href="tel:+218912345678"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
