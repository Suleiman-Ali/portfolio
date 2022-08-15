import { motion } from 'framer-motion';
import { ReactComponent as Loading } from '../images/Loading.svg';

function ContactSending(): JSX.Element {
  return (
    <motion.div
      className="contact__formMessage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Loading className="contact__formMessageIcon" />
      <p className="contact__formMessageMessage">Your message is being sent.</p>
    </motion.div>
  );
}

export default ContactSending;
