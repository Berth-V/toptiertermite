import './Header.css';
//import {useState} from 'react';//
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import logo from '../../assets/toptierlogo.jpg';

function Header() {
  //const [isMenuOpen, setIsMenuOpen] = useState(true);//
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
    >
      <motion.div
        className='menu__btn'
        /*Framer Motions Attributtes*/
      >
        &gt;
      </motion.div>
      <img className='logo' src={logo} />
      <ul className='nav__ul'>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink className='nav__link' to='/'>
            <span className='nav__span'>Home</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink className='nav__link' to='/services'>
            <span className='nav__span'>Services</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink className='nav__link' to='/about'>
            <span className='nav__span'>About</span>
          </NavLink>
        </motion.li>
        <motion.li
          className='nav__li'
          /*Framer Motions Attributtes*/
        >
          <NavLink className='nav__link' to='/contact'>
            <span className='nav__span'>Contact</span>
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Header;
