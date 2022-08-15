import AboutText from './AboutText';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { builtWhileInViewAnimation, linkClickHandler } from '../data';

function About(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <div className="about" id="about">
        <m.h2
          className="about__heading"
          {...builtWhileInViewAnimation('x', -25, 0.25)}
        >
          {'<About />'}
        </m.h2>
        <div className="about__box">
          <div className="about__innerBox">
            <AboutText delay={0.35}>
              Hello, my name is Suleiman and I enjoy creating things that live
              on the internet.
            </AboutText>
            <AboutText delay={0.45}>
              I'm a self-taught, well-organized person, and problem solver with
              high attention to detail.
            </AboutText>
            <AboutText delay={0.55}>
              Interested in the entire Software Development field and working on
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
          <m.button
            {...builtWhileInViewAnimation('y', 25, 0.95)}
            className="about__btn"
            onClick={(e) => linkClickHandler(e, 'contact')}
          >
            Let's Create Something!
          </m.button>
        </div>
      </div>
    </LazyMotion>
  );
}

export default About;
