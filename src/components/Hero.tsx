// Import necessary dependencies
import { motion } from 'framer-motion'; // For animations
import { Shield, Lock, Server } from 'lucide-react'; // Icons for our features

// Define the Hero component
const Hero = () => {
  // Function to handle scrolling to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const contactSection = document.getElementById('services');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Main container with a gradient background and full viewport height
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Background image container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image with reduced opacity for overlay effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main text content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8 }} // Animation duration
          className="text-center"
        >
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Asegurando su Futuro Digital
          </h1>
          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Soluciones de ciberseguridad de nivel empresarial diseñadas para proteger su negocio
            en un panorama digital en constante evolución.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary CTA button with hover and tap animations */}
            <motion.button
              whileHover={{ scale: 1.05 }} // Slight scale up on hover
              whileTap={{ scale: 0.95 }} // Slight scale down on tap
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              onClick={scrollToContact}
            >
              Estoy bajo ataque
            </motion.button>
            {/* Secondary CTA button with similar animations */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              onClick={scrollToServices}
            >
              Más Información
            </motion.button>
          </div>
        </motion.div>

        {/* Feature cards section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Start invisible and below
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8, delay: 0.4 }} // Animation with delay
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
        >
          {/* Map through feature data to create cards */}
          {[
            { icon: Shield, title: 'Protección Avanzada', desc: 'Sistemas de seguridad multicapa' },
            { icon: Lock, title: 'Encriptación de Datos', desc: 'Protocolos de encriptación de extremo a extremo' },
            { icon: Server, title: 'Seguridad en la Nube', desc: 'Infraestructura de nube segura' },
          ].map(({ icon: Icon, title, desc }) => (
            // Individual feature card
            <div key={title} className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <Icon className="w-12 h-12 mb-4" /> {/* Feature icon */}
              <h3 className="text-xl font-semibold mb-2">{title}</h3> {/* Feature title */}
              <p className="text-gray-300 text-center">{desc}</p> {/* Feature description */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;