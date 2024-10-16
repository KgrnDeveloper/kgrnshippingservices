"use client"

import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * targetNumber);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber, duration]);

  return <div>{count}</div>;
};

export default AnimatedNumber;
