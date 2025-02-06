import Links from './Links';
import '../Contact/Contact.css';
import useForm from '../../customHooks/useForm';
import {useEffect} from 'react';
import {motion} from 'framer-motion';

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
        {/* Links Section */}
        <Links />
      </form>
    </motion.div>
  );
}

export default Contact;
