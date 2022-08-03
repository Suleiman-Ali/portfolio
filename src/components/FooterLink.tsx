import { motion } from 'framer-motion';

interface FooterLinkProps {
  children: JSX.Element;
  delay: number;
  href: string;
}

function FooterLink({ children, delay, href }: FooterLinkProps): JSX.Element {
  return (
    <motion.a
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      href={href}
      target="_blank"
      className="footerLinks__link"
      rel="noreferrer"
    >
      {children}
    </motion.a>
  );
}

export default FooterLink;
