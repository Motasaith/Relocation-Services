import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COUNTRIES = [
  {
    name: 'UNITED KINGDOM',
    headline: 'Relocating to the UK',
    body: "From London's dynamic business districts to Manchester's thriving tech scene, we manage every detail of your UK relocation. Home finding, school placements, and corporate setup — all under one roof.",
    cta: 'Explore United Kingdom',
    images: ['/images/country-uk-1.jpg', '/images/country-uk-2.jpg', '/images/country-uk-3.jpg'],
  },
  {
    name: 'SAUDI ARABIA',
    headline: 'Your Saudi Journey Begins Here',
    body: 'Navigate Vision 2030 opportunities with confidence. We facilitate smooth transitions to Riyadh and Jeddah, handling cultural integration, housing, and business licensing.',
    cta: 'Explore Saudi Arabia',
    images: ['/images/country-sa-1.jpg', '/images/country-sa-2.jpg', '/images/country-sa-3.jpg'],
  },
  {
    name: 'UAE / DUBAI',
    headline: 'Dubai, Your New Address',
    body: "The city of possibilities awaits. From free zone company formation to luxury villa rentals, we make your Dubai relocation as seamless as the desert sunrise.",
    cta: 'Explore UAE / Dubai',
    images: ['/images/country-uae-1.jpg', '/images/country-uae-2.jpg', '/images/country-uae-3.jpg'],
  },
  {
    name: 'BAHRAIN',
    headline: 'Discover Bahrain',
    body: "The Gulf's hidden gem for business and lifestyle. We guide you through Bahrain's welcoming expat community, from waterfront apartments to commercial licenses.",
    cta: 'Explore Bahrain',
    images: ['/images/country-bh-1.jpg', '/images/country-bh-2.jpg', '/images/country-bh-3.jpg'],
  },
];

export default function CountryHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const countryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Horizontal scroll galleries
    const galleries = section.querySelectorAll('.gallery-wrap');
    galleries.forEach((galleryWrap, index) => {
      const gallery = galleryWrap.querySelector('.gallery') as HTMLElement;
      if (!gallery) return;

      const items = gallery.querySelectorAll('.gallery__item');
      let scrollEnd: number;

      if (index % 2 === 0) {
        scrollEnd = gallery.scrollWidth - window.innerWidth;
        gsap.to(gallery, {
          x: -scrollEnd,
          ease: 'none',
          scrollTrigger: {
            trigger: galleryWrap,
            start: 'top 20%',
            end: '+=' + scrollEnd,
            scrub: 0.2,
          },
        });
      } else {
        scrollEnd = window.innerWidth - gallery.scrollWidth;
        gsap.to(gallery, {
          x: scrollEnd,
          ease: 'none',
          scrollTrigger: {
            trigger: galleryWrap,
            start: 'top 20%',
            end: '+=' + Math.abs(scrollEnd),
            scrub: 0.2,
          },
        });
      }

      // Parallax on item inner images
      items.forEach((item, itemIndex) => {
        const img = item.querySelector('.gallery__item-img') as HTMLElement;
        if (!img) return;

        gsap.to(img, {
          xPercent: itemIndex % 2 === 0 ? -20 : 20,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.1,
          },
        });
      });
    });

    // Text block animations
    countryRefs.current.forEach((countryEl) => {
      if (!countryEl) return;
      const textBlock = countryEl.querySelector('.text-block');
      if (!textBlock) return;

      gsap.fromTo(
        textBlock,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: countryEl,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="highlights" data-theme="light" className="bg-ivory">
      {COUNTRIES.map((country, i) => {
        const isEven = i % 2 === 1;

        return (
          <div
            key={country.name}
            ref={(el) => { countryRefs.current[i] = el; }}
            className="py-16 lg:py-24"
            style={{ borderBottom: '1px solid var(--border-light)' }}
          >
            <div
              className={`mx-auto px-6 lg:px-12 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}
              style={{ maxWidth: '1440px' }}
            >
              {/* Text Block */}
              <div
                className="text-block flex flex-col justify-center lg:w-[35%]"
                style={{ opacity: 0 }}
              >
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
                  {country.name}
                </p>

                <h2
                  className="font-display mb-6"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 52px)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    color: '#012A4A',
                  }}
                >
                  {country.headline}
                </h2>

                <p
                  className="font-body mb-6"
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: '#2A3B45',
                  }}
                >
                  {country.body}
                </p>

                <a
                  href="#"
                  className="font-body link-underline inline-block self-start"
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#012A4A',
                    textDecoration: 'none',
                  }}
                >
                  {country.cta} →
                </a>
              </div>

              {/* Horizontal Scroll Gallery */}
              <div className="gallery-wrap lg:w-[65%] overflow-hidden">
                <div
                  className="gallery flex gap-4"
                  style={{ width: 'max-content' }}
                >
                  {country.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="gallery__item relative overflow-hidden flex-shrink-0"
                      style={{
                        width: 'clamp(280px, 25vw, 400px)',
                        aspectRatio: '3/2',
                        borderRadius: '8px',
                      }}
                    >
                      <div
                        className="gallery__item-img absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    </div>
                  ))}
                  {/* Duplicate for more scroll length */}
                  {country.images.map((img, imgIdx) => (
                    <div
                      key={`dup-${imgIdx}`}
                      className="gallery__item relative overflow-hidden flex-shrink-0"
                      style={{
                        width: 'clamp(280px, 25vw, 400px)',
                        aspectRatio: '3/2',
                        borderRadius: '8px',
                      }}
                    >
                      <div
                        className="gallery__item-img absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
