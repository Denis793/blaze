import { useState, useEffect, useRef } from 'react';

export const useHeaderScroll = (scrollThreshold = 80) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > scrollThreshold);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (Math.abs(currentY - lastScrollY.current) > 10) {
            setScrollDirection(currentY > lastScrollY.current && currentY > scrollThreshold ? 'down' : 'up');
            lastScrollY.current = currentY;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return { scrolled, scrollDirection };
};
