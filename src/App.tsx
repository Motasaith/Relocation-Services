import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import MarketSelector from './sections/MarketSelector';
import Services from './sections/Services';
import WhyChoose from './sections/WhyChoose';
import HowItWorks from './sections/HowItWorks';
import CountryHighlights from './sections/CountryHighlights';
import ServicesMarquee from './sections/ServicesMarquee';
import Testimonials from './sections/Testimonials';
import CTABanner from './sections/CTABanner';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after everything loads
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    return () => {
      lenis.destroy();
      window.removeEventListener('load', handleLoad);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <MarketSelector />
        <Services />
        <WhyChoose />
        <HowItWorks />
        <CountryHighlights />
        <ServicesMarquee />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
