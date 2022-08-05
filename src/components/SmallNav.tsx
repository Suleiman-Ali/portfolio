import SmallNavBtn from './SmallNavBtn';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { motion } from 'framer-motion';
import { FaHamburger, FaXing } from 'react-icons/fa';
import {
  builtWhileInViewAnimation,
  linkClickHandler,
  MY_RESUME_LINK,
} from '../data';

interface SmallNavProps {
  closeMenu: () => void;
  openMenu: () => void;
  menu: boolean;
}

function SmallNav({ closeMenu, openMenu, menu }: SmallNavProps): JSX.Element {
  return (
    <nav className="navSmall">
      <div className="navSmall__box">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          onClick={(e) => linkClickHandler(e, 'app', closeMenu)}
        >
          <Logo className="logo" />
        </motion.button>
        <motion.button {...builtWhileInViewAnimation('y', -25, 0.25)}>
          <FaHamburger className="navSmall__iconOpen" onClick={openMenu} />
        </motion.button>
      </div>

      <motion.div
        className="navSmall__menu"
        animate={{ left: menu ? 0 : -2000 }}
        transition={{ duration: 0.5 }}
      >
        <SmallNavBtn text="Skills" setter={closeMenu} />
        <SmallNavBtn text="Projects" setter={closeMenu} />
        <SmallNavBtn text="About" setter={closeMenu} />
        <SmallNavBtn text="Contact" setter={closeMenu} />
        <a
          className="navSmall__btn navSmall__btnResume"
          href={MY_RESUME_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <FaXing className="navSmall__iconClose" onClick={closeMenu} />
      </motion.div>
    </nav>
  );
}

export default SmallNav;
