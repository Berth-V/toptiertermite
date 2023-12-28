import './Header.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  //Framer Motion Variants//
  const openNavAnimation = {
    open: {
      left: '0',
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.5,
      },
    },
    close: {left: '-100vw'},
  };

  return (
    <motion.nav
      className='nav'
      /*Framer Motions Attributtes*/
      variants={openNavAnimation}
      animate={isMenuOpen ? 'open' : 'close'}
    >
      <motion.div
        className='menu__btn'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        /*Framer Motions Attributtes*/
      >
        &gt;
      </motion.div>
      <ul className='nav__ul'>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink
            className='nav__link'
            to='/'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='nav__span'>Home</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink
            className='nav__link'
            to='/about'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='nav__span'>Services</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink
            className='nav__link'
            to='/projects'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='nav__span'>About</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink
            className='nav__link'
            to='/contact'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='nav__span'>Contact</span>
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Header;
