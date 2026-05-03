import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Eye, Heart, Users, Lightbulb } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: Target,
    title: 'الجودة أولاً',
    desc: 'نلتزم بأعلى معايير الجودة في كل منتج وكل خدمة نقدمها',
  },
  {
    icon: Eye,
    title: 'رؤية مستقبلية',
    desc: 'نستثمر في التقنيات الحديثة لنكون رواداً في مجال الإنارة',
  },
  {
    icon: Heart,
    title: 'العملاء أولوية',
    desc: 'نضع رضا العملاء في صلب كل قرار وكل خطوة نتخذها',
  },
  {
    icon: Users,
    title: 'فريق متخصص',
    desc: 'فريقنا يضم خبراء ومهندسين متخصصين في مجال الكهرباء والإنارة',
  },
]

const timeline = [
  { year: '2013', title: 'التأسيس', desc: 'تأسيس الشركة في طرابلس' },
  { year: '2016', title: 'التوسع', desc: 'افتتاح فرع في بنغازي' },
  { year: '2019', title: 'شراكات', desc: 'شراكة مع ماركات عالمية' },
  { year: '2022', title: 'تميز', desc: 'أكثر من 300 مشروع منجز' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
        '.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.timeline-item',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-section',
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
            alt="About background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        </div>

        <div className="relative z-10 section-padding text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            قصتنا
          </span>
          <h1 className="heading-xl text-brand-cream mb-4 font-arabic">
            من نحن <span className="text-gradient-gold">؟</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            شركة الإنارة الحديثة... رائدة في مجال الإنارة والأنظمة الكهربائية منذ أكثر من عقد
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section ref={sectionRef} className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="about-content relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/company.jpg"
                  alt="Company"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl">
                <p className="text-3xl font-bold text-brand-gold">12+</p>
                <p className="text-brand-gray text-sm">سنوات الخبرة</p>
              </div>
            </div>

            {/* Content */}
            <div className="about-content">
              <h2 className="heading-lg text-brand-cream mb-6 font-arabic">
                نقدم <span className="text-gradient-gold">حلولاً متكاملة</span>
              </h2>
              <p className="body-lg mb-6">
                شركة الإنارة الحديثة هي شركة رائدة في مجال الإنارة والأنظمة الكهربائية في ليبيا. تأسست الشركة بهدف توفير منتجات عالية الجودة وخدمات متميزة للعملاء في مختلف القطاعات الصناعية والتجارية والسكنية.
              </p>
              <p className="body-lg mb-8">
                نؤمن بأن الإنارة ليست مجرد منتج، بل هي جزء أساسي من تجربة المكان. لذلك نحرص على تقديم حلول مبتكرة تجمع بين الجودة العالية، التصميم الأنيق، والكفاءة في استهلاك الطاقة.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '340+', label: 'مشروع منجز' },
                  { value: '1000+', label: 'عميل راضٍ' },
                  { value: '6', label: 'شركاء عالميين' },
                  { value: '3', label: 'فروع' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-4 text-center">
                    <p className="text-2xl font-bold text-brand-gold">{stat.value}</p>
                    <p className="text-brand-gray text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-brand-cream text-2xl font-bold mb-4 font-arabic">
                رسالتنا
              </h3>
              <p className="text-brand-gray leading-relaxed">
                تقديم حلول إنارة وكهربائية متكاملة بأعلى معايير الجودة، مع التركيز على الابتكار والاستدامة لتلبية احتياجات عملائنا وتحقيق رضاهم الكامل.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-brand-cream text-2xl font-bold mb-4 font-arabic">
                رؤيتنا
              </h3>
              <p className="text-brand-gray leading-relaxed">
                أن نكون الخيار الأول والأكثر ثقة في مجال الإنارة والأنظمة الكهربائية في المنطقة، من خلال تقديم منتجات مبتكرة وخدمات استثنائية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-brand-cream mb-4 font-arabic">
              قيمنا <span className="text-gradient-gold">الأساسية</span>
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              نلتزم بمجموعة من القيم التي توجه كل ما نقوم به
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <div
                key={i}
                className="value-card glass-card p-6 text-center group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  <value.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-brand-cream text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-brand-cream mb-4 font-arabic">
              مسيرة <span className="text-gradient-gold">النجاح</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-brand-gold/20" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item relative flex items-start gap-6 pr-12"
                  >
                    {/* Dot */}
                    <div className="absolute right-3 top-2 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>

                    <div className="glass-card p-6 flex-1">
                      <span className="text-brand-gold text-sm font-bold">{item.year}</span>
                      <h4 className="text-brand-cream text-lg font-bold mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-brand-gray text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
