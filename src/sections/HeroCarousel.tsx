import { useState, useEffect, useCallback } from 'react';

const IMAGE_PATHS = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
  '/images/hero-6.jpg',
  '/images/hero-7.jpg',
  '/images/hero-8.jpg',
  '/images/hero-9.jpg',
  '/images/hero-10.jpg',
];

const SLIDE_DURATION = 5000; // ms between slides
const TRANSITION_DURATION = 1200; // ms for crossfade

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (transitioning) return;
    const next = (currentIndex + 1) % IMAGE_PATHS.length;
    setNextIndex(next);
    setTransitioning(true);

    // After transition completes, swap current to next
    setTimeout(() => {
      setCurrentIndex(next);
      setNextIndex(null);
      setTransitioning(false);
    }, TRANSITION_DURATION);
  }, [currentIndex, transitioning]);

  useEffect(() => {
    const timer = setInterval(goToNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Current slide */}
      <div
        key={`slide-current-${currentIndex}`}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${IMAGE_PATHS[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: `heroKenBurns ${SLIDE_DURATION + TRANSITION_DURATION}ms ease-out forwards`,
        }}
      />

      {/* Next slide (fades in on top) */}
      {nextIndex !== null && (
        <div
          key={`slide-next-${nextIndex}`}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${IMAGE_PATHS[nextIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
            animation: `heroFadeIn ${TRANSITION_DURATION}ms ease-in-out forwards`,
          }}
        />
      )}

      {/* Slide indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 5,
        }}
      >
        {IMAGE_PATHS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === currentIndex ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              backgroundColor:
                i === currentIndex
                  ? 'rgba(247, 245, 243, 0.9)'
                  : 'rgba(247, 245, 243, 0.35)',
            }}
            onClick={() => {
              if (transitioning || i === currentIndex) return;
              setNextIndex(i);
              setTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(i);
                setNextIndex(null);
                setTransitioning(false);
              }, TRANSITION_DURATION);
            }}
          />
        ))}
      </div>
    </div>
  );
}
