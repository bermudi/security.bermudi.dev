// Import necessary dependencies
// import React from 'react'; // This import is commented out as it's not needed in newer React versions
import { motion } from 'framer-motion'; // For animations
import { useInView } from 'react-intersection-observer'; // For detecting when elements are in view
import { Shield, Users, Award, Building } from 'lucide-react'; // Icons for the stats

// StatCard component: Displays a single statistic with an icon, value, and label
const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => {
  // Use the useInView hook to detect when the component is visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    // Animate the card when it comes into view
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }} // Initial state: invisible and small
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }} // Animate to full opacity and size when in view
      transition={{ duration: 0.5 }} // Animation duration
      className="text-center"
    >
      {/* Icon container */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      {/* Statistic value */}
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      {/* Statistic label */}
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

// Main About component
const About = () => {
  // Use the useInView hook for the main section
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated section title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate to full opacity and correct position when in view
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Acerca de CipherShield Security</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con más de una década de experiencia en ciberseguridad, he protegido a docenas de empresas de las amenazas digitales en evolución.
          </p>
        </motion.div>

        {/* Grid of StatCard components */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard icon={Shield} value="50+" label="Clientes Protegidos" />
          <StatCard icon={Users} value="24/7" label="Monitoreo Continuo" />
          <StatCard icon={Award} value="Servicio VIP" label="Excepcional Servicio Personalizado" />
          <StatCard icon={Building} value="10+" label="Años de Experiencia" />
        </div>

        {/* Two-column layout for image and text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Animated image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start invisible and to the left
            whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and correct position when in view
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
              alt="Centro de Operaciones de Seguridad"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right column: Animated text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Start invisible and to the right
            whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and correct position when in view
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir CipherShield Security?
            </h3>
            <p className="text-gray-600 mb-6">
            Su seguridad empresarial garantizada mediante la perfecta integración de sistemas avanzados y personal especializado, operando permanentemente para asegurar la continuidad y protección de sus activos más valiosos en un entorno empresarial cada vez más desafiante.
            </p>
            {/* List of features with animated list items */}
            <ul className="space-y-4">
              {[
                'Monitoreo y detección de amenazas las 24 horas',
                'Soluciones de seguridad personalizadas para su negocio',
                'Experto en seguridad certificado',
                'Búsqueda proactiva de amenazas y evaluación de vulnerabilidades',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }} // Start invisible and slightly to the right
                  whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and correct position when in view
                  transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger the animations
                  className="flex items-center text-gray-700"
                >
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Export the About component as the default export
export default About;
