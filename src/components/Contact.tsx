import ContactSuccess from './ContactSuccess';
import ContactFailure from './ContactFailure';
import ContactSending from './ContactSending';
import ContactInput from './ContactInput';
import { motion } from 'framer-motion';
import { send } from 'emailjs-com';
import { useState } from 'react';
import { MY_EMAIL } from '../data';

interface ContactProps {
  currentColor: string;
}

function Contact({ currentColor }: ContactProps): JSX.Element {
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [toSend, setToSend] = useState({
    subject: '',
    name: '',
    message: '',
    email: '',
  });

  const successChangeHandler = (state: boolean) => setSuccess(state);
  const failureChangeHandler = (state: boolean) => setFailure(state);

  const handleChange = (e: any) =>
    setToSend({ ...toSend, [e.target.name]: e.target.value });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setSending(true);
    const toSendCopy = { ...toSend };
    setToSend({ subject: '', name: '', message: '', email: '' });

    send(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string,
      toSendCopy,
      process.env.REACT_APP_API_KEY as string
    )
      .then((_) => {
        setSending(false);
        setSuccess(true);
      })
      .catch((_) => {
        setSending(false);
        setFailure(true);
      });
  };

  const animate = (delay: number, x_y: string, pos: number) => {
    return {
      initial: { opacity: 0, [x_y]: pos },
      whileInView: { opacity: 1, [x_y]: 0 },
      transition: { delay },
      viewport: { once: true },
    };
  };

  return (
    <div className="contact" id="contact">
      <motion.h2 className="contact__heading" {...animate(0.25, 'x', -25)}>
        {'<Contact />'}
      </motion.h2>
      <div className="contact__box">
        <motion.p className="contact__text" {...animate(0.35, 'x', -25)}>
          I’m interested in regular work opportunities as well as freelance
          opportunities. However, if you have other request or question, don’t
          hesitate to leave a message. If you don't want to use the form, you
          can reach out to me at <u>{MY_EMAIL}</u>
        </motion.p>

        {success && <ContactSuccess onClick={successChangeHandler} />}
        {failure && <ContactFailure onClick={failureChangeHandler} />}
        {sending && <ContactSending color={currentColor} />}

        {!success && !failure && !sending && (
          <form className="contact__form" onSubmit={onSubmit}>
            <div className="contact__formMain">
              <div className="contact__formBox">
                <ContactInput
                  x_y="x"
                  initialPostilion={-25}
                  delay={0.45}
                  type="text"
                  name="Name"
                  value={toSend.name}
                  onChange={handleChange}
                />
                <ContactInput
                  x_y="x"
                  initialPostilion={25}
                  delay={0.45}
                  type="email"
                  name="Email"
                  value={toSend.email}
                  onChange={handleChange}
                />
              </div>
              <ContactInput
                x_y="y"
                initialPostilion={25}
                delay={0.55}
                type="text"
                name="Subject"
                value={toSend.subject}
                onChange={handleChange}
              />
              <ContactInput
                isTextArea={true}
                x_y="y"
                initialPostilion={25}
                type="text"
                delay={0.65}
                name="Message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>
            <motion.button
              {...animate(0.75, 'y', 25)}
              className="contact__btn"
              type="submit"
            >
              Send Message!
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;