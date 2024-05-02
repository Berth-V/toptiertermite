import '../Contact/Contact.css';
import {forwardRef, useEffect} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import useForm from '../../customHooks/useForm';

const Contact = forwardRef(() => {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  // Form Variants //
  const initialData = {
    name: '',
    number: '',
    email: '',
    message: '',
  };
  const onValidate = (form) => {
    const error = [];
    const regexName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    const regexNumber = /^\d{7,14}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexMessage = /^.{1,150}$/;

    if (!regexName.test(form.name)) {
      error[0] = true;
      error[1] = 'Name must content 3-40 characters';
      return error;
    }
    if (!regexNumber.test(form.number)) {
      error[0] = true;
      error[1] = 'Number must content 7 to 14 digit';
      return error;
    }
    if (!regexEmail.test(form.email)) {
      error[0] = true;
      error[1] = 'Invalid E-mail';
      return error;
    }
    if (!regexMessage.test(form.message)) {
      error[0] = true;
      error[1] = 'Message must content 1-150 characters';
      return error;
    }
    error[0] = false;
    return error;
  };
  const {form, error, handleChange, handleSubmit} = useForm(
    initialData,
    onValidate,
  );
  return (
    <motion.div
      className='contact'
      // Framer Motion Attributtes
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
