import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import TermitesInfo from '../TermitesInfo/TermitesInfo';
import {useContext, useEffect} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {Context} from '../Context/Context';

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
      </Routes>
    </AnimatePresence>
  );
}

export default TransitionRoutes;
