import './Home.css';
import {NavLink} from 'react-router-dom';
import frontpage from '../../assets/frontpage.jpg';
import home4back from '../../assets/home4back2.jpg';
import pesticide from '../../assets/pesticide.png';
import termite from '../../assets/termite.png';
import section3back from '../../assets/section3back.jpg';
import {FaHelmetSafety} from 'react-icons/fa6';
import {BiBadgeCheck} from 'react-icons/bi';
import {BiCalendarEvent} from 'react-icons/bi';
import {BiBus} from 'react-icons/bi';
import {BiLock} from 'react-icons/bi';
import {BiMessageAltDetail} from 'react-icons/bi';
import {FaCheck} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa6';

function Home() {
  //Framer Motion Variants//

  return (
    <div className='home'>
      <h1 className='home__h1'>Top Tier Termite Control</h1>
      <section
        className='home__section2'
        style={{
          background: `url(${frontpage})
            no-repeat
            top/var(--home4-back-size)
            `,
        }}
      >
        <div className='home__section1__text'>
          <h2 className='home__h2'>
            <b className='home__b'>Lorem</b> ipsumdolor apsumrial frederic epson
            frednich
          </h2>
          <h3 className='home__h3'>
            <FaPhone className='section1__icon' />
            +1 (619) 555 18 95.
          </h3>
          <p className='home__p'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit provident
            nam dolorum enim sit aut quod accusamus voluptate praesentium esse
            quis nostrum dolorem! Odit voluptatum, maxime non itaque doloribus
            quasi exercitationem.
          </p>
          <NavLink className='section1__btn'> Learn More</NavLink>
        </div>
      </section>
      <section className='home__section'></section>
      <section className='home__section3'>
        <div className='home__section3__box'>
          <div className='home__section3__item--blue'>
            <div className='home__icon__container--blue'>
              <FaHelmetSafety className='home__icon--blue' />
            </div>
            <div className='home__section3__text--blue'>
              <h3 className='home__section3__h3--blue'>Loremipsum</h3>
              <span className='home__section3__span--blue'>
                Lorem ipsumdolor arneus dochakat lorem lreom upsum dolor lorem
                ipsum dolor lorem ipsum dolor
              </span>
            </div>
          </div>
          <div className='home__section3__item--second'>
            <div className='home__icon__container--second'>
              <BiBadgeCheck className='home__icon--second' />
            </div>
            <div className='home__section3__text--second'>
              <h3 className='home__section3__h3'>Loremipsum</h3>
              <span className='home__section3__span'>
                Lorem ipsumdolor arneus dochakat lreom upsum dolor lorem ipsum
                dolor lorem ipsum odlor
              </span>
            </div>
          </div>
          <div className='home__section3__item'>
            <div className='home__icon__container'>
              <BiCalendarEvent className='home__icon' />
            </div>
            <div className='home__section3__text'>
              <h3 className='home__section3__h3'>Loremipsum</h3>
              <span className='home__section3__span'>
                Lorem ipsumdolor arneus dochakat lreom upsum dolor lorem ipsum
                dolor lorem ipsum odlor
              </span>
            </div>
          </div>
          <div className='home__section3__item'>
            <div className='home__icon__container'>
              <BiBus className='home__icon' />
            </div>
            <div className='home__section3__text'>
              <h3 className='home__section3__h3'>Loremipsum</h3>
              <span className='home__section3__span'>
                Lorem ipsumdolor arneus dochakat lreom upsum dolor lorem ipsum
                dolor lorem ipsum odlor
              </span>
            </div>
          </div>
          <div className='home__section3__item--blue'>
            <div className='home__icon__container--blue'>
              <BiLock className='home__icon--blue' />
            </div>
            <div className='home__section3__text--blue'>
              <h3 className='home__section3__h3--blue'>Loremipsum</h3>
              <span className='home__section3__span--blue'>
                Lorem ipsumdolor arneus dochakat lreom upsum dolor lorem ipsum
                dolor lorem ipsum odlor
              </span>
            </div>
          </div>
          <div className='home__section3__item--blue'>
            <div className='home__icon__container--blue'>
              <BiMessageAltDetail className='home__icon--blue' />
            </div>
            <div className='home__section3__text--blue'>
              <h3 className='home__section3__h3--blue'>Loremipsum</h3>
              <span className='home__section3__span--blue'>
                Lorem ipsumdolor arneus dochakat lreom upsum dolor lorem ipsum
                dolor lorem ipsum odlor
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className='home__section4'
        style={{
          background: `url(${section3back})
            no-repeat
            center/var(--home4-back-size)
            `,
        }}
      >
        <div
          className='home__section4__box'
          style={{
            background: `url(${home4back})
            no-repeat
            center/110%
            `,
          }}
        />
        <div className='home__section4__box'>
          <h3 className='home__section4__h3'>
            Loremipsum doloralfet grafuscihop rotus
          </h3>
          <p className='home__section4__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at,
            illo repudiandae aperiam consectetur repellat cumque odio eveniet,
            quis non facere molestias eius obcaecati possimus nostrum esse.
            Blanditiis, recusandae cum?
          </p>
          <NavLink className='home__section4__btn'> Read More </NavLink>
        </div>
      </section>
      <section className='home__section5'>
        <div className='home__section5__box'>
          <img className='home__section5__img' src={termite} alt='' />
          <span className='home__section5__span'> Loremipsumdolor</span>
          <p className='home__section5__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            laboriosam aperiam rerum laudantium reiciendis incidunt quibusdam,
            minima dignissimos recusandae repudiandae
          </p>
        </div>
        <div className='home__section5__box--second'>
          <h3 className='home__section5__h3--second'>Lorem Ipsum</h3>
          <span className='home__section5__span--second'>
            <FaCheck className='home__section5__icon--second' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section5__span--second'>
            <FaCheck className='home__section5__icon--second' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section5__span--second'>
            <FaCheck className='home__section5__icon--second' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section5__span--second'>
            <FaCheck className='home__section5__icon--second' />
            Lorem ipsum dolor ipsum
          </span>
          <span className='home__section5__span--second'>
            <FaCheck className='home__section5__icon--second' />
            Lorem ipsum dolor ipsum
          </span>
        </div>
        <div className='home__section5__box'>
          <img className='home__section5__img' src={pesticide} />
          <span className='home__section5__span'> Loremipsumdolor</span>
          <p className='home__section5__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            laboriosam aperiam rerum laudantium reiciendis incidunt quibusdam,
            minima dignissimos recusandae repudiandae
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
