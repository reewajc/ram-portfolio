import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import PictureCard from './PictureCard';
import Skills from './Skills';
import Footer from './Footer';
import Jokes from './Joke';
import CustomNavbar from './CustomNavbar';
import Products from './Products';
import About from './About';


function Home() {
    return (
           <div className="container App">
     <Header/>
     <CustomNavbar/>
      <pre/>
     <Skills/>
     <div className="row">
     <div className="col-lg-6 col-sm-12">
     <PictureCard/>
     </div>
     <div className="col-lg-6 col-sm-12">
      <About/>
     <Jokes/>
    
     </div>
     <Products/>
     
     </div>
    
     <Footer/>
    </div>
    )
}

export default Home
