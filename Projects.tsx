import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, ArrowLeft, MapPin, Check, Lightbulb } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'مجمع الواحة الصناعي',
    location: 'بنغازي',
    category: 'ترقية لوحات توزيع LV',
    image: '/images/project1.jpg',
    description: 'تركيب وترقية كاملة لأنظمة التوزيع الكهربائي للمجمع الصناعي مع لوحات ذكية وأنظمة مراقبة',
    tags: ['لوحات توزيع', 'أنظمة ذكية', 'صناعي'],
  },
  {
    id: 2,
    title: 'فلل الساحل الشمالي',
    location: 'الساحل الليبي',
    category: 'إنارة المناظر الطبيعية والواجهات',
    image: '/images/project2.jpg',
    description: 'تصميم وتنفيذ نظام إنارة متكامل للفلل الفاخرة يشمل إنارة المناظر الطبيعية والواجهات الخارجية',
    tags: ['إنارة خارجية', 'ديكور', 'سكني فاخر'],
  },
  {
    id: 3,
    title: 'المجمع الطبي المركزي',
    location: 'طرابلس',
    category: 'أنظمة الطاقة الاحتياطية والتحكم',
    image: '/images/quality.jpg',
    description: 'تصميم وتنفيذ أنظمة الطاقة الاحتياطية والتحكم للمجمع الطبي مع معايير سلامة عالية',
    tags: ['طاقة احتياطية', 'طبي', 'تحكم'],
  },
  {
    id: 4,
    title: 'مركز اللوجستيات البحري',
    location: 'مصراتة',
    category: 'معدات MV Switchgear',
    image: '/images/collage2.jpg',
    description: 'توريد وتركيب معدات الجهد المتوسط للمركز اللوجستي البحري مع أنظمة الحماية المتكاملة',
    tags: ['MV', 'صناعي', 'لوجستيات'],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
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
            src="/images/hero.jpg"
            alt="Projects background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        </div>

        <div className="relative z-10 section-padding text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            أعمالنا
          </span>
          <h1 className="heading-xl text-brand-cream mb-4 font-arabic">
            مشاريع <span className="text-gradient-gold">منجزة</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            نفخر بتنفيذ مشاريع متنوعة في مختلف المجالات الصناعية والتجارية والسكنية بأعلى معايير الجودة
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={sectionRef} className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card group glass-card overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/30 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30">
                    <span className="text-brand-gold text-xs font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    <span className="text-brand-gray text-sm">{project.location}</span>
                  </div>

                  <h3 className="text-brand-cream text-xl font-bold mb-3 font-arabic">
                    {project.title}
                  </h3>

                  <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-brand-gray text-xs border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-brand-gold text-sm font-medium">
                    <Check className="w-4 h-4" />
                    <span>تم التسليم بنجاح</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="glass-card p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <Lightbulb className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <h2 className="heading-md text-brand-cream mb-4 font-arabic">
              هل لديك مشروع؟
            </h2>
            <p className="body-lg mb-8">
              فريقنا جاهز لمساعدتك في تنفيذ مشروعك بأعلى معايير الجودة والكفاءة. تواصل معنا اليوم.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              ابدأ مشروعك
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
