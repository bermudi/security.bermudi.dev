// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content: "El enfoque proactivo de SecureGuard en materia de ciberseguridad ha transformado nuestra manera de gestionar datos sensibles. La experiencia de su equipo es inigualable.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    content: "El nivel de protección y tranquilidad que hemos recibido desde que nos asociamos con SecureGuard ha sido invaluable para nuestras operaciones.",
    author: "Michael Rodriguez",
    position: "CISO",
    company: "Global Finance Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    content: "Su programa de capacitación en seguridad ha mejorado significativamente la conciencia y la respuesta de nuestro equipo ante posibles amenazas.",
    author: "Emily Thompson",
    position: "Jefe de TI",
    company: "HealthTech Systems",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg relative"
    >
      <Quote className="w-10 h-10 text-blue-100 absolute top-6 left-6" />
      <div className="relative z-10">
        <p className="text-gray-600 mb-6 italic pl-8">{testimonial.content}</p>
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
            <p className="text-sm text-blue-600">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonios de Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escuche a nuestros clientes sobre su experiencia trabajando con SecureGuard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;