'use client';

import ThreeScene from './ThreeScene';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 3D Scene */}
      <ThreeScene />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px] z-10" />
    </div>
  );
};

export default Background; 