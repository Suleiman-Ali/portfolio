import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { builtWhileInViewAnimation, linkClickHandler } from '../data';

function Arrow(): JSX.Element {
  const [top, setTop] = useState<number>(window.scrollY);

  useEffect(() => {
    const handler = () => setTop(window.scrollY);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {top > 0 && (
          <m.button
            className="arrowUp"
            onClick={(e) => linkClickHandler(e, 'app')}
            {...builtWhileInViewAnimation('y', 25, 0.25)}
            exit={{ opacity: 0 }}
          >
            <FaArrowUp />
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default Arrow;
