import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { linkClickHandler } from '../data';

function Arrow(): JSX.Element {
  return (
    <motion.button
      className="arrowUp"
      onClick={(e) => linkClickHandler(e, 'app')}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      viewport={{ once: true }}
    >
      <FaArrowUp />
    </motion.button>
  );
}

export default Arrow;
