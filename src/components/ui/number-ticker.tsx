"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface NumberTickerProps {
  value: number;
  className?: string;
}

export const NumberTicker = ({ value, className }: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  const motionValue = useMotionValue(0);

  // Aqui estão os novos valores de "meio-termo".
  // A rigidez (stiffness) foi aumentada para uma animação mais rápida, e o amortecimento (damping)
  // foi ajustado para mantê-la suave sem ser lenta.
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 150,
  });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(2).replace(".", ",");
      }
    });
    
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} className={className} />;
};