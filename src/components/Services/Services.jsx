import '../Services/Services.css';
import {NavLink} from 'react-router-dom';
import services1 from '../../assets/services1.jpg';
import services2 from '../../assets/services2.jpg';
import services3 from '../../assets/services3.jpg';
import services4 from '../../assets/services4.jpg';
import services5 from '../../assets/services5.jpg';
import services6 from '../../assets/services6.jpg';
import services7 from '../../assets/services7.jpg';
import services8 from '../../assets/services8.jpg';

function Services() {
  //Framer Motion Variants//
  return (
    <div className='services'>
      <section
        className='services__section1'
        style={{
          background: `url(${services1})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='section1__container'>
          <div className='section1__box'>
            <h2 className='services__h2'>Service 1</h2>
            <div className='services1__container2'>
              <div className='section1__text'>
                <p className='section1__p'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores minima harum enim perspiciatis delectus possimus
                  itaque minus, deserunt saepe ipsam nam molestias ad tenetur
                  aut consequuntur. Praesentium autem ad blanditiis.
                </p>
                <NavLink className='services1__btn'>Contact Us</NavLink>
              </div>
              <img className='services1__img' src={services5} />
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__section1'
        style={{
          background: `url(${services2})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='section1__container'>
          <div className='section1__box'>
            <h2 className='services__h2'>Service 2</h2>
            <div className='services1__container2'>
              <img className='services1__img' src={services6} />
              <div className='section1__text--2'>
                <p className='section1__p'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores minima harum enim perspiciatis delectus possimus
                  itaque minus, deserunt saepe ipsam nam molestias ad tenetur
                  aut consequuntur. Praesentium autem ad blanditiis.
                </p>
                <NavLink className='services1__btn'>Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__section1'
        style={{
          background: `url(${services3})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='section1__container'>
          <div className='section1__box'>
            <h2 className='services__h2'>Service 3</h2>
            <div className='services1__container2'>
              <div className='section1__text'>
                <p className='section1__p'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores minima harum enim perspiciatis delectus possimus
                  itaque minus, deserunt saepe ipsam nam molestias ad tenetur
                  aut consequuntur. Praesentium autem ad blanditiis.
                </p>
                <NavLink className='services1__btn'>Contact Us</NavLink>
              </div>
              <img className='services1__img' src={services7} />
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__section1'
        style={{
          background: `url(${services4})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='section1__container'>
          <div className='section1__box'>
            <h2 className='services__h2'>Service 4</h2>
            <div className='services1__container2'>
              <img className='services1__img' src={services8} />
              <div className='section1__text--4'>
                <p className='section1__p'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores minima harum enim perspiciatis delectus possimus
                  itaque minus, deserunt saepe ipsam nam molestias ad tenetur
                  aut consequuntur. Praesentium autem ad blanditiis.
                </p>
                <NavLink className='services1__btn'>Contact Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
