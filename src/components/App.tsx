// import React from 'react';
// import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;