import './Home.css';
import {NavLink} from 'react-router-dom';
import frontpage from '../../assets/frontpage.jpg';
import home4back from '../../assets/home4back.jpg';
import pesticide from '../../assets/pesticide.png';
import termite from '../../assets/termite.png';
import {FaHelmetSafety} from 'react-icons/fa6';
import {BiBadgeCheck} from 'react-icons/bi';
import {BiCalendarEvent} from 'react-icons/bi';
import {BiBus} from 'react-icons/bi';
import {BiLock} from 'react-icons/bi';
import {BiMessageAltDetail} from 'react-icons/bi';
import {FaCheck} from 'react-icons/fa';

function Home() {
  //Framer Motion Variants//

  return (
    <div className='home'>
      <h1 className='home__h1'>Top Tier Termite Control</h1>
      <section className='home__section1'>
        <img className='home__frontpage' src={frontpage} />
        <div className='purpple__square' />
      </section>
      <section className='home__section2'>
        <h2 className='home__h2'>
          <b className='home__b'>Lorem</b> ipsumdolor
        </h2>
        <h3 className='home__h3'>In quia ad nobis iusto quaerat.</h3>
        <p className='home__p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit provident nam
          dolorum enim sit aut quod accusamus voluptate praesentium esse quis
          nostrum dolorem! Odit voluptatum, maxime non itaque doloribus quasi
          exercitationem.
        </p>
      </section>
      <section className='home__section3'>
        <div className='home__section3__box'>
          <div className='home__section3__item'>
            <div className='home__icon__container'>
              <FaHelmetSafety className='home__icon' />
            </div>
            <div className='home__section3__text'>
              <h3 className='home__section3__h3'>Loremipsum</h3>
              <span className='home__section3__span'>
                Lorem ipsumdolor arneus dochakat lorem lreom upsum dolor lorem
                ipsum dolor lorem ipsum dolor
              </span>
            </div>
          </div>
          <div className='home__section3__item'>
            <div className='home__icon__container'>
              <BiBadgeCheck className='home__icon' />
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
          <div className='home__section3__item'>
            <div className='home__icon__container'>
              <BiLock className='home__icon' />
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
              <BiMessageAltDetail className='home__icon' />
            </div>
            <div className='home__section3__text'>
              <h3 className='home__section3__h3'>Loremipsum</h3>
              <span className='home__section3__span'>
                Lorem ipsumdolor arneus dochakat lreom upsum dolor lorem ipsum
                dolor lorem ipsum odlor
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='home__section4'>
        <div
          className='home__section4__box'
          style={{
            background: `url(${home4back})
            no-repeat
            center/var(--home4-back-size)
            `,
          }}
        />
        <div className='home__section4__box'>
          <h3 className='home__section4__h3'>
            Lorem ipsum dolor alfet grafu scihop rotus
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
          <h3 className='home__section5__h3'>Lorem Ipsum</h3>
          <span className='home__section5__span'>
            <FaCheck className='home__section5__icon' />
            Lorem ipsum dolor ibus frog
          </span>
          <span className='home__section5__span'>
            <FaCheck className='home__section5__icon' />
            Lorem ipsum dolor ibus frog
          </span>
          <span className='home__section5__span'>
            <FaCheck className='home__section5__icon' />
            Lorem ipsum dolor ibus frog
          </span>
          <span className='home__section5__span'>
            <FaCheck className='home__section5__icon' />
            Lorem ipsum dolor ibus frog
          </span>
          <span className='home__section5__span'>
            <FaCheck className='home__section5__icon' />
            Lorem ipsum dolor ibus frog
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
