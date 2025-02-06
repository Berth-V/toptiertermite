import {FaCheck} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {section4Animation} from '../framerVariants';
import pesticide from '../../../assets/pesticide.png';
import solution from '../../../assets/solution.png';
import termite from '../../../assets/termite.png';

function HomeSection4() {
  return (
    <motion.section
      className='home__section4'
      /* Framer Motion Attributes */
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
      <div className='home__section4__card section4--blue--card'>
        <img
          className='home__section4__img section4--blue--card--img'
          src={solution}
          alt=''
        />
        <h3 className='home__section4__h3 section4--blue--card--h3'>
          Advanced <br />
          Solutions
        </h3>
        <div className='home__section4__box section4--blue--card--box'>
          <span className='home__section4__span section4--blue--card--span'>
            <FaCheck className='home__section4__icon  section4--blue--card--icon' />
            Non Tenting
          </span>
          <span className='home__section4__span section4--blue--card--span'>
            <FaCheck className='home__section4__icon  section4--blue--card--icon' />
            Eco-Friendly
          </span>
          <span className='home__section4__span section4--blue--card--span'>
            <FaCheck className='home__section4__icon  section4--blue--card--icon' />
            Structural Repairs
          </span>
          <span className='home__section4__span section4--blue--card--span'>
            <FaCheck className='home__section4__icon  section4--blue--card--icon' />
            Subterranean Termites
          </span>
          <span className='home__section4__span section4--blue--card--span'>
            <FaCheck className='home__section4__icon  section4--blue--card--icon' />
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
          termite activity. We prioritize the technology our technicians use for
          termite detection. Their extensive training and expertise allow them
          to harness this technology effectively, ensuring top-notch service for
          TopTier Termite Control clients.”
        </p>
      </div>
    </motion.section>
  );
}

export default HomeSection4;
