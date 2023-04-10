import { useEffect, useState } from 'react';

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

export function useIsStandalone({
  width,
  height
}: {
  width: number;
  height: number;
}) {
  const [ isStandalone, setisStandalone ] = useState(false);

  useEffect(() => {
    setisStandalone(!!navigator.standalone || /app/.test(location.hash));
  }, [width, height]);

  return { isStandalone };
}