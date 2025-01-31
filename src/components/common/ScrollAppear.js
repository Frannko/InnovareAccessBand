import React, { useEffect, useRef } from 'react';

const ScrollAppear = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target); // Deja de observar el elemento una vez es visible
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
};

export default ScrollAppear;
