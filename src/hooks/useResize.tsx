import { useEffect, useState } from 'react';

export function useResize() {
  const [ windowWidth, setWindowWidth ] = useState(0);
  const [ windowHeight, setWindowHeight ] = useState(0);

  useEffect(() => {
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize, {
      passive: true
    });

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  return { windowWidth, windowHeight };
}
