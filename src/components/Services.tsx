// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Server, Cloud, Users, Terminal } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
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
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention systems to protect your infrastructure.',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data protection solutions with military-grade encryption.',
    },
    {
      icon: Server,
      title: 'Network Security',
      description: 'Secure network architecture design and implementation services.',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Cloud-native security solutions for modern infrastructure.',
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Employee security awareness training and certification programs.',
    },
    {
      icon: Terminal,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments and vulnerability testing.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to protect your business
            in today's complex digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;