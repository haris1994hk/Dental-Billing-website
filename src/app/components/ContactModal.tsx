'use client';

import { useState } from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Contact Info */}
          <div className="bg-gradient-to-br from-[#1b489b] to-[#0f2d5f] text-white p-8 flex flex-col justify-between">
            <div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition md:hidden"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl !text-white font-bold mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold !text-white text-lg mb-1">Call Us</h3>
                    <a href="tel:+16478888409" className="text-white/90 hover:text-white transition">
                      +1 (647) 888-8409
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold !text-white text-lg mb-1">Email</h3>
                    <a href="mailto:info@dentalbillingaid.com" className="text-white/90 hover:text-white transition">
                      info@dentalbillingaid.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold !text-white text-lg mb-1">Address</h3>
                    <p className="text-white/90">
                      4498 Main St Suite 4 #1107<br />
                      Buffalo, NY 14226<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                ⚡ We typically respond within 2 hours during business hours
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition hidden md:block"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b489b] text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@dentalpractice.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b489b] text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs or ask a question..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b489b] text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1b489b] text-white py-3 rounded-lg font-semibold hover:bg-[#0f2d5f] transition mt-6"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                We respect your privacy. Your information is secure with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
