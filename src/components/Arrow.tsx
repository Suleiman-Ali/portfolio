import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { builtWhileInViewAnimation, linkClickHandler } from '../data';

function Arrow(): JSX.Element {
  return (
    <motion.button
      className="arrowUp"
      onClick={(e) => linkClickHandler(e, 'app')}
      {...builtWhileInViewAnimation('y', 25, 0.25)}
    >
      <FaArrowUp />
    </motion.button>
  );
}

export default Arrow;
