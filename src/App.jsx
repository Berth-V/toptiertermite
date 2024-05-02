import {HashRouter} from 'react-router-dom';
import {Data} from './components/Context/Context';
import './App.css';
import Header from './components/Header/Header';
import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor';
import TransitionRoutes from './routes/TransitionRoutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <Data>
          <Header />
          <ScrollToAnchor />
          <TransitionRoutes />
          <Footer />
        </Data>
      </HashRouter>
    </>
  );
}

export default App;
