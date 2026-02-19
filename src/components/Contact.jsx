"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: "📍",
      label: "Address",
      value: "9674 Waterford Pl Apt 104, Loveland, OH 45140",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "(543) 493-1023",
      href: "tel:+15434931023",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "dispatch@bek-cargo.com",
      href: "mailto:dispatch@bek-cargo.com",
    },
    {
      icon: "🕐",
      label: "Business Hours",
      value: "24/7 — Always Available",
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 bg-gray-50 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 diagonal-stripes" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary font-semibold text-sm uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05]">
            Request a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Quote
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-xl mx-auto">
            Need a freight quote? Our dispatch team responds around the clock.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="animated-gradient rounded-3xl p-8 text-white relative overflow-hidden h-full">
              {/* Dot grid overlay */}
              <div className="absolute inset-0 dot-grid opacity-30" />

              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2">Contact Info</h3>
                <p className="text-white/50 text-sm mb-8">
                  We&apos;re always just a call away
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-11 h-11 glass rounded-xl flex items-center justify-center text-lg shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-primary-light transition-colors font-medium text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium text-sm">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Online indicator */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                      <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full pulse-dot" />
                    </div>
                    <span className="text-sm text-white/50">
                      Dispatch is online now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              id="quote-form"
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your shipping needs..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all resize-none"
                />
              </div>

              <motion.button
                id="quote-submit-btn"
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-primary hover:bg-primary-dark text-white btn-glow shadow-lg shadow-primary/20"
                }`}
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
