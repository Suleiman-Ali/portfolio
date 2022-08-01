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

      <motion.svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 700 700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="intro__arrow"
      >
        <g>
          <path
            d="M192.1,475.6c-25.9-65.8-19.6-153.7,51.5-188.7c33-16.4,76.4-12.5,103.9,13c21.3,19.8,22.4,54-8.4,63.8h0
		c-21.9,6.1-45.5,1.1-63.1-13.3c-66.7-53.6-8.1-141.6,49.9-171.2c67.2-34.4,148.2-31.2,214.6,2.8c9.6,4.9,18.1-9.6,8.5-14.5
		c-72-36.9-159-40.2-231.6-2.8c-59.2,30.4-108.1,98.5-77.6,166.1c6.5,14.4,16.8,26.8,29.7,35.9c12.9,9.1,28,14.6,43.8,15.9
		c25.5,2.1,58.1-7.8,67.2-34.6c10.6-30.6-16.5-60.6-41.3-74.4c-28-15.1-61.2-17.6-91.2-6.8c-87.2,31.7-102.4,136.4-72,213.3
		C179.8,490,196.1,485.7,192.1,475.6L192.1,475.6z"
          />
          <path
            d="M489,117.2c22,19.4,42.9,40.2,62.6,62l1.7-13.2c-30.8,15.9-60.1,34.5-87.7,55.5c-8.5,6.5,0,21.1,8.5,14.5
		c27.5-21,56.8-39.6,87.6-55.5c2.2-1.3,3.7-3.6,4.1-6.2c0.3-2.6-0.5-5.2-2.3-7c-19.6-21.9-40.4-42.6-62.3-62
		c-8.1-7.1-20,4.8-11.9,11.9L489,117.2z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Intro;
