"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface NumberTickerProps {
  value: number;
  className?: string;
}

export const NumberTicker = ({ value, className }: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // We initialize the motion value at 0. It will animate to the first `value` when the component mounts.
  const motionValue = useMotionValue(0);

  // The key change is here: we adjust the spring properties to be less stiff and have more damping.
  // This creates a smoother, slightly longer animation that feels less abrupt, especially when starting from 0.
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 80,
  });

  useEffect(() => {
    // When the `value` prop changes (e.g., another service is added),
    // we update the target for our motion value. The spring animation handles the rest.
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    // This effect listens for changes in the spring's value and updates the DOM.
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // We format the number to have two decimal places with a comma, like "120,00".
        ref.current.textContent = latest.toFixed(2).replace(".", ",");
      }
    });
    
    // We clean up the listener when the component unmounts.
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} className={className} />;
};