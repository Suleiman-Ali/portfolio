import { FaLinkedinIn, FaTwitter, FaAt } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';

function Links(): JSX.Element {
  return (
    <div className="links">
      <a
        href="https://github.com/Suleiman-Ali"
        target="_blank"
        className="links__link"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/suleiman-ali-dev/"
        target="_blank"
        className="links__link"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://twitter.com/SuleimanAli7174"
        target="_blank"
        className="links__link"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=00905524978394"
        target="_blank"
        className="links__link"
        rel="noreferrer"
      >
        <BsTelephoneFill />
      </a>
      <a
        href="mailto:alkengjooba@gmail.com"
        target="_blank"
        className="links__link"
        rel="noreferrer"
      >
        <FaAt />
      </a>
    </div>
  );
}

export default Links;
