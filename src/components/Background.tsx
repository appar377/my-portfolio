'use client';

import ThreeScene from './ThreeScene';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 3D Scene */}
      <ThreeScene />
    </div>
  );
};

export default Background; 