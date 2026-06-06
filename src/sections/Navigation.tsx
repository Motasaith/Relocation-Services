import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Section-aware color switching
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    const lightSections = document.querySelectorAll('[data-theme="light"]');

    darkSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 72px',
        end: 'bottom 72px',
        onEnter: () => setIsDark(true),
        onEnterBack: () => setIsDark(true),
      });
    });

    lightSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 72px',
        end: 'bottom 72px',
        onEnter: () => setIsDark(false),
        onEnterBack: () => setIsDark(false),
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const textColor = isScrolled ? '#012A4A' : isDark ? '#F7F5F3' : '#012A4A';

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 transition-all duration-400"
        style={{
          zIndex: 100,
          height: '72px',
          backgroundColor: isScrolled ? 'rgba(247, 245, 243, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between h-full px-6 lg:px-12" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Logo */}
          <a
            href="#hero"
            className="font-display transition-colors duration-400"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: textColor,
              textDecoration: 'none',
            }}
          >
            AI NOVARA
          </a>

          {/* Center Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body link-underline transition-colors duration-400"
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: textColor,
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right - CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-block font-body transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: isScrolled ? '#B7B7A4' : 'transparent',
                color: isScrolled ? '#012A4A' : textColor,
                borderRadius: '24px',
                padding: '10px 24px',
                border: isScrolled ? 'none' : `1px solid ${textColor}`,
                textDecoration: 'none',
              }}
            >
              Get a Quote
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block transition-all duration-300"
                style={{
                  width: '20px',
                  height: '1.5px',
                  backgroundColor: textColor,
                  transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                }}
              />
              <span
                className="block transition-all duration-300"
                style={{
                  width: '20px',
                  height: '1.5px',
                  backgroundColor: textColor,
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block transition-all duration-300"
                style={{
                  width: '20px',
                  height: '1.5px',
                  backgroundColor: textColor,
                  transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 transition-all duration-400 md:hidden"
        style={{
          zIndex: 99,
          backgroundColor: '#012A4A',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display transition-all duration-400"
              style={{
                fontSize: '36px',
                fontWeight: 400,
                color: '#F7F5F3',
                textDecoration: 'none',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: mobileOpen ? `${i * 0.08}s` : '0s',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
