'use client';

import { useEffect, useState } from 'react';
import ThreeScene from './ThreeScene';
import { usePathname } from 'next/navigation';

const Background = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleWindowScroll = () => {
      const idx = Math.round(window.scrollY / window.innerHeight);
      setActiveSection(idx);
      console.log('window scroll activeSection', idx);
    };
    window.addEventListener('scroll', handleWindowScroll);

    const container = document.querySelector('.snap-y') as HTMLElement | null;
    const handleDivScroll = () => {
      if (!container) return;
      const idx = Math.round(container.scrollTop / container.clientHeight);
      setActiveSection(idx);
      console.log('snap-y scroll activeSection', idx);
    };
    if (container) {
      container.addEventListener('scroll', handleDivScroll);
    }

    // initialize
    handleWindowScroll();
    handleDivScroll();

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      if (container) container.removeEventListener('scroll', handleDivScroll);
    };
  }, []);

  console.log('activeSection', activeSection);
  return (
    <>
      <div className="fixed inset-0 -z-10">
      {/* 3D Scene with section-based variation */}
        <ThreeScene activeSection={activeSection} />
      </div>
    </>
  );
};

export default Background;
