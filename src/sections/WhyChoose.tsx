import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 500, suffix: '+', label: 'Families Relocated' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 4, suffix: '', label: 'Countries Covered' },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Left column animation
    gsap.fromTo(
      leftRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Stats animation
    const validStats = statsRef.current.filter(Boolean);
    gsap.fromTo(
      validStats,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Counter animation
    numbersRef.current.forEach((numEl, i) => {
      if (!numEl) return;
      const target = STATS[i].value;

      gsap.fromTo(
        { val: 0 },
        { val: 0 },
        {
          scrollTrigger: {
            trigger: numEl,
            start: 'top 80%',
            toggleActions: 'play none none none',
            onEnter: () => {
              gsap.to(
                { val: 0 },
                {
                  val: target,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: function () {
                    const current = Math.round(this.targets()[0].val);
                    numEl.textContent = current + STATS[i].suffix;
                  },
                }
              );
            },
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-theme="light"
      className="bg-ivory"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div
        className="mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        style={{ maxWidth: '1440px' }}
      >
        {/* Left Column */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <p
            className="font-body mb-4"
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#A5A58D',
            }}
          >
            WHY CHOOSE US
          </p>

          <h2
            className="font-display mb-8"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: '#012A4A',
            }}
          >
            A Decade of Global Expertise
          </h2>

          <p
            className="font-body mb-6"
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#2A3B45',
            }}
          >
            For over ten years, AI Novara has guided individuals, families, and corporations through seamless relocations across four countries. We combine deep local knowledge with a global perspective, ensuring every detail is handled with precision and care.
          </p>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'rgba(42, 59, 69, 0.7)',
            }}
          >
            From finding your dream home to establishing your business presence, our dedicated team manages the complexities so you can focus on what matters most.
          </p>
        </div>

        {/* Right Column - Stats */}
        <div className="flex flex-col gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { statsRef.current[i] = el; }}
              className="py-8"
              style={{
                opacity: 0,
                borderBottom: i < STATS.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}
            >
              <span
                ref={(el) => { numbersRef.current[i] = el; }}
                className="font-display block"
                style={{
                  fontSize: 'clamp(36px, 5vw, 80px)',
                  fontWeight: 400,
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#012A4A',
                }}
              >
                0{stat.suffix}
              </span>
              <span
                className="font-body mt-2 block"
                style={{
                  fontSize: '14px',
                  color: 'rgba(42, 59, 69, 0.6)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
