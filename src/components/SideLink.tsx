import { m, LazyMotion, domAnimation } from 'framer-motion';
import { builtWhileInViewAnimation } from '../data';

interface SideLinkProps {
  children: JSX.Element;
  delay: number;
  href: string;
}

function SideLink({ children, delay, href }: SideLinkProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.a
        {...builtWhileInViewAnimation('y', 25, delay)}
        href={href}
        target="_blank"
        className="links__link"
        rel="noreferrer"
      >
        {children}
      </m.a>
    </LazyMotion>
  );
}

export default SideLink;
