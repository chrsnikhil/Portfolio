import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Show dock after scrolling 100px
      setVisible(currentScrollPos > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return visible;
} 