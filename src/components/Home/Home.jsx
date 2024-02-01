import './Home.css';
import logo from '../../assets/toptierlogo4.PNG';
import frontpage from '../../assets/frontpage1.jpg';
import home4back from '../../assets/home4back2.jpg';
import pesticide from '../../assets/pesticide.png';
import termite from '../../assets/termite.png';
import section3back from '../../assets/section3back.jpg';
import eco from '../../assets/ecofriendly.png';
import fumigation from '../../assets/fumigation.png';
import subterranean from '../../assets/subterranean.png';
import escrow from '../../assets/escrow.png';
import structural from '../../assets/structural.png';
import preventative from '../../assets/preventative.png';
import {FaCheck} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa6';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';

function Home() {
  //Framer Motion Variants//
  const section1TextAnimation = {
    start: {x: 100, y: -100, opacity: 0},
    end: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {duration: 0.5},
    },
  };
  const section1LogoAnimation = {
    start: {x: -100, y: 100, opacity: 0},
    end: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {delay: 0.2, duration: 0.5},
    },
  };
  const section2Animation = {
    start: {scale: 0},
    end: {scale: 1, transition: {duration: 0.4, staggerChildren: 0.1}},
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
      <h1 className='home__h1'>Top Tier Termite Control</h1>
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
          className='home__services__text__box'
          variants={section1TextAnimation}
          initial='start'
          animate='end'
        >
          <h2 className='home__h2'>
            When termites move in,
            <br />
            Do I move out?
          </h2>
          <p className='home__p'>
            The answer is NO. With our top-tier advanced non-invasive treatment
            methods, those days are left in the past
          </p>
          <NavLink className='section1__btn' to='/termitesinfo'>
            Learn More
          </NavLink>
          <h3 className='home__h3'>
            <FaPhone className='section1__icon' />
            +1 (619) 555 18 95
          </h3>
        </motion.div>
        <motion.img
          className='home__section1__logo'
          variants={section1LogoAnimation}
          initial='start'
          animate='end'
          src={logo}
          alt=''
        />
      </section>
      <section className='home__section2'>
        <motion.div
          className='home__section2__box'
          variants={section2Animation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          <motion.div
            className='home__section2__card blue--card'
            variants={section2Animation}
          >
            <img className='home__section2__logo' src={eco} />

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
              <NavLink
                className='home__section2__btn blue--card--btn'
                to='/contact'
              >
                Learn More
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card'
            variants={section2Animation}
          >
            <img className='home__section2__logo' src={fumigation} />
            <div className='home__section2__text'>
              <h3 className='home__section2__h3'>Fumigation</h3>
              <p className='home__section2__p'>
                Our Whole-Structure Fumigation is meant to eradicate Drywood
                termites at every stage of their life cycles. Our fumigation
                services are designed to provide you 100% peace of mind by
                taking no chances against these unwelcomed visitors.
              </p>
              <br />
              <NavLink className='home__section2__btn' to='/contact'>
                {' '}
                Learn More
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card'
            variants={section2Animation}
          >
            <img className='home__section2__logo' src={subterranean} />
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
              <NavLink className='home__section2__btn' to='/contact'>
                {' '}
                Learn More
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card'
            variants={section2Animation}
          >
            <img className='home__section2__logo' src={escrow} />
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
              <NavLink className='home__section2__btn' to='/contact'>
                Learn More
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card blue--card'
            variants={section2Animation}
          >
            <img className='home__section2__logo' src={structural} />
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
              <NavLink
                className='home__section2__btn blue--card--btn'
                to='/contact'
              >
                Learn More
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className='home__section2__card blue--card'
            variants={section2Animation}
          >
            <img className='home__section2__logo' src={preventative} />
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
              <NavLink
                className='home__section2__btn blue--card--btn'
                to='/contact'
              >
                Learn More
              </NavLink>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section
        className='home__section3'
        style={{
          background: `url(${section3back})
            no-repeat
            center/var(--home-frontpage-size)
            `,
        }}
      >
        <motion.div
          className='home__section3__box'
          variants={section3ImgAnimation}
          initial='start'
          whileInView='end'
          viewport={{amount: 0.7, once: true}}
          style={{
            background: `url(${home4back})
            no-repeat
            center/var(--home-section4-img-size)
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
            Loremipsum doloralfet grafuscihop rotus
          </h3>
          <p className='home__section3__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at,
            illo repudiandae aperiam consectetur repellat cumque odio eveniet,
            quis non facere molestias eius obcaecati possimus nostrum esse.
            Blanditiis, recusandae cum?
          </p>
          <NavLink className='home__section3__btn'> Read More </NavLink>
        </motion.div>
      </section>
      <motion.section
        className='home__section4'
        variants={section4Animation}
        initial='start'
        whileInView='end'
        viewport={{once: true, amount: 0.5}}
      >
        <div className='home__section4__card'>
          <img className='home__section4__img' src={termite} alt='' />
          <span className='home__section4__span'> Loremipsumdolor</span>
          <p className='home__section4__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            laboriosam aperiam rerum laudantium reiciendis incidunt quibusdam,
            minima dignissimos recusandae repudiandae
          </p>
        </div>
        <div className='home__section4__card   home__section4__card--blue--card'>
          <h3 className='home__section4__h3 home__section4__h3--blue--card--h3'>
            Lorem Ipsum
          </h3>
          <span className='home__section4__span home__section4__span--blue--card--span'>
            <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section4__span home__section4__span--blue--card--span'>
            <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section4__span home__section4__span--blue--card--span'>
            <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section4__span home__section4__span--blue--card--span'>
            <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section4__span home__section4__span--blue--card--span'>
            <FaCheck className='home__section4__icon  home__section4__icon--blue--card--icon' />
            Lorem ipsum dolor ipsum
          </span>
        </div>
        <div className='home__section4__card'>
          <img className='home__section4__img' src={pesticide} />
          <span className='home__section4__span'> Loremipsumdolor</span>
          <p className='home__section4__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            laboriosam aperiam rerum laudantium reiciendis incidunt quibusdam,
            minima dignissimos recusandae repudiandae
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
