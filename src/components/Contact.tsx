// Import necessary dependencies
import { useState } from 'react'; // For managing form state
import { motion } from 'framer-motion'; // For animations
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Icons for UI

// Define the Contact component
const Contact = () => {
  // Initialize form state using useState hook
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Log form data (in a real app, you'd send this to a server)
    console.log('Form submitted:', formState);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Update form state, spreading the existing state and updating the changed field
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Render the component
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Póngase en contacto con nuestros expertos en seguridad para discutir sus necesidades.
          </p>
        </motion.div>

        {/* Grid layout for contact information and form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Ponte en Contacto</h3>
            <div className="space-y-6">
              {/* Email contact info */}
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">Correo Electrónico</h4>
                  <p className="text-gray-600">contact@CipherShield.com</p>
                </div>
              </div>
              {/* Phone contact info */}
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              {/* Address contact info */}
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">Ubicación</h4>
                  <p className="text-gray-600">123 Security Ave, Cyber City, CS 12345</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              {/* Email input field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              {/* Company input field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Compañía
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              {/* Submit button with animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Export the Contact component as the default export
export default Contact;