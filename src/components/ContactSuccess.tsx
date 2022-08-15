import { m, domAnimation, LazyMotion } from 'framer-motion';
import { BsX } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';

interface ContactSuccessProps {
  onClick: (state: boolean) => void;
}

function ContactSuccess({ onClick }: ContactSuccessProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="contact__formMessage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BsX
          className="contact__formMessageClose"
          onClick={() => onClick(false)}
        />
        <FaCheckCircle className="contact__formMessageIcon" />
        <p className="contact__formMessageMessage">
          Your message was sent successfully. Suleiman will be reaching out to
          you soon.
        </p>
      </m.div>
    </LazyMotion>
  );
}

export default ContactSuccess;
