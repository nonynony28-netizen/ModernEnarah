import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowLeft,
  Zap,
  Shield,
  Award,
  Star,
  ChevronLeft,
  Lightbulb,
  Cable,
  Layers,
  Sparkles,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Award,
    title: 'جودة عالية',
    desc: 'منتجات معتمدة من أفضل الماركات العالمية',
  },
  {
    icon: Layers,
    title: 'حلول متكاملة',
    desc: 'تغطية كاملة لاحتياجاتك الكهربائية والإنارة',
  },
  {
    icon: Star,
    title: 'اختيار احترافي',
    desc: 'فريق متخصص لمساعدتك في اختيار الأنسب',
  },
]

const productPreview = [
  { name: 'سبوتات', image: '/images/cat-spotlight.jpg', count: '120+ منتج' },
  { name: 'ثريات', image: '/images/cat-chandelier.jpg', count: '85+ منتج' },
  { name: 'أسلاك وكوابل', image: '/images/cat-cables.jpg', count: '200+ منتج' },
  { name: 'LED Profile', image: '/images/cat-ledprofile.jpg', count: '60+ منتج' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline()
      heroTl
        .fromTo(
          '.hero-title',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        .fromTo(
          '.hero-subtitle',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-desc',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-stats',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )

      // Features scroll animation
      gsap.fromTo(
        '.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Products scroll animation
      gsap.fromTo(
        '.product-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // CTA section animation
      gsap.fromTo(
        '.cta-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Industrial lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-brand-darker/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/60 to-transparent" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-gold/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 section-padding text-center max-w-5xl mx-auto pt-20">
          <div className="hero-title mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 inline-block ml-1" />
              حلول الإنارة المتكاملة
            </span>
            <h1 className="heading-xl text-brand-cream font-arabic">
              الإنارة <span className="text-gradient-gold">الحديثة</span>
            </h1>
          </div>

          <div className="hero-subtitle mb-6">
            <p className="text-brand-gold/80 text-lg sm:text-xl font-medium tracking-wide uppercase">
              Modern Lighting Solutions
            </p>
          </div>

          <div className="hero-desc mb-10">
            <p className="body-lg max-w-2xl mx-auto">
              نقدم حلول الإنارة والأنظمة الكهربائية المتكاملة للمشاريع الصناعية والتجارية والسكنية بأعلى معايير الجودة والكفاءة
            </p>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/products" className="btn-primary flex items-center gap-2 text-base">
              استعرض المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline flex items-center gap-2 text-base"
            >
              تواصل معنا
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '12+', label: 'سنوات خبرة' },
              { value: '340+', label: 'مشروع منجز' },
              { value: '6', label: 'شركاء عالميين' },
              { value: '1000+', label: 'عميل راضٍ' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card px-4 py-4 text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-brand-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-brand-gray text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-brand-gray text-xs">اسحب للأسفل</span>
          <div className="w-6 h-10 rounded-full border-2 border-brand-gold/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-brand-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-sm font-medium uppercase tracking-wider mb-3 block">
              لماذا نحن
            </span>
            <h2 className="heading-lg text-brand-cream font-arabic">
              نتميز بـ<span className="text-gradient-gold">الجودة والاحترافية</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-card glass-card p-8 group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-brand-cream text-xl font-bold mb-3 font-arabic">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section ref={productsRef} className="relative py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-brand-gold text-sm font-medium uppercase tracking-wider mb-3 block">
                منتجاتنا
              </span>
              <h2 className="heading-lg text-brand-cream font-arabic">
                تشكيلة <span className="text-gradient-gold">متنوعة</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="btn-outline flex items-center gap-2"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productPreview.map((product, i) => (
              <Link
                key={i}
                to="/products"
                className="product-card group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <h3 className="text-brand-cream text-xl font-bold mb-1 font-arabic">
                    {product.name}
                  </h3>
                  <p className="text-brand-gold text-sm">{product.count}</p>
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-brand-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowLeft className="w-5 h-5 text-brand-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality / About Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Images Collage */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-[70%] h-[65%] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/quality.jpg"
                  alt="Quality lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-dark">
                <img
                  src="/images/collage1.jpg"
                  alt="Interior lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-[5%] w-[40%] h-[35%] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-dark">
                <img
                  src="/images/collage2.jpg"
                  alt="Cable installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-brand-gold text-sm font-medium uppercase tracking-wider mb-3 block">
                الجودة والمعايير
              </span>
              <h2 className="heading-lg text-brand-cream mb-6 font-arabic">
                أعلى معايير <span className="text-gradient-gold">الجودة</span>
              </h2>
              <p className="body-lg mb-8">
                من اختيار الكابلات حتى التركيب النهائي، كل تفصيل مهندس للمتانة والسلامة. نتعاون مع مصنعين معتمدين وندعم كل تركيب بشهادات مطابقة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: 'منتجات معتمدة وآمنة' },
                  { icon: Zap, text: 'كفاءة طاقة عالية' },
                  { icon: Lightbulb, text: 'تقنيات إنارة حديثة' },
                  { icon: Cable, text: 'مواد أولية premium' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-brand-gold" />
                    </div>
                    <span className="text-brand-cream text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                اكتشف المزيد
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark to-brand-darker" />
        </div>

        <div className="relative z-10 section-padding">
          <div className="cta-content glass-card p-10 sm:p-16 text-center max-w-4xl mx-auto">
            <h2 className="heading-lg text-brand-cream mb-4 font-arabic">
              جاهز لبدء <span className="text-gradient-gold">مشروعك</span>؟
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              فريقنا المتخصص جاهز لمساعدتك في اختيار أفضل الحلول الكهربائية والإنارة لمشروعك. تواصل معنا اليوم للحصول على استشارة مجانية.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 text-base">
                تواصل معنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link to="/branches" className="btn-outline flex items-center gap-2 text-base">
                زور أقرب فرع
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
