import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? process.browser && window.innerWidth : undefined,
      height: isClient ? process.browser && window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  if (isClient) {
    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  }

  return windowSize;
}
