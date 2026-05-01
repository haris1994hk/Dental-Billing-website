'use client';

import { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter a message');
      return;
    }

    setLoading(true);
    try {
      // Send to contact API via simple message submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || 'Inquiry',
          email: formData.email,
          message: formData.message,
          phoneNumber: 'From modal',
          date: new Date().toISOString().split('T')[0],
          time: new Date().toTimeString().split(' ')[0],
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 4000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50 backdrop-blur-sm">
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
                    <a href="mailto:haris@dentalbillingaid.com" className="text-white/90 hover:text-white transition">
                      haris@dentalbillingaid.com
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

            <h3 className="text-2xl font-bold text-black mb-2">Send us a Message</h3>
            <p className="text-sm text-gray-600 mb-6">We'll get back to you as soon as possible.</p>

            {submitted && (
              <div className="bg-green-50 border-2 border-green-400 text-green-800 px-5 py-4 rounded-lg mb-6">
                <div className="font-semibold mb-1">✓ Message Sent Successfully!</div>
                <p className="text-sm">We've received your message and a confirmation has been sent to <span className="font-semibold">{formData.email}</span>. Our team will contact you shortly.</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border-2 border-red-400 text-red-800 px-5 py-4 rounded-lg mb-6">
                <div className="font-semibold mb-1">⚠ Error</div>
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  disabled={loading || submitted}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b489b] text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@dentalpractice.com"
                  disabled={loading || submitted}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b489b] text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs or ask a question..."
                  disabled={loading || submitted}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b489b] text-gray-900 placeholder-gray-500 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-[#1b489b] text-white py-3 rounded-lg font-semibold hover:bg-[#0f2d5f] transition mt-6 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin">⟳</span> Sending...
                  </>
                ) : submitted ? (
                  <>
                    ✓ Sent!
                  </>
                ) : (
                  'Send Message'
                )}
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
