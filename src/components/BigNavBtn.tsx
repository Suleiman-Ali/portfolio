import { motion } from 'framer-motion';
import { linkClickHandler } from '../data';

interface BigNavBtnProps {
  text: string;
  delay: number;
  setter: () => void;
}

function BigNavBtn({ delay, setter, text }: BigNavBtnProps): JSX.Element {
  return (
    <motion.button
      className="nav__btn"
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      onClick={(e) => linkClickHandler(e, text.toLowerCase(), setter)}
    >
      {text}();
    </motion.button>
  );
}

export default BigNavBtn;
