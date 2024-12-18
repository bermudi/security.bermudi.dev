import React, { useState, lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Server, Cloud, Users, Terminal } from 'lucide-react';
import ServicePopup from './ServicePopup';

// Lazy load service content
const ThreatDetectionContent = lazy(() => import('../content/services/threat-detection'));
const DataProtectionContent = lazy(() => import('../content/services/data-protection'));
const NetworkSecurityContent = lazy(() => import('../content/services/network-security'));
const CloudSecurityContent = lazy(() => import('../content/services/cloud-security'));
const SecurityTrainingContent = lazy(() => import('../content/services/security-training'));
const PenetrationTestingContent = lazy(() => import('../content/services/penetration-testing'));

// Animation variants for consistent reuse
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const ServiceCard = ({ icon: Icon, title, description, onClick }: { 
  icon: any, 
  title: string, 
  description: string, 
  onClick: () => void 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      layout
      className="bg-white p-6 rounded-xl shadow-lg transition-all cursor-pointer will-change-transform"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const handleServicePopup = (event: CustomEvent<{ service: string }>) => {
      setSelectedService(event.detail.service);
    };

    window.addEventListener('openServicePopup', handleServicePopup as EventListener);
    return () => {
      window.removeEventListener('openServicePopup', handleServicePopup as EventListener);
    };
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Detección de Amenazas',
      description: 'Sistemas avanzados de detección y prevención de amenazas para proteger su infraestructura.',
      content: ThreatDetectionContent,
    },
    {
      icon: Lock,
      title: 'Protección de Datos',
      description: 'Soluciones integrales de protección de datos con encriptación de grado militar.',
      content: DataProtectionContent,
    },
    {
      icon: Server,
      title: 'Seguridad de la Red',
      description: 'Servicios de diseño e implementación de arquitectura de red segura.',
      content: NetworkSecurityContent,
    },
    {
      icon: Cloud,
      title: 'Seguridad en la Nube',
      description: 'Soluciones de seguridad nativas de la nube para infraestructuras modernas.',
      content: CloudSecurityContent,
    },
    {
      icon: Users,
      title: 'Capacitación en Seguridad',
      description: 'Programas de capacitación y certificación en concientización sobre seguridad para empleados.',
      content: SecurityTrainingContent,
    },
    {
      icon: Terminal,
      title: 'Pruebas de Penetración',
      description: 'Evaluaciones de seguridad integrales y pruebas de vulnerabilidad.',
      content: PenetrationTestingContent,
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones de seguridad integrales diseñadas para proteger su negocio 
            en el complejo panorama digital actual.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              onClick={() => setSelectedService(service.title)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {selectedService && (
          <ServicePopup
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            title={selectedService}
            content={
              <Suspense fallback={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center p-8"
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
                </motion.div>
              }>
                {React.createElement(
                  services.find(s => s.title === selectedService)?.content || (() => null)
                )}
              </Suspense>
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
