import React from 'react';

const DataProtectionContent: React.FC = () => (
  <>
    <p className="text-gray-700 mb-8">
      La protección de datos es esencial para mantener la confianza de sus clientes y cumplir con las regulaciones.
      Nuestros servicios de protección de datos están diseñados para asegurar la confidencialidad, integridad y disponibilidad de su información.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Ofrecemos?</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8">
      <li><strong>Encriptación de Datos:</strong> Protección de datos en reposo y en tránsito mediante encriptación de grado militar.</li>
      <li><strong>Gestión de Acceso:</strong> Control de acceso basado en roles para garantizar que solo las personas autorizadas puedan acceder a la información.</li>
      <li><strong>Copias de Seguridad Seguras:</strong> Implementación de copias de seguridad regulares y seguras para la recuperación ante desastres.</li>
      <li><strong>Cumplimiento Normativo:</strong> Asesoramiento y soporte para cumplir con las regulaciones de protección de datos.</li>
      <li><strong>Auditorías de Seguridad:</strong> Evaluaciones periódicas de seguridad para identificar y corregir vulnerabilidades.</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué Elegirnos?</h2>
    <p className="text-gray-700 mb-8">
      Nuestro equipo de expertos en seguridad tiene una amplia experiencia en la protección de datos.
      Nos comprometemos a proporcionar soluciones de protección de datos efectivas y personalizadas para satisfacer sus necesidades específicas.
    </p>
  </>
);

export default DataProtectionContent;
