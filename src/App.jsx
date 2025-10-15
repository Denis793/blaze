import React, { useState, useEffect } from 'react';
import { Header } from '@/shared/layout/Header';
import { Hero } from '@/widgets/Hero';
import { Brands } from '@/widgets/Brands';
import { Features } from '@/widgets/Features';
import { Newsletter } from '@/widgets/Newsletter';
import { Footer } from '@/shared/layout/Footer';
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
