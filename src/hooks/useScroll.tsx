import { useEffect, useState } from 'react';

export function useScroll(parentElement: Window | HTMLElement | null) {
  const [ target, setTarget ] = useState<Window | HTMLElement | null>(null);
  const [ scrollTop, setScrollTop ] = useState(0);
  const [ scrollLeft, setScrollLeft ] = useState(0);

  useEffect(() => {
    if (parentElement) {
      setTarget(parentElement);
    }
  }, [parentElement]);

  useEffect(() => {
    if (target) {
      target.removeEventListener('scroll', handleScroll);
      target.addEventListener('scroll', handleScroll, {
        passive: true
      });

      handleScroll();
    }

    return () => {
      if (target) {
        target.removeEventListener('scroll', handleScroll);
      }
    };
  }, [target]);

  function handleScroll() {
    setScrollTop((target as any).scrollTop || (target as any).scrollY || 0);
    setScrollLeft((target as any).scrollLeft || (target as any).scrollX || 0);
  }

  return { scrollLeft, scrollTop };
}
