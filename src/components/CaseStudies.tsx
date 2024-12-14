// import React from 'react';  // This import is commented out as it's not needed in newer React versions
import { motion } from 'framer-motion';  // Import motion component for animations
import { useInView } from 'react-intersection-observer';  // Import hook to detect when element is in view
import { Shield, Lock, Server } from 'lucide-react';  // Import icons for case studies

// Define the structure of a case study
interface CaseStudy {
  title: string;
  description: string;
  icon: any;  // This could be more strictly typed
  results: string[];
  image: string;
}

// Array of case studies data
const caseStudies: CaseStudy[] = [
  {
    title: 'Reestructuración de la Seguridad de una Institución Financiera',
    description: 'Implementamos medidas de seguridad integrales para un banco líder, protegiendo más de $50 mil millones en activos.',
    icon: Shield,
    results: ['Reducción del 85% en incidentes de seguridad', 'Se mantuvo un tiempo de actividad del 99.99%', 'Cero violaciones de datos'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  {
    title: 'Protección de Datos en el Sector Salud',
    description: 'Aseguramos los datos de pacientes para una red de hospitales, garantizando el cumplimiento de HIPAA.',
    icon: Lock,
    results: ['Cumplimiento del 100% de HIPAA', 'Protección de más de 1 millón de registros de pacientes', 'Reducción del tiempo de auditoría en un 50%'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Seguridad de la Infraestructura en la Nube',
    description: 'Modernizamos la seguridad en la nube para una empresa tecnológica Fortune 500.',
    icon: Server,
    results: ['Reducción de costos del 40%', 'Detección de amenazas un 90% más rápida', 'Migración sin tiempo de inactividad'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  }
];

// Component to render individual case study cards
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  // Use intersection observer to trigger animation when card comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,  // Only trigger the animation once
    threshold: 0.1,  // Trigger when 10% of the element is in view
  });

  return (
    // Animate the card when it comes into view
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  // Start with 0 opacity and 50px below
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}  // Animate to full opacity and original position when in view
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Image section */}
      <div className="h-48 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      {/* Content section */}
      <div className="p-6">
        {/* Title with icon */}
        <div className="flex items-center mb-4">
          <study.icon className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
        </div>
        {/* Description */}
        <p className="text-gray-600 mb-4">{study.description}</p>
        {/* Results */}
        <div className="space-y-2">
          {study.results.map((result, index) => (
            // Animate each result item
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}  // Start with 0 opacity and 20px to the left
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}  // Animate to full opacity and original position when in view
              transition={{ duration: 0.3, delay: index * 0.1 }}  // Stagger the animation of each item
              className="flex items-center text-sm text-gray-600"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              {result}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main component to render all case studies
const CaseStudies = () => {
  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animate the heading when it comes into view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos de Estudio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ejemplos del mundo real de cómo hemos ayudado a las empresas a fortalecer su postura de seguridad.
          </p>
        </motion.div>

        {/* Grid to display case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the CaseStudies component as the default export
export default CaseStudies;