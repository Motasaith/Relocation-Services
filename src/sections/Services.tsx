import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#B7B7A4" strokeWidth="1.5">
        <path d="M8 20V40H20V28H28V40H40V20L24 8L8 20Z" />
        <circle cx="24" cy="18" r="4" />
      </svg>
    ),
    title: 'Home Finding',
    description: 'We find the perfect residential property tailored to your lifestyle, budget, and family needs in your destination city.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#B7B7A4" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="24" rx="2" />
        <path d="M8 20H40" />
        <path d="M20 28H28" />
        <circle cx="36" cy="36" r="4" />
        <path d="M36 34V36L37 37" />
      </svg>
    ),
    title: 'Office Location & Setup',
    description: 'From scouting to lease negotiation, we secure and set up your commercial space so your business is operational on day one.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#B7B7A4" strokeWidth="1.5">
        <path d="M12 36V24L24 16L36 24V36" />
        <path d="M18 36V28H30V36" />
        <circle cx="24" cy="10" r="4" />
        <path d="M20 10H28" />
      </svg>
    ),
    title: 'School Search',
    description: 'We identify and secure placements in the best international schools, ensuring a smooth transition for your children.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#B7B7A4" strokeWidth="1.5">
        <rect x="10" y="14" width="28" height="24" rx="2" />
        <path d="M10 22H38" />
        <path d="M18 30H30" />
        <path d="M14 18L16 18" />
        <path d="M20 18L22 18" />
        <path d="M34 34L36 36" />
        <path d="M36 34L34 36" />
      </svg>
    ),
    title: 'Luggage & Household Shipping',
    description: 'Door-to-door shipping of your personal belongings with trusted logistics partners. Fully tracked, fully insured.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#B7B7A4" strokeWidth="1.5">
        <rect x="12" y="8" width="24" height="32" rx="2" />
        <path d="M12 16H36" />
        <path d="M18 12H22" />
        <rect x="18" y="22" width="12" height="8" rx="1" />
        <path d="M20 26H28" />
        <path d="M24 24V28" />
      </svg>
    ),
    title: 'Company Formation',
    description: 'Legal establishment of your business entity, from licensing and registration to banking setup and compliance.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#B7B7A4" strokeWidth="1.5">
        <path d="M16 32C16 32 10 28 10 22C10 16 16 12 16 12" />
        <path d="M32 32C32 32 38 28 38 22C38 16 32 12 32 12" />
        <path d="M16 12L24 8L32 12" />
        <path d="M16 32L24 36L32 32" />
        <circle cx="24" cy="22" r="4" />
      </svg>
    ),
    title: 'Full Relocation Packages',
    description: 'Comprehensive, bundled solutions covering every aspect of your move — personal and professional.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      data-theme="dark"
      className="bg-navy"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: '1440px' }}>
        <p
          className="font-body text-center mb-4"
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#B7B7A4',
          }}
        >
          WHAT WE DO
        </p>

        <h2
          className="font-display text-center mb-20"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#F7F5F3',
            maxWidth: '640px',
            margin: '0 auto 80px',
          }}
        >
          End-to-End Relocation Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group cursor-pointer transition-all duration-400"
              style={{
                backgroundColor: 'rgba(247, 245, 243, 0.04)',
                border: '1px solid var(--border-dark)',
                borderRadius: '12px',
                padding: '40px',
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(183, 183, 164, 0.4)';
                el.style.backgroundColor = 'rgba(247, 245, 243, 0.07)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--border-dark)';
                el.style.backgroundColor = 'rgba(247, 245, 243, 0.04)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div>{service.icon}</div>

              <h3
                className="font-body mt-6"
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase',
                  color: '#F7F5F3',
                }}
              >
                {service.title}
              </h3>

              <p
                className="font-body mt-3"
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(247, 245, 243, 0.7)',
                }}
              >
                {service.description}
              </p>

              <a
                href="#"
                className="font-body link-underline inline-block mt-6 transition-colors duration-300"
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#B7B7A4',
                  textDecoration: 'none',
                }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
