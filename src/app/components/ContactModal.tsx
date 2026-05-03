'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  if (!isOpen) return null;

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

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mt-20 sm:mt-0 max-h-[calc(100vh-5rem)] sm:max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-0 min-h-0">
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

          {/* Right - Info */}
          <div className="p-8 relative flex items-start justify-center bg-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition hidden md:block"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
            <div className="w-full max-w-sm text-left pt-6 md:pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">Book a Demo</p>
              <h3 className="text-3xl font-bold text-[#01162E] mb-3 leading-tight">We'll help you get started</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">Share your details and our team will contact you to walk through the platform, pricing, and the best setup for your practice.</p>

              <div className="space-y-3">
                <div className="rounded-xl border border-blue-100 px-4 py-3">
                  <p className="text-sm font-semibold text-[#01162E] mb-1">Fast Response</p>
                  <p className="text-sm text-gray-700">We typically reply within 2 business hours.</p>
                </div>
                <div className="rounded-xl border border-blue-100 px-4 py-3">
                  <p className="text-sm font-semibold text-[#01162E] mb-1">Direct Support</p>
                  <p className="text-sm text-gray-700">Email or call us for a guided demo and follow-up.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}



