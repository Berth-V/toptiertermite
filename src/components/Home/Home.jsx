import './Home.css';
import {FaCheck} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa6';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import logo from '../../assets/toptierlogo2.avif';
import frontpage from '../../assets/frontpage.avif';
import section3back from '../../assets/home3back.avif';
import home3boxback from '../../assets/home3boxback.avif';
import pesticide from '../../assets/pesticide.png';
import solution from '../../assets/solution.png';
import termite from '../../assets/termite.png';
import eco from '../../assets/ecofriendly.avif';
import fumigation from '../../assets/fumigation.avif';
import subterranean from '../../assets/subterranean.avif';
import escrow from '../../assets/escrow.avif';
import structural from '../../assets/structural.avif';
import preventative from '../../assets/preventative.avif';

function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  //Framer Motion Variants//
  const section1TextAnimation = {
    start: {x: 100, y: -100, opacity: 0},
    end: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {delay: 0.4, duration: 0.5},
    },
  };
  const section1LogoAnimation = {
    start: {x: -100, y: 100, opacity: 0},
    end: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {delay: 0.5, duration: 0.5},
    },
  };
  const section2Animation = {
    start: {scale: 0},
    end: {scale: 1},
  };
  const section3ImgAnimation = {
    start: {y: -100, opacity: 0},
    end: {y: 0, opacity: 1, transition: {delay: 0.2, duration: 0.4}},
  };
  const section3TextAnimation = {
    start: {y: 100, opacity: 0},
    end: {y: 0, opacity: 1, transition: {delay: 0.2, duration: 0.4}},
  };
  const section4Animation = {
    start: {y: 20, opacity: 0},
    end: {y: 0, opacity: 1},
  };
  return (
    <div className='home'>
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
          variants={section1LogoAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
          src={logo}
          alt='Top Tier Termite Control Logo'
        />
      </section>
      <section className='home__section2'>
        <motion.div
          className='home__section2__box'
          initial='start'
          whileInView='end'
          transition={{delayChildren: 0.4, duration: 0.3, staggerChildren: 0.2}}
          viewport={{once: true, amount: 0.2}}
        >
          <motion.div
            className='home__section2__card blue--card'
            variants={section2Animation}
          >
            <img
              className='home__section2__logo'
              src={eco}
              alt='eco friendly logo'
            />
            <div className='home__section2__text blue--card--text'>
              <h3 className='home__section2__h3 blue--card--h3'>
                Eco-Friendly
              </h3>
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
                services are designed to provide you 100% peace of mind by
                taking no chances against these unwelcomed visitors.
              </p>
              <br />
              <Link className='home__section2__btn' to='/services#fum'>
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card'
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
                subterranean termite treatment available. Our subterranean
                termite treatments are designed to be effective, affordable, and
                long-lasting.
              </p>
              <br />
              <Link className='home__section2__btn' smooth to='/services#sub'>
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card'
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
                At Top-Tier Termite Control we understand that termite
                inspections can be a major concern for your home or business,
                especially when it comes to escrow. That&apos;s why we offer
                express termite escrow inspections that are designed to be fast,
                efficient, and reliable.
              </p>
              <br />
              <Link className='home__section2__btn' to='/services#esc'>
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card blue--card'
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
      <section
        className='home__section3'
        style={{
          background: `url(${section3back})
            no-repeat
            center/var(--home-section3-background-size)
            `,
        }}
      >
        <motion.div
          className='home__section3__box'
          variants={section3ImgAnimation}
          initial='start'
          whileInView='end'
          viewport={{amount: 0.2, once: true}}
          style={{
            background: `url(${home3boxback})
            no-repeat
            center/var(--home-section3-img-size)
            `,
          }}
        />
        <motion.div
          className='home__section3__box'
          variants={section3TextAnimation}
          initial='start'
          whileInView='end'
          viewport={{amount: 0.7, once: true}}
        >
          <h3 className='home__section3__h3'>
            Why should I choose <br />
            Top-Tier Termite Control?
          </h3>
          <p className='home__section3__p'>
            For over 25 years, Top-Tier Termite Control has been dedicated to
            serving the communities of Los Angeles, San Diego, Orange County,
            and other areas across Southern California. As an industry leader,
            we take pride in offering plant-based termite treatment alternatives
            that prioritize both effectiveness and environmental consciousness.
            Our experienced license Inspectors are committed to exceed your
            expectations.
          </p>
          <Link className='home__section3__btn' to='/whytoptier'>
            Read More
          </Link>
        </motion.div>
      </section>
      <motion.section
        className='home__section4'
        variants={section4Animation}
        initial='start'
        whileInView='end'
        viewport={{once: true, amount: 0.3}}
      >
        <div className='home__section4__card'>
          <img className='home__section4__img' src={termite} alt='' />
          <span className='home__section4__span'>
            Top <br />
            Warranty
          </span>
          <p className='home__section4__p'>
            The generous warranty underscores their confidence in results. If
            termites return within 3 years, they&apos;ll re-treat at no extra
            cost. Not only that the entire house is guaranteed!
            <br />
            <br />
            <b>Peace of Mind:</b>
            <br />
            With Top-Tier providers, you gain peace of mind. Your home remains
            termite-free, backed by a solid warranty. Choose wisely—protect your
            home with Top-Tier Termite Control
          </p>
        </div>
        <div className='home__section4__card   home__section4__card--blue--card'>
          <img
            className='home__section4__img home__section4__img--blue--card'
            src={solution}
            alt=''
          />
          <h3 className='home__section4__h3 home__section4__h3--blue--card--h3'>
            Advanced <br />
            Solutions
          </h3>
          <div className='home__section4__box--blue--card--box'>
            <span className='home__section4__span home__section4__span--blue--card--span'>
              <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
              Non Tenting
            </span>
            <span className='home__section4__span home__section4__span--blue--card--span'>
              <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
              Eco-Friendly
            </span>
            <span className='home__section4__span home__section4__span--blue--card--span'>
              <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
              Structural Repairs
            </span>
            <span className='home__section4__span home__section4__span--blue--card--span'>
              <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
              Subterranean Termites
            </span>
            <span className='home__section4__span home__section4__span--blue--card--span'>
              <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
              Preventative Treatment
            </span>
          </div>
        </div>
        <div className='home__section4__card'>
          <img className='home__section4__img' src={pesticide} />
          <span className='home__section4__span'>
            Top-Notch <br />
            Performance
          </span>
          <p className='home__section4__p'>
            Even when there are no visible external signs of termites on a wall,
            our techs can pinpoint the optimal spot on the interior wall, by
            peering through a small hole with an optical borescope they uncover
            termite activity. We prioritize the technology our technicians use
            for termite detection. Their extensive training and expertise allow
            them to harness this technology effectively, ensuring top-notch
            service for TopTier Termite Control clients.”
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
