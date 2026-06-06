import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COUNTRIES = [
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    tagline: 'Your gateway to Europe',
    image: '/images/country-uk-1.jpg',
  },
  {
    flag: '🇦🇪',
    name: 'UAE / Dubai',
    tagline: 'Where ambition meets luxury',
    image: '/images/country-uae-1.jpg',
  },
  {
    flag: '🇸🇦',
    name: 'Saudi Arabia',
    tagline: 'Vision 2030 opportunities',
    image: '/images/country-sa-1.jpg',
  },
  {
    flag: '🇧🇭',
    name: 'Bahrain',
    tagline: "The Gulf's business hub",
    image: '/images/country-bh-1.jpg',
  },
];

export default function MarketSelector() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
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
      id="locations"
      data-theme="light"
      className="bg-ivory"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: '960px' }}>
        <p
          className="font-body text-center mb-4"
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#A5A58D',
          }}
        >
          OPERATING ACROSS
        </p>

        <h2
          className="font-display text-center mb-16"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#012A4A',
          }}
        >
          Four Countries. One Seamless Experience.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COUNTRIES.map((country, i) => (
            <div
              key={country.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                height: '280px',
                borderRadius: '8px',
                opacity: 0,
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
                style={{ backgroundImage: `url(${country.image})` }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  backgroundColor: 'rgba(1, 42, 74, 0.6)',
                }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100"
                style={{
                  backgroundColor: 'rgba(1, 42, 74, 0.4)',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <span style={{ fontSize: '32px' }}>{country.flag}</span>
                <h3
                  className="font-body mt-2"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    textTransform: 'uppercase',
                    color: '#F7F5F3',
                  }}
                >
                  {country.name}
                </h3>
                <p
                  className="font-body mt-1"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(247, 245, 243, 0.8)',
                  }}
                >
                  {country.tagline}
                </p>
              </div>

              {/* Hover CTA */}
              <div
                className="absolute bottom-6 right-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              >
                <span
                  className="font-body"
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#B7B7A4',
                  }}
                >
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
