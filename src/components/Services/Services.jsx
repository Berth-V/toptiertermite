import '../Services/Services.css';
import {NavLink} from 'react-router-dom';
import services1 from '../../assets/services1.jpg';
import services2 from '../../assets/services2.jpg';
import services3 from '../../assets/services3.jpg';
import services4 from '../../assets/services4.jpg';
import services5 from '../../assets/services5.jpg';
import services6 from '../../assets/services6.jpg';
import services8 from '../../assets/services8.jpg';
import subterrain1 from '../../assets/sub1.jpeg';
import subterrain2 from '../../assets/sub2.jpeg';
import subterrain3 from '../../assets/sub3.jpeg';
import subterrain4 from '../../assets/sub4.jpeg';
import fumigation1 from '../../assets/fum1.jpeg';
import fumigation2 from '../../assets/fum2.jpeg';
import fumigation3 from '../../assets/fum3.jpeg';
import fumigation4 from '../../assets/fum4.jpeg';

function Services() {
  //Framer Motion Variants//
  return (
    <div className='services'>
      <section
        className='services__background'
        style={{
          background: `url(${services1})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='services__background__filter'>
          <div className='services__container'>
            <h2 className='services__h2'>Eco-Friendly Treatment</h2>
            <div className='services__container2 container--a'>
              <div className='services__text__box text__box--a'>
                <p className='services__p'>
                  Eco-Friendly Spot treatments are treatments that address
                  localized termite concerns inside your home. Spot treatments
                  include wood/slab applications or drilling treatments that
                  focus on addressing specific threats to the wood structures of
                  your house. Our treatments are not only effective but also
                  environmentally conscious, offering non-toxic options too for
                  your peace of mind. While certain spot treatments are more
                  invasive than others, it is less invasive than house
                  fumigation. This option is typically used for more urgent
                  termite infestations that affect the inside of your home. This
                  option may involve drilling directly into wood to apply the
                  product. Our green termite treatment options include heat
                  treatment, liquid treatments, bait and monitoring stations,
                  advanced foams and many more. Our team of experts at Top-Tier
                  Termite will conduct a thorough inspection of your property to
                  assess any termite activity and future risk. Based on our
                  findings, we&apos;ll develop a detailed termite protection
                  plan that&apos;s tailored to your specific needs.
                </p>
                <NavLink className='services__btn'>Contact Us</NavLink>
              </div>
              <div className='services__img__container'>
                <img className='services__img' src={services5} />
                <img className='services__img' src={services5} />
                <img className='services__img' src={services5} />
                <img className='services__img' src={services5} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__background'
        style={{
          background: `url(${services2})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='services__background__filter'>
          <div className='services__container'>
            <h2 className='services__h2'>Fumigation</h2>
            <div className='services__container2 container--b'>
              <div className='services__img__container'>
                <img className='services__img' src={fumigation1} />
                <img className='services__img' src={fumigation2} />
                <img className='services__img' src={fumigation3} />
                <img className='services__img' src={fumigation4} />
              </div>
              <div className='services__text__box text__box--b'>
                <p className='services__p'>
                  Drywood termites cause an estimated $300 million in damage
                  each year in California alone. They also destroy properties in
                  Florida, Gulf Coast states and Hawaii. Drywood termites can
                  infest wood in any type of structure - new or old,
                  wood-framed, stucco or brick. Though rare, they have infested
                  wood in ships and even infested furniture moved to northern
                  states. During swarming season, winged termites
                  (reproductives) fly out from the colony, THEY SWARM IN
                  HUNDREDS! THAT MEANS YOUR HOUSE MIGHT BE HOME OF MULTIPLE
                  COLONIES AT ONCE. Once they land, they shed their wings, pair
                  up and search for a small, suitable opening or crevice in a
                  structure. If the pair are successful, they become the king
                  and queen of a new colony. Structural fumigation is recognized
                  as the number one proven way to eliminate all drywood termites
                  colonies from a building. Whole-structure fumigation is the
                  only termite treatment that can ensure 100 percent elimination
                  of drywood termites. Any building with wood in the structure
                  is susceptible to infestation. How it works..? Gas fumigant
                  penetrates all air spaces inside the structure, including
                  inside the infested wood. It&apos;s why structural fumigation
                  is the only proven way to eliminate 100% every single colony
                  of drywood termites. <br />
                  <NavLink className='services__btn'>Contact us</NavLink> today
                  to schedule your termite inspection and take the first step
                  towards a termite-free home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__background'
        style={{
          background: `url(${services3})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='services__background__filter'>
          <div className='services__container'>
            <h2 className='services__h2'>Subterrain Termites</h2>
            <div className='services__container2 container--a'>
              <div className='services__text__box text__box--a'>
                <p className='services__p'>
                  Our treatment process begins with a thorough inspection of
                  your property to identify the extent of the infestation. We
                  then use a combination of liquid soil-applied termiticides,
                  termite baits, and wood treatments to eliminate the termites
                  and prevent future infestations. Our team of experts will work
                  with you to identify the best treatment option for your home
                  or business. We offer a variety of non-toxic treatments, such
                  as physical barriers and and bait stations, that can help keep
                  termites out without the use of harmful chemicals. We also
                  offer a range of termiticides that are safe for the
                  environment and your loved ones. Our subterranean termite
                  treatments are backed by our three year guarantee. We&apos;re
                  committed to providing you with the best possible service and
                  ensuring that your investment is termite-free. Don&apos;t let
                  subterranean termites damage your home any longer. Contact us
                  today to schedule your subterranean termite
                  inspection/treatment and take the first step towards a
                  termite-free home!
                  <br />
                  <NavLink className='services__btn'>Contact us</NavLink> today
                  to learn more about our subterranean termite treatment options
                  and how we can help protect your investment from these
                  unwelcomed visitors.
                </p>
              </div>
              <div className='services__img__container'>
                <img className='services__img' src={subterrain1} />
                <img className='services__img' src={subterrain2} />
                <img className='services__img' src={subterrain3} />
                <img className='services__img' src={subterrain4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__background'
        style={{
          background: `url(${services4})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='services__background__filter'>
          <div className='services__container'>
            <h2 className='services__h2'>Escrow Services</h2>
            <div className='services__container2 container--b'>
              <div className='services__img__container'>
                <img className='services__img' src={services8} />
                <img className='services__img' src={services8} />
                <img className='services__img' src={services8} />
                <img className='services__img' src={services8} />
              </div>
              <div className='services__text__box text__box--b'>
                <p className='services__p'>
                  Our team of experts will work with you to schedule an
                  inspection at a time that&apos;s convenient for you. We offer
                  a range of inspection services, including wood-destroying
                  organism (WDO) inspections and termite certifications, that
                  can help ensure your property is free from infestation. Our
                  termite escrow inspections are backed by our satisfaction
                  guarantee. If you&apos;re not completely satisfied with our
                  service, we&apos;ll work with you to make it right. We&apos;re
                  committed to providing you with the best possible service and
                  ensuring that your business is termite-free. We understand
                  that FHA and VA loans have specific requirements for escrow
                  services. Our team is well-versed in these requirements and
                  can help ensure that your escrow inspection meets all
                  necessary standards. We provide a Separated Wood-Destroying
                  Organisms (WDO) report (Sections 1 and 2) that will be faxed
                  or e-mail immediately to the escrow company, owner, and
                  Realtor, and followed up with a hard copy in the mail. We can
                  also provide a termite clearance upon completion of the
                  termite treatment (if any) and any necessary corrective wood
                  repairs. The cost of our services is billed to the escrow
                  company. The buyer has a three-year service guarantee on the
                  entire structure. The seller has peace of mind, knowing there
                  will be no foot traffic on the roof and grass and plants will
                  remain green and alive. Buyers (and neighbors) appreciate
                  that!
                  <br />
                  <NavLink className='services__btn'>Contact us</NavLink> today
                  to learn more about our termite escrow inspections and how we
                  can help protect your business from termites. Thank you for
                  considering our services!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__background'
        style={{
          background: `url(${services3})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='services__background__filter'>
          <div className='services__container'>
            <h2 className='services__h2'>Structural Repairs</h2>
            <div className='services__container2 container--a'>
              <div className='services__text__box text__box--a'>
                <p className='services__p'>
                  At Top-Tier Termite Control, we specialize in providing
                  comprehensive structural repair services that address termite,
                  fungus, and water damage. Our team of skilled professionals
                  has years of experience in identifying and repairing
                  structural issues, ensuring that your property is safe,
                  secure, and structurally sound. Whether you&apos;re dealing
                  with sagging floors, cracked walls, or weakened supports, we
                  have the expertise and tools necessary to restore your
                  property to its former glory. We use only the highest quality
                  materials and cutting-edge techniques to ensure that your
                  repairs are long-lasting and effective. At Top-Tier Termite
                  Control , we understand that structural damage can be a
                  stressful and overwhelming experience. That&apos;s why
                  we&apos;re committed to providing exceptional customer service
                  and support throughout the entire repair process. From the
                  initial consultation to the final inspection, we&apos;ll work
                  closely with you to ensure that your needs are met and your
                  expectations are exceeded. Don&apos;t let structural damage
                  compromise the safety and integrity of your property. <br />
                  <NavLink className='services__btn'>Contact us</NavLink> today
                  to learn more about our comprehensive structural repair
                  services and how we can help you restore your property to its
                  former strength and beauty.
                </p>
              </div>
              <div className='services__img__container'>
                <img className='services__img' src={services6} />
                <img className='services__img' src={services8} />
                <img className='services__img' src={services5} />
                <img className='services__img' src={services5} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='services__background'
        style={{
          background: `url(${services4})
          no-repeat
          center/100%
        `,
        }}
      >
        <div className='services__background__filter'>
          <div className='services__container'>
            <h2 className='services__h2'>Preventative Treatment</h2>
            <div className='services__container2'>
              <div className='services__img__container container--b'>
                <img className='services__img' src={services8} />
                <img className='services__img' src={services8} />
                <img className='services__img' src={services8} />
                <img className='services__img' src={services8} />
              </div>
              <div className='services__text__box text__box--b'>
                <p className='services__p'>
                  At Top-Tier Termite, we offer a comprehensive prevention
                  control program that includes pre-treatment services for
                  subterranean termites, wood boring bettles and drywood
                  termites. subterranean termites live below the ground, at the
                  level of the foundation, and can cause permanent damage to
                  your building if left unchecked. Our professionals will visit
                  the site and test the soil to assess what treatment will be
                  ideal for that particular area. We offer several options,
                  including termiticide treatment, liquid termiticide
                  application, chemical barriers, and injection of liquid
                  termiticide within the foundation walls directly and even
                  under and above concrete slabs. In the other hand we offer
                  drywood termites and wood boring bettles pre-construction
                  treatments that help prevent infestations before they occur.
                  Our team of professionals will work with you to develop a
                  customized plan that meets your specific needs. This may
                  include using pressure-treated wood, applying termiticide to
                  raw wood or bare wood framing before or after construction
                  begins, attic spaces and any expossed wood framing. For
                  exposed raw wood, we apply a register termicide protective
                  coating that can help prevent termite infestations. Our
                  professionals will inspect your property and identify any
                  areas where exposed raw wood is present. We will then apply a
                  protective coating to these areas to prevent termite
                  infestations. At Top-Tier Termite, we understand the
                  principles of termite control and are committed to protecting
                  your structures from the devastating impact of these
                  wood-destroying pests. <br />
                  <NavLink className='services__btn'>Contact us</NavLink> today
                  to learn more about our services and how we can help you
                  protect your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
