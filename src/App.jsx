import React, { useState, useEffect } from 'react';
import { Header } from '@/shared/layout/Header';
import { Hero } from '@/widgets/Hero';
import { Brands } from '@/widgets/Brands';
import { Services } from './widgets/Services';
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
        <Services />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default App;
