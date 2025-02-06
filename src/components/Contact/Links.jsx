import {IoLogoWhatsapp} from 'react-icons/io';
import {RiInstagramFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {NavLink} from 'react-router-dom';

export default function Links() {
  return (
    <div className='contact__info'>
      <span className='contact__span'>Phone: +1 888-360-9591</span>
      <div className='contact__icon__box'>
        <NavLink
          className='contact__item'
          to='https://wa.me/18584629226'
          target='blank'
        >
          <IoLogoWhatsapp className='contact__icon' />
        </NavLink>
        <NavLink
          className='contact__item'
          to='https://www.instagram.com/toptiertermite/'
          target='blank'
        >
          <RiInstagramFill className='contact__icon' />
        </NavLink>
        <NavLink
          className='contact__item'
          to='mailto:office@toptiertermite.com'
          target='blank'
        >
          <MdEmail className='contact__icon' />
        </NavLink>
      </div>
    </div>
  );
}
