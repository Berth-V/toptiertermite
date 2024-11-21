import Home from '../components/Home/Home';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import TermitesInfo from '../components/Home/SecondarySections/TermitesInfo/TermitesInfo';
import WhyTopTier from '../components/Home/SecondarySections/WhyTopTier/WhyTopTier';
import {useContext, useEffect} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {Context} from '../components/Context/Context';

function TransitionRoutes() {
  const location = useLocation();
  const {isOnContactPage} = useContext(Context);
  useEffect(() => {
    location.pathname == '/contact'
      ? isOnContactPage(true)
      : isOnContactPage(false);
  }, [isOnContactPage, location.pathname]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/termitesinfo' element={<TermitesInfo />} />
        <Route path='/whytoptier' element={<WhyTopTier />} />
      </Routes>
    </AnimatePresence>
  );
}

export default TransitionRoutes;
