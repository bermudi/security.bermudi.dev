// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Server } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  icon: any;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Financial Institution Security Overhaul',
    description: 'Implemented comprehensive security measures for a leading bank, protecting over $50B in assets.',
    icon: Shield,
    results: ['85% reduction in security incidents', '99.99% uptime maintained', 'Zero data breaches'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
  },
  {
    title: 'Healthcare Data Protection',
    description: 'Secured patient data for a network of hospitals, ensuring HIPAA compliance.',
    icon: Lock,
    results: ['100% HIPAA compliance achieved', 'Protected 1M+ patient records', 'Reduced audit time by 50%'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Cloud Infrastructure Security',
    description: 'Modernized cloud security for a Fortune 500 tech company.',
    icon: Server,
    results: ['40% cost reduction', '90% faster threat detection', 'Zero downtime migration'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  }
];

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
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
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <study.icon className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{study.description}</p>
        <div className="space-y-2">
          {study.results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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

const CaseStudies = () => {
  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses strengthen their security posture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;