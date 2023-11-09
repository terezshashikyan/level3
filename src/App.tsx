import Footer from './components/Footer';
import Header from './components/Header';
import Auction from './pages/Auction';
import './App.scss';

function App() {
  return (
    <div className="App">
     <Header/>
     <Auction/>
     <Footer/>
    </div>
  );
}

export default App;
