"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: "🛡️",
      title: "Safe Handling",
      desc: "Every load secured & insured",
    },
    { icon: "📡", title: "Live Tracking", desc: "24/7 GPS on every truck" },
    { icon: "🇺🇸", title: "Coast to Coast", desc: "All 48 contiguous states" },
    { icon: "⚡", title: "Always On", desc: "Round-the-clock dispatch" },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 diagonal-stripes" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side - creative layout */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="BEK CARGO logistics operations at loading dock"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                className="absolute -top-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-4xl font-black leading-none">4+</div>
                <div className="text-sm font-medium text-white/80 mt-1">
                  Years of
                  <br />
                  Excellence
                </div>
              </motion.div>

              {/* Floating stat card bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full pulse-dot" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      50+ Trucks Active
                    </div>
                    <div className="text-xs text-gray-500">All GPS tracked</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative red border accent */}
              <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 border-2 border-primary/20 rounded-3xl" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary font-semibold text-sm uppercase tracking-wider rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              About Us
            </motion.span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mt-6 mb-6 leading-[1.05]">
              From Dispatch
              <br />
              to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark">
                Destination
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Founded in 2021, BEK CARGO INC has rapidly grown into a trusted
              name in American freight transportation. With a fleet of over 50
              trucks operating coast to coast, we deliver reliability that
              businesses depend on.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Our mission is to become a leading transportation provider known
              for reliability, safety, and excellence —{" "}
              <span className="text-gray-900 font-semibold">
                driving progress across every mile we serve.
              </span>
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group bg-gray-50 hover:bg-white hover:shadow-lg rounded-2xl p-4 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default"
                >
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <span className="font-bold text-gray-900 text-sm block">
                    {item.title}
                  </span>
                  <span className="text-gray-400 text-xs">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
