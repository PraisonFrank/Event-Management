import React from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import CTA from './sections/CTA';
import Events from './sections/Events';
import Hero from './sections/Hero';


function App() {
 return ( 
     <div >
    <Navbar/>    
    <Hero/>
    <About/>
    <Events/>
    <CTA/>
           
    </div>
   );
}

export default App;