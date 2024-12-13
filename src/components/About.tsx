// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Award, Building } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Acerca de SecureGuard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con más de una década de experiencia en ciberseguridad, hemos protegido a miles de empresas de las amenazas digitales en evolución.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard icon={Shield} value="500+" label="Clientes Protegidos" />
          <StatCard icon={Users} value="50+" label="Expertos en Seguridad" />
          <StatCard icon={Award} value="99.9%" label="Tasa de Éxito" />
          <StatCard icon={Building} value="15+" label="Años de Experiencia" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
              alt="Centro de Operaciones de Seguridad"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir SecureGuard?
            </h3>
            <p className="text-gray-600 mb-6">
              Combinamos tecnología de vanguardia con inteligencia humana experta para ofrecer soluciones de seguridad integrales que protegen su negocio las 24 horas del día, los 7 días de la semana.
            </p>
            <ul className="space-y-4">
              {[
                'Monitoreo y detección de amenazas las 24 horas',
                'Soluciones de seguridad personalizadas para su negocio',
                'Equipo experto de profesionales de seguridad certificados',
                'Búsqueda proactiva de amenazas y evaluación de vulnerabilidades',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
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

export default About;