import { motion } from 'framer-motion';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter, FaAt } from 'react-icons/fa';

function FooterLinks(): JSX.Element {
  return (
    <div className="footerLinks">
      <div className="footerLinks__links">
        <motion.a
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          href="https://github.com/Suleiman-Ali"
          target="_blank"
          className="footerLinks__link"
          rel="noreferrer"
        >
          <BsGithub />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          href="https://www.linkedin.com/in/suleiman-ali-dev/"
          target="_blank"
          className="footerLinks__link"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          viewport={{ once: true }}
          href="https://twitter.com/SuleimanAli7174"
          target="_blank"
          className="footerLinks__link"
          rel="noreferrer"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          viewport={{ once: true }}
          href="https://api.whatsapp.com/send?phone=00905524978394"
          target="_blank"
          className="footerLinks__link"
          rel="noreferrer"
        >
          <BsTelephoneFill />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          viewport={{ once: true }}
          href="mailto:suleimanali.business@gmail.com"
          target="_blank"
          className="footerLinks__link"
          rel="noreferrer"
        >
          <FaAt />
        </motion.a>
      </div>
      <motion.p
        className="footerLinks__text"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        Designed & Built by Suleiman Ali
      </motion.p>
    </div>
  );
}

export default FooterLinks;
