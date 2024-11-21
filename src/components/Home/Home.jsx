import './Home.css';
import HomeSection1 from './Sections/HomeSection1';
import HomeSection2 from './Sections/HomeSection2';
import HomeSection3 from './Sections/HomeSection3';
import HomeSection4 from './Sections/HomeSection4';
import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <div className='home'>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </div>
  );
}

export default Home;
