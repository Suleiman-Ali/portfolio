import { motion } from 'framer-motion';
import { linkClickHandler } from '../data';

function Intro(): JSX.Element {
  return (
    <div className="intro">
      <motion.h1
        className="intro__name"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Suleiman Ali
      </motion.h1>
      <motion.p
        className="intro__title"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        Front End Web Developer
      </motion.p>
      <motion.p
        className="intro__text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        I'm a self-taught passionate Front End Web Developer with 2+ years of
        proven experience providing well-implemented web solutions incorporating
        a range of technologies.
      </motion.p>
      <motion.button
        className="intro__btn"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        onClick={(e) => linkClickHandler(e, 'contact')}
      >
        Contact Me
      </motion.button>
    </div>
  );
}

export default Intro;
