import { FaLinkedinIn, FaTwitter, FaAt } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

function SideLinks(): JSX.Element {
  return (
    <div className="links">
      <motion.a
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
        href="https://github.com/Suleiman-Ali"
        target="_blank"
        className="links__link"
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
        className="links__link"
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
        className="links__link"
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
        className="links__link"
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
        className="links__link"
        rel="noreferrer"
      >
        <FaAt />
      </motion.a>
    </div>
  );
}

export default SideLinks;
