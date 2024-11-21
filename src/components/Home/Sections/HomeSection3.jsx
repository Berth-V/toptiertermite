import section3back from '../../../assets/home3back.avif';
import home3boxback from '../../../assets/home3boxback.avif';
import {section3ImgAnimation, section3TextAnimation} from '../framerVariants';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function HomeSection3() {
  return (
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
        style={{
          background: `url(${home3boxback})
        no-repeat
        center/var(--home-section3-img-size)
        `,
        }}
        /* Framer Motion Attributes */
        variants={section3ImgAnimation}
        initial='start'
        whileInView='end'
        viewport={{amount: 0.2, once: true}}
      />
      <motion.div
        className='home__section3__box'
        /* Framer Motion Attributes */
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
          serving the communities of Los Angeles, San Diego, Orange County, and
          other areas across Southern California. As an industry leader, we take
          pride in offering plant-based termite treatment alternatives that
          prioritize both effectiveness and environmental consciousness. Our
          experienced license Inspectors are committed to exceed your
          expectations.
        </p>
        <Link className='home__section3__btn' to='/whytoptier'>
          Read More
        </Link>
      </motion.div>
    </section>
  );
}

export default HomeSection3;
