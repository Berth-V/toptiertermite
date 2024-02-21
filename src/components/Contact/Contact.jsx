import '../Contact/Contact.css';
import {forwardRef, useEffect} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';

const Contact = forwardRef(() => {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <motion.div
      className='contact'
      // Framer Motion Attributtes
      initial={{scale: 0}}
      animate={{scale: 1}}
    >
      <form
        className='form'
        action='https://formsubmit.co/office@toptiertermite.com'
        method='POST'
      >
        <h2 className='contact__h2'>Contact</h2>
        <input
          className='form__input'
          name='name'
          type='text'
          placeholder='Name'
          required=''
          autoComplete='off'
        />
        <input
          className='form__input'
          name='email'
          type='email'
          placeholder='E-Mail'
          required=''
          autoComplete='off'
        />
        <textarea
          className='form__input--message'
          name='message'
          placeholder='Message'
          required=''
        />
        <input className='form__submit' type='submit' value='Send Message' />
        <div className='contact__info'>
          <span className='contact__span'>Phone: +1 888-360-9591</span>
          <div className='contact__icon__box'>
            <NavLink
              className='icon__item'
              to='https://wa.me/18584629226'
              target='blank'
            >
              <IoLogoWhatsapp className='contact__icon' />
            </NavLink>
            <NavLink
              className='icon__item'
              to='https://www.instagram.com/toptiertermite/'
              target='blank'
            >
              <RiInstagramFill className='contact__icon' />
            </NavLink>
            <NavLink
              className='icon__item'
              to='mailto:office@toptiertermite.com'
              target='blank'
            >
              <MdEmail className='contact__icon' />
            </NavLink>
          </div>
        </div>
      </form>
    </motion.div>
  );
});

export default Contact;
