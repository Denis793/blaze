import React, { useState, useEffect } from 'react';
import { Header } from '@/layout/Header';
import { Hero } from '@/widgets/Hero';
import { Brands } from '@/widgets/Brands';
import { Features } from '@/widgets/Features';
import { Pricing } from './components/sections/Pricing';
import { Newsletter } from '@/widgets/Newsletter';
import { Footer } from '@/layout/Footer';
import { Preloader } from '@/shared/ui/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <Header />
      <main>
        <Hero />
        <Brands />
        <Features />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />

      <a href="#home" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
    </>
  );
};

export default App;
