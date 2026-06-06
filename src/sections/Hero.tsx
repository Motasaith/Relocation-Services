import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      .to(line1Ref.current, { opacity: 1, y: 0, duration: 1.0 }, '-=0.3')
      .to(line2Ref.current, { opacity: 1, y: 0, duration: 1.0 }, '-=0.8')
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.7')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to(scrollIndicatorRef.current, { opacity: 1, duration: 0.6 }, '-=0.3');
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-theme="dark"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Image Slideshow Background */}
      <HeroCarousel />

      {/* Top gradient — ensures nav text is readable on any hero image */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          zIndex: 1,
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(1,42,74,0.7) 0%, rgba(1,42,74,0.3) 60%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Full Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(1,42,74,0.45) 0%, rgba(1,42,74,0.3) 50%, rgba(1,42,74,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center h-full px-6"
        style={{ zIndex: 2 }}
      >
        <p
          ref={eyebrowRef}
          className="font-body opacity-0 translate-y-5 mb-6"
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#B7B7A4',
          }}
        >
          INTERNATIONAL RELOCATION EXPERTS
        </p>

        <h1
          ref={line1Ref}
          className="font-display opacity-0 translate-y-10 text-center"
          style={{
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#F7F5F3',
          }}
        >
          YOUR WORLD
        </h1>

        <h1
          ref={line2Ref}
          className="font-display opacity-0 translate-y-10 text-center"
          style={{
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#F7F5F3',
          }}
        >
          RELOCATED
        </h1>

        <p
          ref={subRef}
          className="font-body opacity-0 translate-y-5 text-center mt-8"
          style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'rgba(247, 245, 243, 0.85)',
            maxWidth: '520px',
          }}
        >
          Premium relocation and business setup services across the UK, UAE, Saudi Arabia, and Bahrain.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4 mt-12 opacity-0 translate-y-5"
        >
          <a
            href="#services"
            className="font-body inline-block transition-all duration-300 hover:-translate-y-0.5"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: '#B7B7A4',
              color: '#012A4A',
              borderRadius: '4px',
              padding: '14px 32px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#F7F5F3';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#B7B7A4';
            }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="font-body inline-block transition-all duration-300"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
              color: '#F7F5F3',
              borderRadius: '4px',
              padding: '14px 32px',
              border: '1px solid rgba(247, 245, 243, 0.5)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = '#F7F5F3';
              (e.target as HTMLElement).style.backgroundColor = 'rgba(247, 245, 243, 0.08)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(247, 245, 243, 0.5)';
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 flex flex-col items-center"
        style={{ zIndex: 2 }}
      >
        <div className="relative" style={{ width: '1px', height: '40px', backgroundColor: 'rgba(247, 245, 243, 0.4)' }}>
          <div
            className="scroll-dot absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'rgba(247, 245, 243, 0.6)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
