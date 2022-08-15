import { m, LazyMotion, domAnimation } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { builtWhileInViewAnimation, linkClickHandler } from '../data';

function Arrow(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className="arrowUp"
        onClick={(e) => linkClickHandler(e, 'app')}
        {...builtWhileInViewAnimation('y', 25, 0.25)}
      >
        <FaArrowUp />
      </m.button>
    </LazyMotion>
  );
}

export default Arrow;
