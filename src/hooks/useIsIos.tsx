import { useEffect, useState } from 'react';

declare global {
  interface Window {
    MSStream?: boolean;
  }
}

export function useIsIos({
  width,
  height
}: {
  width: number;
  height: number;
}) {
  const [ isIos, setIsIos ] = useState(false);

  useEffect(() => {
    setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
  }, [width, height]);

  return { isIos };
}