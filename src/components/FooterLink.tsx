import { m, LazyMotion, domAnimation } from 'framer-motion';
import { builtWhileInViewAnimation } from '../data';

interface FooterLinkProps {
  children: JSX.Element;
  delay: number;
  href: string;
}

function FooterLink({ children, delay, href }: FooterLinkProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.a
        {...builtWhileInViewAnimation('y', 25, delay)}
        href={href}
        target="_blank"
        className="footerLinks__link"
        rel="noreferrer"
      >
        {children}
      </m.a>
    </LazyMotion>
  );
}

export default FooterLink;
