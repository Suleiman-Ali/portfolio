import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AboutTextProps {
  children: ReactNode;
  delay: number;
}

function AboutText({ children, delay }: AboutTextProps): JSX.Element {
  return (
    <motion.p
      className="about__text"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export default AboutText;
