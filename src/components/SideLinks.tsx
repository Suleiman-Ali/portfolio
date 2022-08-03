import SideLink from './SideLink';
import { FaLinkedinIn, FaTwitter, FaAt } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import {
  MY_EMAIL,
  MY_GITHUB,
  MY_LINKEDIN,
  MY_NUMBER,
  MY_TWITTER,
} from '../data/index';

function SideLinks(): JSX.Element {
  return (
    <div className="links">
      <SideLink delay={0.25} href={`https://github.com/${MY_GITHUB}`}>
        <BsGithub />
      </SideLink>
      <SideLink
        delay={0.35}
        href={`https://www.linkedin.com/in/${MY_LINKEDIN}`}
      >
        <FaLinkedinIn />
      </SideLink>
      <SideLink delay={0.45} href={`https://twitter.com/${MY_TWITTER}`}>
        <FaTwitter />
      </SideLink>
      <SideLink
        delay={0.55}
        href={`https://api.whatsapp.com/send?phone=${MY_NUMBER}`}
      >
        <BsTelephoneFill />
      </SideLink>
      <SideLink delay={0.65} href={`mailto:${MY_EMAIL}`}>
        <FaAt />
      </SideLink>
    </div>
  );
}

export default SideLinks;
