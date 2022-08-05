import { motion } from 'framer-motion';
import { builtWhileInViewAnimation } from '../data';

interface SideLinkProps {
  children: JSX.Element;
  delay: number;
  href: string;
}

function SideLink({ children, delay, href }: SideLinkProps): JSX.Element {
  return (
    <motion.a
      {...builtWhileInViewAnimation('y', 25, delay)}
      href={href}
      target="_blank"
      className="links__link"
      rel="noreferrer"
    >
      {children}
    </motion.a>
  );
}

export default SideLink;
