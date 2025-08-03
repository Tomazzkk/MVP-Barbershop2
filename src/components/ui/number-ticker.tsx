"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
}

export const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  className,
}: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          if (Number.isInteger(value)) {
            ref.current.textContent = Intl.NumberFormat("pt-BR").format(
              latest.toFixed(0),
            );
          } else {
            ref.current.textContent = latest.toFixed(2).replace(".", ",");
          }
        }
      }),
    [springValue, value],
  );

  return (
    <span
      className={cn(
        "inline-block tabular-nums",
        className,
      )}
      ref={ref}
    />
  );
};