import '../Services/Services.css';
import {useEffect} from 'react';
import {servicesInfo} from './servicesData';

function Services() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <div className='services'>
      {servicesInfo.map((service, index) => (
        <section
          className='services__background'
          key={index}
          id={service.id}
          style={{
            background: `url(${service.background})
            no-repeat
            center/100%
        `,
          }}
        >
          <div className='services__background__filter'>
            <div className='services__container'>
              <h2 className='services__h2'>{service.tittle}</h2>
              <div
                className={
                  index % 2 === 0
                    ? 'services__container2 container--a'
                    : 'services__container2 container--b'
                }
              >
                {service.img1 ? (
                  <div className='services__img__container'>
                    <img
                      className='services__img'
                      src={service.img1}
                      alt='fumigation termite'
                    />
                    <img
                      className='services__img'
                      src={service.img2}
                      alt='fumigation termite'
                    />
                    <img
                      className='services__img'
                      src={service.img3}
                      alt='fumigation termite'
                    />
                    <img
                      className='services__img'
                      src={service.img4}
                      alt='fumigation termite'
                    />
                  </div>
                ) : (
                  false
                )}
                <div className='services__text__box text'>
                  <p className='services__p'>{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Services;
