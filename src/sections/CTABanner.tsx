import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const elements = content.children;

    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
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
      className="bg-sage"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div
        ref={contentRef}
        className="mx-auto px-6 lg:px-12 text-center"
        style={{ maxWidth: '800px' }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#012A4A',
            opacity: 0,
          }}
        >
          Ready to Begin Your Journey?
        </h2>

        <p
          className="font-body mx-auto mt-6"
          style={{
            fontSize: '17px',
            lineHeight: 1.65,
            color: 'rgba(1, 42, 74, 0.75)',
            maxWidth: '520px',
            opacity: 0,
          }}
        >
          Get a free, no-obligation consultation. Our relocation experts will assess your needs and craft a personalized plan.
        </p>

        <a
          href="#contact"
          className="font-body inline-block mt-10 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            backgroundColor: '#012A4A',
            color: '#F7F5F3',
            borderRadius: '4px',
            padding: '16px 40px',
            textDecoration: 'none',
            opacity: 0,
            boxShadow: '0 8px 24px rgba(1,42,74,0.25)',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#2A3B45';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = '#012A4A';
          }}
        >
          Request a Free Consultation
        </a>
      </div>
    </section>
  );
}
