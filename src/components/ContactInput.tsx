import { motion } from 'framer-motion';
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
      <div className="contact__inputBox">
        <motion.textarea
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
    );

  return (
    <div className="contact__inputBox">
      <motion.input
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
  );
}

export default ContactInput;
