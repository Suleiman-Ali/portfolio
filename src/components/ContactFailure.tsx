import { motion } from 'framer-motion';
import { BsX, BsXCircleFill } from 'react-icons/bs';
import { MY_EMAIL } from '../data';

interface ContactFailureProps {
  onClick: (state: boolean) => void;
}

function ContactFailure({ onClick }: ContactFailureProps): JSX.Element {
  return (
    <motion.div
      className="contact__formMessage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BsX
        className="contact__formMessageClose"
        onClick={() => onClick(false)}
      />
      <BsXCircleFill className="contact__formMessageIcon" />
      <p className="contact__formMessageMessage">
        Your message was not sent due to unexpected error. Please send your
        message manually to <u>{MY_EMAIL}</u> or try again later.
      </p>
    </motion.div>
  );
}

export default ContactFailure;
