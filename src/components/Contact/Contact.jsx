import '../Contact/Contact.css';
import {forwardRef} from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div className='contact'>
      <h1 className='contact__h1'>Contact</h1>
      <div className='contact__box' ref={ref} />
    </div>
  );
});

export default Contact;
