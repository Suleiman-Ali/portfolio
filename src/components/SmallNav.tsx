import { motion } from 'framer-motion';
import { FaHamburger, FaXing } from 'react-icons/fa';
import { linkClickHandler, MY_RESUME_LINK } from '../data';
import SmallNavBtn from './SmallNavBtn';

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
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120.8 135"
            fill="#fd2155"
            className="logo"
          >
            <path d="M39.5,9l-8.8,9.1L35,22.5,39.4,27l4.8-4.7L49,17.6,58.5,27c5.2,5.2,9.5,9.9,9.5,10.5S59.2,47.3,48.5,58L29,77.5l4.9,4.9,5,4.9L58.1,67.7C68.6,56.9,77.8,48,78.5,48s8.7,7.2,17.8,16.1l16.6,16,3.8-4.2a51.6,51.6,0,0,0,4.1-4.9c.2-.6-71.1-71-72-71C48.6,0,44.4,4.1,39.5,9Z" />
            <path d="M24.1,52.7,0,77.4,20.2,97.2l20.3,19.7L60,96.9c10.7-11,20-20,20.5-19.9s2.9,1.8,5,4l3.9,4L79,95.8c-5.8,5.9-14.8,15.1-20,20.4L49.6,126l4.4,4.5c2.4,2.5,4.7,4.5,5.2,4.5,1.2,0,48.3-48.1,48.3-49.3,0-.7-6.3-7.4-14.1-15L79.3,56.9,59.7,77.1,40.2,97.3,30.1,88C24.5,82.9,20,78.3,20,77.8s8.9-9.9,19.7-20.9l19.7-20L55,32.5C52.6,30,50,28,49.4,28S37.3,39.1,24.1,52.7Z" />
          </svg>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
        >
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
