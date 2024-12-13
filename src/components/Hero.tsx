// import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Asegurando su Futuro Digital
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Soluciones de ciberseguridad de nivel empresarial diseñadas para proteger su negocio
            en un panorama digital en constante evolución.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Comenzar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Más Información
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
        >
          {[
            { icon: Shield, title: 'Protección Avanzada', desc: 'Sistemas de seguridad multicapa' },
            { icon: Lock, title: 'Encriptación de Datos', desc: 'Protocolos de encriptación de extremo a extremo' },
            { icon: Server, title: 'Seguridad en la Nube', desc: 'Infraestructura de nube segura' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <Icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-center">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;