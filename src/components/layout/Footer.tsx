import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, CONTACT, SOCIAL_LINKS, FOOTER_LINKS } from '@/lib/constants';

const socialItems = [
  { href: SOCIAL_LINKS.youtube, label: 'YouTube', hoverBg: 'hover:bg-red-600', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', hoverBg: 'hover:bg-gradient-to-br hover:from-warm-500 hover:to-energy-500', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', hoverBg: 'hover:bg-primary-600', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: SOCIAL_LINKS.twitter, label: 'X', hoverBg: 'hover:bg-gray-600', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 relative overflow-hidden" role="contentinfo">
      {/* Subtle gradient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[200px] bg-primary-600/5 blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-creative-600/5 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-energy-500 to-creative-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-white">
                Onli<span className="text-energy-400">Grow</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              AI education, career architecture, life skills, national competitions, and professional tools — delivered inside your school, all year.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 ${social.hoverBg} hover:text-white flex items-center justify-center transition-all duration-300 text-gray-500`}
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: The System */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">The System</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.theSystem.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-energy-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Get Started */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get Started</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.getStarted.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-energy-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get the App */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get the App</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.getTheApp.map((item) => (
                <li key={item.label}>
                  {'disabled' in item && item.disabled ? (
                    <span className="text-sm text-gray-600">{item.label}</span>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-energy-400 hover:text-energy-300 font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-energy-400 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-energy-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-energy-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} {SITE_CONFIG.legalName}
            </p>
            <p className="text-sm text-gray-700 italic">
              Designed for the students nobody designed for.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
