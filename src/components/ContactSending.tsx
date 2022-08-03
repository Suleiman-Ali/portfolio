import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';

interface ContactSendingProps {
  color: string;
}

function ContactSending({ color }: ContactSendingProps): JSX.Element {
  return (
    <motion.div
      className="contact__formMessage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ReactLoading
        type="cylon"
        color={color}
        width="90px"
        className="contact__formMessageIcon"
      />
      <p className="contact__formMessageMessage">Your message is being sent.</p>
    </motion.div>
  );
}

export default ContactSending;
