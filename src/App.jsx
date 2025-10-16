import React from 'react';
import { Header } from '@/shared/layout/Header';
import { Hero } from '@/widgets/Hero';
import { Brands } from '@/widgets/Brands';
import { Services } from './widgets/Services';
import { Features } from '@/widgets/Features';
import { Newsletter } from '@/widgets/Newsletter';
import { Testimonials } from '@/widgets/Testimonials';
import { Footer } from '@/shared/layout/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Features />
        <Newsletter />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
