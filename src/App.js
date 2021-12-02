
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PictureCard from './components/PictureCard';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';
import Joke from './components/Joke';

function App() {
  return (
    <div className="container App">
     <Header/>
     <Skills/>
     <div className="row">
     <PictureCard/>
     <div className="col">
     <About/>
     <Joke/>
     </div>
     
     </div>
    
     <Footer/>
    </div>
  );
}

export default App;
