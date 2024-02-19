import '../Contact/Contact.css';
import {forwardRef} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {motion} from 'framer-motion';

const Contact = forwardRef(() => {
  return (
    <motion.div className='contact' initial={{scale: 0}} animate={{scale: 1}}>
      <form className='form'>
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
            <div className='icon__item'>
              <IoLogoWhatsapp className='contact__icon' />
            </div>
            <div className='icon__item'>
              <RiInstagramFill className='contact__icon' />
            </div>
            <div className='icon__item'>
              <MdEmail className='contact__icon' />
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
});

export default Contact;
