import AboutText from './AboutText';
import { motion } from 'framer-motion';
import { linkClickHandler } from '../data';

function About(): JSX.Element {
  return (
    <div className="about" id="about">
      <motion.h2
        className="about__heading"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        {'<About />'}
      </motion.h2>
      <div className="about__box">
        <div className="about__innerBox">
          <AboutText delay={0.35}>
            Hello, my name is Suleiman and I enjoy creating things that live on
            the internet.
          </AboutText>
          <AboutText delay={0.45}>
            I'm a self-taught, well-organized person, and problem solver with
            high attention to detail.
          </AboutText>
          <AboutText delay={0.55}>
            Interested in the entire Web Development field and working on
            ambitious projects.
          </AboutText>
          <AboutText delay={0.65}>
            I spend my free time reading, learning, and applying what I learn.
          </AboutText>
          <AboutText delay={0.75}>
            I've recently got my Higher National Diploma (HND) in Software
            Engineering, from which I graduated with distinction.
          </AboutText>
          <AboutText delay={0.85}>
            I'm always looking forward to new opportunities where I can extend
            and/or apply my knowledge.
          </AboutText>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          viewport={{ once: true }}
          className="about__btn"
          onClick={(e) => linkClickHandler(e, 'contact')}
        >
          Let's Create Something!
        </motion.button>
      </div>
    </div>
  );
}

export default About;
