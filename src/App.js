
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
     <div className="col-lg-6 col-sm-12">
     <PictureCard/>
     </div>
     <div className="col-lg-6 col-sm-12">
     <About/>
     <Joke/>
     </div>
     
     </div>
    
     <Footer/>
    </div>
  );
}

export default App;
