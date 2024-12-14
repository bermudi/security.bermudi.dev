// Import all the necessary components for our app
import Hero from './Hero';
import Services from './Services';
import About from './About';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import Contact from './Contact';

// Define the main App component
function App() {
  return (
    // Wrapper div for the entire application
    // min-h-screen ensures the app takes at least the full height of the viewport
    // bg-gray-50 sets a light gray background color
    <div className="min-h-screen bg-gray-50">
      {/* Render each section of the website in order */}
      <Hero /> {/* Landing section */}
      <Services /> {/* Services offered section */}
      <About /> {/* About the company section */}
      <CaseStudies /> {/* Showcase of previous work */}
      <Testimonials /> {/* Customer reviews section */}
      <Contact /> {/* Contact form or information */}
    </div>
  );
}

// Export the App component as the default export
export default App;