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
    title: 'Caja Popular Mexicana (2023-2024)',
    description: 'La cooperativa financiera más grande de México enfrentó un devastador ataque de tipo troyano que paralizó sus operaciones.',
    icon: Lock,
    results: [
      'Más de 3.3 millones de socios afectados',
      'Servicios SPEI y red de cajeros interrumpidos',
      '11 meses para recuperación completa',
      'Control del 37.7% de activos bancarios cooperativos'
    ],
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80'
  },
  {
    title: 'Grupo Aeroportuario OMA (2024)',
    description: 'El operador de 13 aeropuertos sufrió un sofisticado ataque de ransomware que afectó múltiples sistemas.',
    icon: Server,
    results: [
      '2.2 TB de información sensible comprometida',
      'Filtración de registros financieros y datos de empleados',
      'Implementación exitosa de sistemas de respaldo',
      'Resistencia al pago de rescate'
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80'
  },
  {
    title: 'PEMEX (2019)',
    description: 'La empresa petrolera estatal mexicana experimentó un importante ataque de ransomware que paralizó sus sistemas.',
    icon: Shield,
    results: [
      'Rescate exigido de 565 Bitcoin ($5 millones)',
      'Comunicaciones afectadas durante semanas',
      'Ransomware DoppelPaymer identificado',
      'Operaciones manuales durante la recuperación'
    ],
    image: 'https://images.unsplash.com/photo-1594010907349-76a19ff13623?auto=format&fit=crop&q=80'
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Principales Ciberataques en México</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos reales que demuestran cómo los ciberdelincuentes han atacado exitosamente algunas de las instituciones más grandes de México.
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