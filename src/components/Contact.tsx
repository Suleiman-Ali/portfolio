import ContactSuccess from './ContactSuccess';
import ContactFailure from './ContactFailure';
import ContactSending from './ContactSending';
import ContactInput from './ContactInput';
import { m, domAnimation, LazyMotion } from 'framer-motion';
import { send } from '@emailjs/browser';
import { useState } from 'react';
import { builtWhileInViewAnimation, MY_EMAIL } from '../data';

function Contact(): JSX.Element {
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
    toSendCopy.message = toSendCopy.message.replaceAll('\n', '<br/>');
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

  return (
    <LazyMotion features={domAnimation}>
      <div className="contact" id="contact">
        <m.h2
          className="contact__heading"
          {...builtWhileInViewAnimation('x', -25, 0.25)}
        >
          {'<Contact />'}
        </m.h2>
        <div className="contact__box">
          <div className="contact__textBox">
            <m.p
              className="contact__text"
              {...builtWhileInViewAnimation('x', -25, 0.35)}
            >
              I’m interested in regular work opportunities as well as freelance
              opportunities.
            </m.p>
            <m.p
              className="contact__text"
              {...builtWhileInViewAnimation('x', -25, 0.45)}
            >
              If you have any requests or questions, don't hesitate to leave a
              message.
            </m.p>
            <m.p
              className="contact__text"
              {...builtWhileInViewAnimation('x', -25, 0.55)}
            >
              If you don't want to use the form, you can reach out to me at{' '}
              <u>{MY_EMAIL}</u>
            </m.p>
          </div>

          {success && <ContactSuccess onClick={successChangeHandler} />}
          {failure && <ContactFailure onClick={failureChangeHandler} />}
          {sending && <ContactSending />}

          {!success && !failure && !sending && (
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__formMain">
                <div className="contact__formBox">
                  <ContactInput
                    x_y="x"
                    initialPostilion={-25}
                    delay={0.65}
                    type="text"
                    name="Name"
                    value={toSend.name}
                    onChange={handleChange}
                  />
                  <ContactInput
                    x_y="x"
                    initialPostilion={25}
                    delay={0.65}
                    type="email"
                    name="Email"
                    value={toSend.email}
                    onChange={handleChange}
                  />
                </div>
                <ContactInput
                  x_y="y"
                  initialPostilion={25}
                  delay={0.75}
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
                  delay={0.95}
                  name="Message"
                  value={toSend.message}
                  onChange={handleChange}
                />
              </div>
              <m.button
                {...builtWhileInViewAnimation('y', 25, 1.05)}
                className="contact__btn"
                type="submit"
              >
                Send Message!
              </m.button>
            </form>
          )}
        </div>
      </div>
    </LazyMotion>
  );
}

export default Contact;
