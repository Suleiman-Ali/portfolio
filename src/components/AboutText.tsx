import { m, LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';
import { builtWhileInViewAnimation } from '../data';

interface AboutTextProps {
  children: ReactNode;
  delay: number;
}

function AboutText({ children, delay }: AboutTextProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.p
        className="about__text"
        {...builtWhileInViewAnimation('x', -25, delay)}
      >
        {children}
      </m.p>
    </LazyMotion>
  );
}

export default AboutText;
