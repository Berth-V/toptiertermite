import '../About/About.css';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';

function About() {
  return (
    <div className='about'>
      <div className='about__section1'>
        <div className='about__img1__container'>
          <img className='about__img1' src={about1} alt='' />
        </div>
        <h2 className='about__h2'>About Us</h2>
      </div>
      <div className='about__p__container'
              style={{
                background: `url(${about2})
                  no-repeat
                  center/100%
                  `,
              }}
      > 
      <p className='about__p'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quas
        id rerum voluptatem explicabo laboriosam aperiam eum, placeat reiciendis
        natus? Nemo dolorum voluptatum hic eveniet quasi blanditiis aliquam vero
        quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        amet dicta possimus incidunt repellendus velit magnam dolorem quia
        animi. <br />
        <br />
        Voluptas nobis itaque tempore sunt cum vitae minima perspiciatis,
        voluptatem eligendi? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Totam explicabo aperiam rem fugiat ad nisi consequatur ratione
        pariatur, nesciunt reprehenderit optio et corporis porro saepe tenetur
        autem voluptatibus consequuntur esse.
        <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae itaque, nostrum repellat rem sunt eum voluptates illo.
        Eligendi, perspiciatis aut temporibus neque reiciendis cumque aliquam
        rerum alias, id similique mollitia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur maxime animi consectetur dicta
        illum neque iste totam soluta, tempore tenetur voluptas quasi cumque
        labore harum in, vero quo quia iure.
      </p>
      </div>
    </div>
  );
}

export default About;
