import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const startAnimation = () => {
    const element = ref.current;

    if (!element) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
      onComplete() {
        // Restart animation after completion
        startAnimation();
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  };

  useIsomorphicLayoutEffect(() => {
    if (inView) {
      startAnimation();
    }
  }, [inView]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
