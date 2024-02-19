import {HashRouter} from 'react-router-dom';
import {Data} from './components/Context/Context';
import './App.css';
import Header from './components/Header/Header';
import TransitionRoutes from './components/TransitionRoutes/TransitionRoutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <Data>
          <Header />
          <TransitionRoutes />
          <Footer />
        </Data>
      </HashRouter>
    </>
  );
}

export default App;
