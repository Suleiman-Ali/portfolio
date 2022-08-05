import FooterLink from './FooterLink';
import { motion } from 'framer-motion';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter, FaAt } from 'react-icons/fa';
import {
  MY_GITHUB,
  MY_LINKEDIN,
  MY_TWITTER,
  MY_NUMBER,
  MY_EMAIL,
  builtWhileInViewAnimation,
} from '../data';

function FooterLinks(): JSX.Element {
  return (
    <div className="footerLinks">
      <div className="footerLinks__links">
        <FooterLink delay={0.25} href={`https://github.com/${MY_GITHUB}`}>
          <BsGithub />
        </FooterLink>
        <FooterLink
          delay={0.35}
          href={`https://www.linkedin.com/in/${MY_LINKEDIN}`}
        >
          <FaLinkedinIn />
        </FooterLink>
        <FooterLink delay={0.45} href={`https://twitter.com/${MY_TWITTER}`}>
          <FaTwitter />
        </FooterLink>
        <FooterLink
          delay={0.55}
          href={`https://api.whatsapp.com/send?phone=${MY_NUMBER}`}
        >
          <BsTelephoneFill />
        </FooterLink>
        <FooterLink delay={0.65} href={`mailto:${MY_EMAIL}`}>
          <FaAt />
        </FooterLink>
      </div>
      <motion.p
        className="footerLinks__text"
        {...builtWhileInViewAnimation('y', 25, 0.25)}
      >
        Designed & Built by Suleiman Ali
      </motion.p>
    </div>
  );
}

export default FooterLinks;
