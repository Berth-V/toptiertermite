import logo from '../../../assets/toptierlogo2.avif';
import frontpage from '../../../assets/frontpage.avif';
import {motion} from 'framer-motion';
import {section1TextAnimation, section1LogoAnimation} from '../framerVariants';
import {FaPhone} from 'react-icons/fa6';
import {Link} from 'react-router-dom';

function HomeSection1() {
  return (
    <section
      className='home__section1'
      style={{
        background: `url(${frontpage})
        no-repeat
        top/var(--home-frontpage-size)
        `,
      }}
    >
      <motion.div
        className='home__section1__text__box'
        /* Framer Motion Attributes */
        variants={section1TextAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      >
        <h2 className='home__section1__h2'>
          When termites move in,
          <br />
          Do I move out?
        </h2>
        <p className='home__section1__p'>
          The answer is NO. With our top-tier advanced non-invasive treatment
          methods, those days are left in the past.
        </p>
        <Link className='home__section1__btn' to='/termitesinfo'>
          Learn More
        </Link>
        <h3 className='home__section1__h3'>
          <Link className='home__section1__btn2' to='tel:+18883609591'>
            <FaPhone className='home__section1__icon' />
            +1 888-360-9591
          </Link>
        </h3>
      </motion.div>
      <motion.img
        className='home__section1__logo'
        src={logo}
        alt='Top Tier Termite Control Logo'
        /* Framer Motion Attributes */
        variants={section1LogoAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      />
    </section>
  );
}

export default HomeSection1;
