import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronLeft } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/products', label: 'المنتجات' },
  { path: '/brands', label: 'الماركات' },
  { path: '/projects', label: 'المشاريع' },
  { path: '/about', label: 'من نحن' },
  { path: '/branches', label: 'الفروع' },
  { path: '/contact', label: 'تواصل معنا' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/90 backdrop-blur-xl shadow-lg'
            : 'bg-brand-dark/80' // مهم بدل transparent
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-gold to-brand-goldLight flex items-center justify-center">
                <span className="text-black font-bold text-lg">إ</span>
              </div>
              <h1 className="text-white font-bold text-lg">
                الإنارة الحديثة
              </h1>
            </Link>

            {/* Desktop */}
            <nav className="hidden lg:flex gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    location.pathname === link.path
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex flex-col pt-24 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-4 text-white border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
