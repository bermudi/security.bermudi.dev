import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThreatDetectionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Detección de Amenazas</h1>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Sistemas avanzados de detección y prevención de amenazas para proteger su infraestructura en el complejo panorama digital actual.
                    </p>
                </div>

                <div class="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <Shield class="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-900">¿Qué Ofrecemos?</h2>
                    </div>
                    <ul class="space-y-4 text-gray-700">
                        <li class="flex items-center">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span><strong>Monitoreo Continuo:</strong> Vigilancia constante de su red y sistemas para detectar actividades sospechosas.</span>
                        </li>
                        <li class="flex items-center">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span><strong>Análisis de Comportamiento:</strong> Identificación de patrones de comportamiento anómalos que podrían indicar una amenaza.</span>
                        </li>
                        <li class="flex items-center">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span><strong>Alertas en Tiempo Real:</strong> Notificaciones inmediatas sobre posibles incidentes de seguridad.</span>
                        </li>
                        <li class="flex items-center">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span><strong>Integración con Herramientas de Seguridad:</strong> Compatibilidad con sus herramientas de seguridad existentes para una protección integral.</span>
                        </li>
                        <li class="flex items-center">
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            <span><strong>Informes Detallados:</strong> Análisis exhaustivos de incidentes de seguridad para mejorar su postura de seguridad.</span>
                        </li>
                    </ul>
                </div>

                <div class="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">¿Por Qué Elegirnos?</h2>
                    <p class="text-gray-700">
                        Nuestro equipo de expertos en seguridad utiliza las últimas tecnologías y metodologías para garantizar la protección de su infraestructura.
                        Nos comprometemos a proporcionar soluciones de detección de amenazas efectivas y personalizadas para satisfacer sus necesidades específicas.
                    </p>
                </div>

                <div class="text-center">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contáctenos</h2>
                    <p class="text-gray-700 mb-6">
                        Si desea obtener más información sobre nuestros servicios de detección de amenazas, no dude en contactarnos.
                    </p>
                    <a href="/contact" class="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Contactar Ahora
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ThreatDetectionModal;
