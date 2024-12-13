import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our security experts to discuss your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">contact@secureguard.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">123 Security Ave, Cyber City, CS 12345</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
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
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
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
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
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
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;