import '../About/About.css';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import {motion} from 'framer-motion';
import {useEffect} from 'react';

function About() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <div className='about'>
      <div className='about__section1'>
        <motion.div
          className='about__img1__container'
          initial='false'
          animate={{rotateY: [0, 360, 0]}}
          transition={{delay: 0.5}}
        >
          <img className='about__img1' src={about1} alt='' />
        </motion.div>
        <motion.h2
          className='about__h2'
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >
          About Us
        </motion.h2>
      </div>
      <div
        className='about__p__background'
        style={{
          background: `url(${about2})
                  no-repeat
                  center/100%
                  `,
        }}
      >
        <div className='about__p__container'>
          <p className='about__p'>
            At <b>TopTier Termite Control</b>, we take pride in safeguarding
            your property from the silent yet destructive menace of termites.
            With years of experience and a commitment to excellence, our team of
            highly trained technicians is dedicated to providing effective
            termite solutions. <br />
            <br />
            <b>Our Approach</b>
            <br />
            <b>Cutting-Edge Technology:</b> We stay ahead of the curve by
            utilizing state-of-the-art borescopes and other advanced tools.
            These allow us to detect termite activity even in hidden nooks and
            crannies.
            <br />
            <b>Expertise and Precision:</b> Our technicians are not just
            skilled; they’re termite detectives. They know where to look, how to
            interpret subtle signs, and when to investigate further. Their keen
            eye ensures accurate identification and targeted treatment.
            <br />
            <b>Client-Centric Service:</b> We prioritize your peace of mind. Our
            friendly team will guide you through the process, answer your
            questions, and tailor solutions to your specific needs.
            <br />
            <br />
            <b>Why Choose Us? </b>
            <br />
            <b>Comprehensive Inspections:</b> We leave no termite unturned. Our
            thorough inspections cover every inch of your property.
            <br />
            <b>Customized Solutions:</b> No two termite infestations are alike.
            We create personalized treatment plans based on your situation.
            <br />
            <b>Eco-Friendly Practices:</b> We care about your home and the
            environment. Our treatments are effective yet environmentally
            responsible. <br />
            <b>Results You Can Trust:</b> Our track record speaks for itself.
            Join the ranks of satisfied clients who have reclaimed their spaces
            from termites.
            <br />
            Contact Us Ready to protect your property? Reach out to TopTier
            Termite Control today. We’re here to keep your home termite-free!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
