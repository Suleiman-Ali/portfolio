import { motion } from 'framer-motion';

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
          initial={{ opacity: 0, [x_y]: initialPostilion }}
          whileInView={{ opacity: 1, [x_y]: 0 }}
          transition={{ delay }}
          viewport={{ once: true }}
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
        initial={{ opacity: 0, [x_y]: initialPostilion }}
        whileInView={{ opacity: 1, [x_y]: 0 }}
        transition={{ delay }}
        viewport={{ once: true }}
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
