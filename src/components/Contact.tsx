import { motion } from 'framer-motion';
import { send } from 'emailjs-com';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsX, BsXCircleFill } from 'react-icons/bs';
import ReactLoading from 'react-loading';

function Contact({ currentColor }: { currentColor: string }): JSX.Element {
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [toSend, setToSend] = useState({
    subject: '',
    name: '',
    message: '',
    email: '',
  });

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
      .then((response) => {
        setSending(false);
        setSuccess(true);
      })
      .catch((err) => {
        setSending(false);
        setFailure(true);
      });
  };

  return (
    <div className="contact" id="contact">
      <motion.h2
        className="contact__heading"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        {'<Contact />'}
      </motion.h2>
      <div className="contact__box">
        <motion.p
          className="contact__text"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
        >
          I’m interested in regular work opportunities as well as freelance
          opportunities. However, if you have other request or question, don’t
          hesitate to leave a message. If you don't want to use the form, you
          can reach out to me at <u>suleimanali.business@gmail.com</u>
        </motion.p>

        {success && (
          <motion.div
            className="contact__formMessage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsX
              className="contact__formMessageClose"
              onClick={() => setSuccess(false)}
            />
            <FaCheckCircle className="contact__formMessageIcon" />
            <p className="contact__formMessageMessage">
              Your message was sent successfully. Suleiman will be reaching out
              to you soon.
            </p>
          </motion.div>
        )}

        {failure && (
          <motion.div
            className="contact__formMessage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsX
              className="contact__formMessageClose"
              onClick={() => setFailure(false)}
            />
            <BsXCircleFill className="contact__formMessageIcon" />
            <p className="contact__formMessageMessage">
              Your message was not sent due to unexpected error. Please send
              your message manually to <u>suleimanali.business@gmail.com</u> or
              try again later.
            </p>
          </motion.div>
        )}

        {sending && (
          <motion.div
            className="contact__formMessage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ReactLoading
              type="cylon"
              color={currentColor}
              width="90px"
              className="contact__formMessageIcon"
            />
            <p className="contact__formMessageMessage">
              Your message is being sent.
            </p>
          </motion.div>
        )}

        {!success && !failure && !sending && (
          <form className="contact__form" onSubmit={onSubmit}>
            <div className="contact__formMain">
              <div className="contact__formBox">
                <div className="contact__inputBox">
                  <motion.input
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                    viewport={{ once: true }}
                    className="contact__input"
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={toSend.name}
                    onChange={handleChange}
                  />
                  <div className="contact__inputAfter" />
                </div>
                <div className="contact__inputBox">
                  <motion.input
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                    viewport={{ once: true }}
                    className="contact__input"
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={toSend.email}
                    onChange={handleChange}
                  />
                  <div className="contact__inputAfter" />
                </div>
              </div>
              <div className="contact__inputBox">
                <motion.input
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  viewport={{ once: true }}
                  className="contact__input"
                  type="text"
                  placeholder="Subject"
                  required
                  name="subject"
                  value={toSend.subject}
                  onChange={handleChange}
                />
                <div className="contact__inputAfter" />
              </div>
              <div className="contact__inputBox">
                <motion.textarea
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  viewport={{ once: true }}
                  cols={30}
                  rows={10}
                  className="contact__textarea"
                  placeholder="Message"
                  required
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                />
                <div className="contact__inputAfter" />
              </div>
            </div>
            <motion.button
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              viewport={{ once: true }}
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
