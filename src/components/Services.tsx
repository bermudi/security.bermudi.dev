// Import necessary dependencies
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Server, Cloud, Users, Terminal } from 'lucide-react';

// Define the ServiceCard component
const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  // Use the useInView hook to detect when the component is visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    // Use motion.div for animations
    <motion.div
      ref={ref} // Attach the ref for intersection observer
      initial={{ opacity: 0, y: 50 }} // Initial state: invisible and 50px below
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
      transition={{ duration: 0.5 }} // Animation duration
      whileHover={{ scale: 1.05 }} // Scale up slightly on hover
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
    >
      {/* Icon container */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Define the main Services component
const Services = () => {
  // Array of service objects
  const services = [
    {
      icon: Shield,
      title: 'Detección de Amenazas',
      description: 'Sistemas avanzados de detección y prevención de amenazas para proteger su infraestructura.',
    },
    {
      icon: Lock,
      title: 'Protección de Datos',
      description: 'Soluciones integrales de protección de datos con encriptación de grado militar.',
    },
    {
      icon: Server,
      title: 'Seguridad de la Red',
      description: 'Servicios de diseño e implementación de arquitectura de red segura.',
    },
    {
      icon: Cloud,
      title: 'Seguridad en la Nube',
      description: 'Soluciones de seguridad nativas de la nube para infraestructuras modernas.',
    },
    {
      icon: Users,
      title: 'Capacitación en Seguridad',
      description: 'Programas de capacitación y certificación en concientización sobre seguridad para empleados.',
    },
    {
      icon: Terminal,
      title: 'Pruebas de Penetración',
      description: 'Evaluaciones de seguridad integrales y pruebas de vulnerabilidad.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated section title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones de seguridad integrales diseñadas para proteger su negocio en el complejo panorama digital actual.
          </p>
        </motion.div>

        {/* Grid layout for service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through services array and render ServiceCard for each */}
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
