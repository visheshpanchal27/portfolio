import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { t, labels } from '../utils/i18n';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        'service_rad30ti',
        'template_6sww8lv',
        formData,
        'u92ZvICoQgvFk7T10'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'visheshpanchal864@gmail.com', link: 'mailto:visheshpanchal864@gmail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value:'Ahmedabad India', link: null },
    { icon: 'fas fa-briefcase', label: 'Status', value: 'Available for opportunities', link: null }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/visheshpanchal27', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/vishesh-panchal-144281353', label: 'LinkedIn', color: 'hover:text-gray-900' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/visheshpanchal', label: 'Twitter', color: 'hover:text-gray-900' }
  ];

  return (
    <section id="contact" className="py-12 xs:py-16 sm:py-20 px-4 xs:px-6 bg-white dark:bg-black relative overflow-hidden safe-area-inset">
      <div className="container mx-auto max-w-6xl relative z-10 responsive-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fluid-text-3xl xs:fluid-text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-3 xs:mb-4 elegant-heading">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-black/90 dark:backdrop-blur-xl p-8 rounded-2xl shadow-xl dark:shadow-luxury border-2 border-gray-300 dark:border-white/10">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 aspect-square bg-gradient-to-br from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white rounded-full flex items-center justify-center text-white dark:text-black shadow-lg dark:shadow-premium flex-shrink-0">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="text-black dark:text-white font-medium hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-black dark:text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-white/10">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-200 dark:bg-white/5 dark:border dark:border-white/10 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-110 dark:shadow-luxury"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-black/90 dark:backdrop-blur-xl p-8 rounded-2xl shadow-xl dark:shadow-luxury border-2 border-gray-300 dark:border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">{t('name', labels.name)}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-50 dark:bg-black/60 border-2 border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white/30 focus:border-transparent outline-none transition-all duration-300 text-black dark:text-white dark:shadow-inner"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2">{t('email', labels.email)}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-50 dark:bg-black/60 border-2 border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white/30 focus:border-transparent outline-none transition-all duration-300 text-black dark:text-white dark:shadow-inner"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-50 dark:bg-black/60 border-2 border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white/30 focus:border-transparent outline-none transition-all duration-300 text-black dark:text-white dark:shadow-inner"
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">{t('message', labels.message)}</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-50 dark:bg-black/60 border-2 border-gray-300 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white/30 focus:border-transparent outline-none transition-all duration-300 resize-none text-black dark:text-white dark:shadow-inner"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-lg text-red-800 dark:text-red-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-br from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white text-white dark:text-black hover:opacity-90 py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl dark:shadow-premium dark:hover:shadow-premium-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;