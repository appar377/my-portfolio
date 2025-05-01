'use client';

import { useEffect, useState } from 'react';
import ThreeScene from './ThreeScene';

const Background = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.snap-y') as HTMLElement | null;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const idx = Math.round(scrollTop / height);
      setActiveSection(idx);
    };
    container.addEventListener('scroll', handleScroll);
    // initialize
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* 3D Scene with section-based variation */}
      <ThreeScene activeSection={activeSection} />
    </div>
  );
};

export default Background; 