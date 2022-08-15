import { m, domAnimation, LazyMotion } from 'framer-motion';
import { builtWhileInViewAnimation } from '../data';

interface ContactInputProps {
  isTextArea?: boolean;
  x_y: string;
  initialPostilion: number;
  delay: number;
  type: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
}

function ContactInput({
  initialPostilion,
  x_y,
  delay,
  name,
  type,
  onChange,
  value,
  isTextArea,
}: ContactInputProps): JSX.Element {
  if (isTextArea)
    return (
      <LazyMotion features={domAnimation}>
        <div className="contact__inputBox">
          <m.textarea
            {...builtWhileInViewAnimation(x_y, initialPostilion, delay)}
            cols={30}
            rows={10}
            className="contact__textarea"
            required
            placeholder={name}
            name={name.toLowerCase()}
            value={value}
            onChange={onChange}
          />
          <div className="contact__inputAfter" />
        </div>
      </LazyMotion>
    );

  return (
    <LazyMotion features={domAnimation}>
      <div className="contact__inputBox">
        <m.input
          {...builtWhileInViewAnimation(x_y, initialPostilion, delay)}
          className="contact__input"
          type={type}
          required
          placeholder={name}
          name={name.toLowerCase()}
          value={value}
          onChange={onChange}
        />
        <div className="contact__inputAfter" />
      </div>
    </LazyMotion>
  );
}

export default ContactInput;
