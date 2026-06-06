import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: 'AI Novara turned what we expected to be a nightmare move into a genuinely pleasant experience. Every detail was anticipated and handled.',
    name: 'Sarah M.',
    detail: 'Relocated to Dubai',
  },
  {
    quote: 'From company formation to finding our family home in Riyadh, the team was exceptional. True professionals with deep local knowledge.',
    name: 'Ahmed K.',
    detail: 'Relocated to Saudi Arabia',
  },
  {
    quote: 'The school search service alone was worth every penny. Our children settled in immediately thanks to the perfect placement.',
    name: 'James & Emily T.',
    detail: 'Relocated to UK',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15,
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
      data-theme="light"
      className="bg-ivory"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
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
          CLIENT STORIES
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
          Trusted by Families and Businesses Worldwide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              style={{
                borderTop: '2px solid #B7B7A4',
                paddingTop: '32px',
                opacity: 0,
              }}
            >
              <p
                className="font-display italic"
                style={{
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: '#012A4A',
                }}
              >
                "{testimonial.quote}"
              </p>

              <p
                className="font-body mt-6"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#2A3B45',
                }}
              >
                {testimonial.name}
              </p>

              <p
                className="font-body mt-1"
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(42, 59, 69, 0.5)',
                }}
              >
                {testimonial.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
