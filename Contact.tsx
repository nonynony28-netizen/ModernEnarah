import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  {
    icon: Phone,
    label: 'الهاتف',
    value: '+218 91 234 5678',
    href: 'tel:+218912345678',
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'info@alinara.ly',
    href: 'mailto:info@alinara.ly',
  },
  {
    icon: MapPin,
    label: 'العنوان',
    value: 'طرابلس، ليبيا',
    href: '#',
  },
  {
    icon: Clock,
    label: 'ساعات العمل',
    value: 'السبت - الخميس: 9ص - 6م',
    href: '#',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-form',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.contact-info-item',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="relative pt-20">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Contact background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        </div>

        <div className="relative z-10 section-padding text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            نحن هنا لمساعدتك
          </span>
          <h1 className="heading-xl text-brand-cream mb-4 font-arabic">
            تواصل <span className="text-gradient-gold">معنا</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            هل لديك سؤال أو مشروع؟ فريقنا جاهز لمساعدتك. أرسل لنا رسالتك وسنرد عليك في أقرب وقت
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="py-24 bg-brand-darker">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="heading-md text-brand-cream mb-4 font-arabic">
                  معلومات التواصل
                </h2>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                  يمكنك التواصل معنا عبر أي من القنوات التالية. فريقنا جاهز لمساعدتك.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-info-item flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      <item.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-brand-gray text-xs mb-1">{item.label}</p>
                      <p className="text-brand-cream text-sm font-medium group-hover:text-brand-gold transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="contact-form glass-card p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
                    <h3 className="text-brand-cream text-xl font-bold mb-2">
                      تم إرسال رسالتك بنجاح!
                    </h3>
                    <p className="text-brand-gray">
                      سنتواصل معك في أقرب وقت ممكن
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-brand-cream text-xl font-bold mb-6 font-arabic">
                      أرسل رسالتك
                    </h3>

                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-brand-gray text-sm mb-2">
                        <User className="w-4 h-4 text-brand-gold" />
                        الاسم
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-brand-cream placeholder-brand-gray/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center gap-2 text-brand-gray text-sm mb-2">
                        <Phone className="w-4 h-4 text-brand-gold" />
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-brand-cream placeholder-brand-gray/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="flex items-center gap-2 text-brand-gray text-sm mb-2">
                        <Mail className="w-4 h-4 text-brand-gold" />
                        البريد الإلكتروني (اختياري)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-brand-cream placeholder-brand-gray/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="flex items-center gap-2 text-brand-gray text-sm mb-2">
                        <MessageSquare className="w-4 h-4 text-brand-gold" />
                        الرسالة
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-brand-cream placeholder-brand-gray/50 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                    >
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark">
        <div className="section-padding">
          <div className="glass-card p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <h2 className="heading-md text-brand-cream mb-4 font-arabic">
              زورنا في أقرب فرع
            </h2>
            <p className="body-lg mb-8">
              نحن متواجدون في طرابلس وبنغازي ومصراته. زور أقرب فرع لتتعرف على منتجاتنا وخدماتنا مباشرة.
            </p>
            <a
              href="/branches"
              className="btn-outline inline-flex items-center gap-2"
            >
              عرض الفروع
              <ArrowLeft className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
