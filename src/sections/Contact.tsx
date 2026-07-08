import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionHeader } from '../components/SectionHeader';
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('error', 'Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      if (formRef.current) {
        // Send email via EmailJS (placeholders used here; user will replace with their own keys)
        // Service ID, Template ID, Public Key
        // Example template usage:
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        
        // For production ready setup, we use standard service parameters or fallback simulation.
        // We will add a fallback simulation that acts beautifully if EmailJS credentials are not set,
        // and if they are set, executes them.
        
        const serviceId = 'service_default';
        const templateId = 'template_contact';
        const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace this with your public key

        if (publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
          // If public key is not configured, simulate successful API call after 1.5 seconds.
          // This keeps the site fully functional for preview!
          await new Promise((resolve) => setTimeout(resolve, 1500));
          showNotification('success', 'Message simulated successfully! (Set up your EmailJS keys in Contact.tsx to receive actual messages).');
        } else {
          await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
          showNotification('success', 'Thank you! Your message has been sent successfully.');
        }

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (err: any) {
      console.error('EmailJS error:', err);
      showNotification('error', 'Failed to send message. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background blur decorative element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Get in Touch" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-sans">Let's talk about your next project!</h3>
              <p className="text-lightGray/70 text-sm md:text-base leading-relaxed">
                Whether you have an internship opportunity, a project proposal, or just want to connect, feel free to drop a message. I'm always open to discussing new technical challenges and collaborative work.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-lightGray/50 font-bold tracking-wider font-mono">Email Me</h4>
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-white hover:text-secondary font-medium transition-colors">
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <FaPhone size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-lightGray/50 font-bold tracking-wider font-mono">Call Me</h4>
                  <a href={`tel:${portfolioData.personalInfo.phone}`} className="text-white hover:text-secondary font-medium transition-colors">
                    {portfolioData.personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase text-lightGray/50 font-bold tracking-wider font-mono">Location</h4>
                  <span className="text-white font-medium">
                    {portfolioData.personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono font-semibold text-lightGray/70">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-white/10 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-white rounded-lg p-3 outline-none text-sm transition-all placeholder:text-lightGray/35"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-semibold text-lightGray/70">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-white/10 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-white rounded-lg p-3 outline-none text-sm transition-all placeholder:text-lightGray/35"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono font-semibold text-lightGray/70">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  className="w-full bg-background/50 border border-white/10 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-white rounded-lg p-3 outline-none text-sm transition-all placeholder:text-lightGray/35"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono font-semibold text-lightGray/70">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message goes here..."
                  className="w-full bg-background/50 border border-white/10 focus:border-primary/80 focus:ring-1 focus:ring-primary/80 text-white rounded-lg p-3 outline-none text-sm transition-all resize-none placeholder:text-lightGray/35"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold bg-primary hover:bg-primary/95 text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-primary/20 text-sm disabled:opacity-55"
              >
                {loading ? 'Sending Message...' : 'Send Message'}
                <FaPaperPlane size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Interactive Notification Alert */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-50 px-5 py-4 rounded-xl flex items-center gap-3 border shadow-2xl ${
              notification.type === 'success'
                ? 'bg-slate-900 border-accent/35 text-white'
                : 'bg-slate-900 border-red-500/35 text-white'
            }`}
          >
            {notification.type === 'success' ? (
              <FaCheckCircle className="text-accent text-xl flex-shrink-0" />
            ) : (
              <FaExclamationTriangle className="text-red-500 text-xl flex-shrink-0" />
            )}
            <div className="text-sm font-sans pr-2 font-medium">{notification.message}</div>
            <button
              onClick={() => setNotification(null)}
              className="text-lightGray/40 hover:text-white text-xs ml-2"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Contact;
