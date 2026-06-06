import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: '1',
    title: 'Consult',
    description: 'Share your relocation goals with us. We listen, assess, and understand your unique requirements.',
  },
  {
    number: '2',
    title: 'Plan',
    description: 'Our experts craft a detailed, personalized relocation plan covering every aspect of your move.',
  },
  {
    number: '3',
    title: 'Relocate',
    description: 'We execute the plan with precision, handling all logistics until you\'re fully settled.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const steps = stepsRef.current.filter(Boolean);

    gsap.fromTo(
      steps,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
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
      data-theme="dark"
      className="bg-navy relative"
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
          THE PROCESS
        </p>

        <h2
          className="font-display text-center mb-20"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#F7F5F3',
          }}
        >
          Three Steps to Your New Beginning
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
          {/* Connector Lines - Desktop */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0"
            style={{
              height: '1px',
              backgroundColor: 'rgba(183, 183, 164, 0.2)',
            }}
          >
            <div
              className="shimmer-line absolute inset-0"
              style={{ opacity: 0.3 }}
            />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepsRef.current[i] = el; }}
              className="flex-1 text-center relative"
              style={{ opacity: 0 }}
            >
              {/* Number Circle */}
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '1px solid rgba(183, 183, 164, 0.4)',
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: '#012A4A',
                }}
              >
                <span
                  className="font-body"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    textTransform: 'uppercase',
                    color: '#B7B7A4',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="font-body mt-8"
                style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase',
                  color: '#F7F5F3',
                }}
              >
                {step.title}
              </h3>

              <p
                className="font-body mt-3 mx-auto"
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(247, 245, 243, 0.65)',
                  maxWidth: '280px',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
