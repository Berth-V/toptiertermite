import '../Contact/Contact.css';
import {forwardRef} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';

const Contact = forwardRef(() => {
  return (
    <div className='contact'>
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
          <span className='contact__span'>Phone: +1 619 555 68 54</span>
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
    </div>
  );
});

export default Contact;
