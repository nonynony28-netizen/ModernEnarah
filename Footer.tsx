import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/products', label: 'المنتجات' },
  { path: '/brands', label: 'الماركات' },
  { path: '/projects', label: 'المشاريع' },
  { path: '/about', label: 'من نحن' },
  { path: '/contact', label: 'تواصل معنا' },
]

const contactInfo = [
  { icon: Phone, label: 'الهاتف', value: '+218 91 234 5678' },
  { icon: Mail, label: 'البريد', value: 'info@alinara.ly' },
  { icon: MapPin, label: 'العنوان', value: 'طرابلس، ليبيا' },
  { icon: Clock, label: 'ساعات العمل', value: 'السبت - الخميس: 9ص - 6م' },
]

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark border-t border-white/5">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold to-brand-goldLight flex items-center justify-center shadow-lg shadow-brand-gold/20">
                <span className="text-brand-darker font-bold text-xl">إ</span>
              </div>
              <div>
                <h3 className="text-brand-cream font-bold text-xl font-arabic">
                  الإنارة الحديثة
                </h3>
                <p className="text-brand-gray text-xs">Modern Lighting Solutions</p>
              </div>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              نقدم حلول الإنارة والأنظمة الكهربائية المتكاملة للمشاريع الصناعية والتجارية والسكنية بأعلى معايير الجودة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-cream font-semibold text-lg mb-6 relative">
              روابط سريعة
              <span className="absolute bottom-0 right-0 w-8 h-0.5 bg-brand-gold rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-gray hover:text-brand-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-brand-cream font-semibold text-lg mb-6 relative">
              المنتجات
              <span className="absolute bottom-0 right-0 w-8 h-0.5 bg-brand-gold rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3">
              {['سبوتات', 'ثريات', 'أسلاك وكوابل', 'LED Profile', 'لوحات توزيع', 'لمبات LED'].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-brand-gray hover:text-brand-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-cream font-semibold text-lg mb-6 relative">
              معلومات التواصل
              <span className="absolute bottom-0 right-0 w-8 h-0.5 bg-brand-gold rounded-full" />
            </h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs mb-0.5">{item.label}</p>
                    <p className="text-brand-cream text-sm">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-padding py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brand-gray text-sm">
              © 2025 الإنارة الحديثة. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-brand-gray hover:text-brand-gold text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/" className="text-brand-gray hover:text-brand-gold text-sm transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
