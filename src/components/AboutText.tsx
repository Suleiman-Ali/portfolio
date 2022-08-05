import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { builtWhileInViewAnimation } from '../data';

interface AboutTextProps {
  children: ReactNode;
  delay: number;
}

function AboutText({ children, delay }: AboutTextProps): JSX.Element {
  return (
    <motion.p
      className="about__text"
      {...builtWhileInViewAnimation('x', -25, delay)}
    >
      {children}
    </motion.p>
  );
}

export default AboutText;
