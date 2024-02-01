import './Header.css';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FaBars} from 'react-icons/fa';
import {useState} from 'react';
import logo from '../../assets/toptierlogo2.jpg';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    <nav className='nav'>
      <img className='logo' src={logo} />
      <div className='menu__btn'>
        <FaBars
          className='toggle__btn'
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>

      {/* ul for Desktop Mode */}
      <ul className='nav__ul'>
        <motion.li className='nav__li'>
          <NavLink className='nav__link' to='/'>
            <span className='nav__span'>Home</span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'>
          <NavLink className='nav__link' to='/services'>
            <span className='nav__span'>Services</span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'>
          <NavLink className='nav__link' to='/about'>
            <span className='nav__span'>About</span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'>
          <NavLink className='nav__link' to='/contact'>
            <span className='nav__span'>Contact</span>
          </NavLink>
        </motion.li>
      </ul>

      {/* ul for Mobile Mode */}
      <motion.ul
        className='nav__ul__mobile'
        /*Framer Motions Attributtes*/
        variants={openNavAnimation}
        animate={isNavOpen ? 'open' : 'close'}
      >
        <li className='nav__li'>
          <NavLink
            className='nav__link'
            to='/'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className='nav__span'>Home</span>
          </NavLink>
        </li>
        <li className='nav__li'>
          <NavLink
            className='nav__link'
            to='/services'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className='nav__span'>Services</span>
          </NavLink>
        </li>
        <li className='nav__li'>
          <NavLink
            className='nav__link'
            to='/about'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className='nav__span'>About</span>
          </NavLink>
        </li>
        <li className='nav__li'>
          <NavLink
            className='nav__link'
            to='/contact'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className='nav__span'>Contact</span>
          </NavLink>
        </li>
      </motion.ul>
    </nav>
  );
}

export default Header;
