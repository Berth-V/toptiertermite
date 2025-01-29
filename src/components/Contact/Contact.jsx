import '../Contact/Contact.css';
import {useEffect} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import useForm from '../../customHooks/useForm';

function Contact() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  // Form Variants //
  const {form, error, handleChange, handleSubmit} = useForm();

  return (
    <motion.div
      className='contact'
      // Framer Motion Attributes //
      initial={{scale: 0}}
      animate={{scale: 1}}
    >
      <form
        className='form'
        onSubmit={handleSubmit}
        action='https://formsubmit.co/office@toptiertermite.com'
        method='POST'
      >
        <h2 className='contact__h2'>Contact</h2>
        <input
          className='form__input'
          onChange={handleChange}
          value={form.name}
          name='name'
          type='text'
          placeholder='Name'
          required=''
          autoComplete='off'
        />
        <input
          className='form__input'
          onChange={handleChange}
          name='number'
          type='text'
          value={form.number}
          placeholder='Phone Number'
          required=''
          autoComplete='off'
        ></input>
        <input
          className='form__input'
          onChange={handleChange}
          value={form.email}
          name='email'
          type='email'
          placeholder='E-Mail'
          required=''
          autoComplete='off'
        />
        <textarea
          className='form__input--message'
          onChange={handleChange}
          value={form.message}
          name='message'
          placeholder='Message'
          required=''
        />
        <input className='form__submit' type='submit' value='Send Message' />
        {/* Error Return */}
        {error[0] ? (
          <div
            className='result'
            style={error[0] ? {color: '#ff0000'} : {color: '#149600'}}
          >
            {error[1]}
          </div>
        ) : null}
        {/* Contact Section */}
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
}

export default Contact;
