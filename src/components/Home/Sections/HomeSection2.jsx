import eco from '../../../assets/ecofriendly.avif';
import fumigation from '../../../assets/fumigation.avif';
import subterranean from '../../../assets/subterranean.avif';
import escrow from '../../../assets/escrow.avif';
import structural from '../../../assets/structural.avif';
import preventative from '../../../assets/preventative.avif';
import {section2Animation} from '../framerVariants';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function HomeSection2() {
  return (
    <section className='home__section2'>
      <motion.div
        className='home__section2__box'
        /* Framer Motion Attributes */
        initial='start'
        whileInView='end'
        transition={{delayChildren: 0.4, duration: 0.3, staggerChildren: 0.2}}
        viewport={{once: true, amount: 0.2}}
      >
        <motion.div
          className='home__section2__card blue--card'
          /* Framer Motion Attributes */
          variants={section2Animation}
        >
          <img
            className='home__section2__logo'
            src={eco}
            alt='eco friendly logo'
          />
          <div className='home__section2__text blue--card--text'>
            <h3 className='home__section2__h3 blue--card--h3'>Eco-Friendly</h3>
            <p className='home__section2__p blue--card--p'>
              Our Eco-friendly termite treatments are designed to be safe for
              your family, pets, and the environment, while still being highly
              effective against termites. We offer a wide variety of green
              alternatives for your specific needs.
            </p>
            <br />
            <Link
              className='home__section2__btn blue--card--btn'
              to='/services#eco'
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='home__section2__card'
          /* Framer Motion Attributes */
          variants={section2Animation}
        >
          <img
            className='home__section2__logo'
            src={fumigation}
            alt='fumigation logo'
          />
          <div className='home__section2__text'>
            <h3 className='home__section2__h3'>Fumigation</h3>
            <p className='home__section2__p'>
              Our Whole-Structure Fumigation is meant to eradicate Drywood
              termites at every stage of their life cycles. Our fumigation
              services are designed to provide you 100% peace of mind by taking
              no chances against these unwelcomed visitors.
            </p>
            <br />
            <Link className='home__section2__btn' to='/services#fum'>
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='home__section2__card'
          /* Framer Motion Attributes */
          variants={section2Animation}
        >
          <img
            className='home__section2__logo'
            src={subterranean}
            alt='subterranean services logo'
          />
          <div className='home__section2__text'>
            <h3 className='home__section2__h3'>Subterranean Termites</h3>
            <p className='home__section2__p'>
              Professionals at Top-Tier Termite are equipped with the latest
              tools and techniques to provide you with the most effective
              subterranean termite treatment available. Our subterranean termite
              treatments are designed to be effective, affordable, and
              long-lasting.
            </p>
            <br />
            <Link className='home__section2__btn' to='/services#sub'>
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='home__section2__card'
          /* Framer Motion Attributes */
          variants={section2Animation}
        >
          <img
            className='home__section2__logo'
            src={escrow}
            alt='escrow services logo'
          />
          <div className='home__section2__text'>
            <h3 className='home__section2__h3'>Escrow Services</h3>
            <p className='home__section2__p'>
              At Top-Tier Termite Control we understand that termite inspections
              can be a major concern for your home or business, especially when
              it comes to escrow. That&apos;s why we offer express termite
              escrow inspections that are designed to be fast, efficient, and
              reliable.
            </p>
            <br />
            <Link className='home__section2__btn' to='/services#esc'>
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='home__section2__card blue--card'
          /* Framer Motion Attributes */
          variants={section2Animation}
        >
          <img
            className='home__section2__logo'
            src={structural}
            alt='structural repairs logo'
          />
          <div className='home__section2__text blue--card--text'>
            <h3 className='home__section2__h3 blue--card--h3'>
              Structural Repairs
            </h3>
            <p className='home__section2__p blue--card--p'>
              Are you worried about the structural integrity of your property?
              Do you suspect that termites, fungus, or water damage have
              compromised the safety of your home or business? If so, our team
              of experts is here to help!
            </p>
            <br />
            <Link
              className='home__section2__btn blue--card--btn'
              to='/services#struc'
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='home__section2__card blue--card'
          /* Framer Motion Attributes */
          variants={section2Animation}
        >
          <img
            className='home__section2__logo'
            src={preventative}
            alt='top tier termite control preventative treatment logo'
          />
          <div className='home__section2__text blue--card--text'>
            <h3 className='home__section2__h3 blue--card--h3'>
              Preventative Treatment
            </h3>
            <p className='home__section2__p blue--card--p'>
              Without effective proactive control measures, infestations can
              escalate rapidly, leading to significant repair costs and
              potential safety hazards. That&apos;s why it&apos;s important to
              take preventative measures.
            </p>
            <br />
            <Link
              className='home__section2__btn blue--card--btn'
              to='/services#prev'
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeSection2;
