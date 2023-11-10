import Auction from './pages/Auction';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.scss';

const App = () => 
 (
    <div className="App">
     <Header/>
     <Auction/>
     <Footer/>
    </div>
  );

export default App;
