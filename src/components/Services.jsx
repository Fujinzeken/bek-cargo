"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Dry Van Shipping",
    description:
      "Industry-standard 53' dry van trailers for safe transport of general freight, consumer goods, and packaged products across all 48 states.",
    features: ["53' trailers", "Temperature-safe", "Sealed cargo"],
  },
  {
    number: "02",
    title: "Nationwide Coverage",
    description:
      "Coast-to-coast freight solutions covering all major routes across the continental United States. No destination is too far for BEK CARGO.",
    features: ["48 states", "Major routes", "Cross-country"],
  },
  {
    number: "03",
    title: "Real-Time GPS Tracking",
    description:
      "24/7 GPS tracking on every truck in our fleet. Know exactly where your shipment is at any moment with live updates and ETA notifications.",
    features: ["Live updates", "ETA alerts", "Route visibility"],
  },
  {
    number: "04",
    title: "Safe & Insured",
    description:
      "Full liability, general, and cargo insurance coverage. Your freight is protected with comprehensive insurance at every step of the journey.",
    features: ["Liability", "Cargo insurance", "Full coverage"],
  },
  {
    number: "05",
    title: "24/7 Dispatch",
    description:
      "Round-the-clock dispatch and communication. Our team is always available to coordinate, update, and respond to your shipment needs.",
    features: ["Always on", "Live support", "Fast response"],
  },
  {
    number: "06",
    title: "FMCSA Compliant",
    description:
      "Fully licensed and DOT compliant. We meet all federal safety standards with active USDOT and MC authority for interstate operations.",
    features: ["USDOT active", "MC authority", "DOT compliant"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-28 bg-gray-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 diagonal-stripes" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary font-semibold text-sm uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Services
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            End-to-end trucking solutions designed for reliability, safety, and
            speed.
          </p>
        </motion.div>

        {/* Cards - creative staggered grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 * i,
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
              }}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-3xl p-8 transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 cursor-default relative overflow-hidden ${
                i === 1 ? "lg:-mt-4" : i === 4 ? "lg:-mt-4" : ""
              }`}
            >
              {/* Number watermark */}
              <span className="absolute -top-4 -right-2 text-8xl font-black text-gray-50 group-hover:text-primary/5 transition-colors pointer-events-none select-none">
                {service.number}
              </span>

              {/* Red accent line */}
              <div className="w-10 h-1 bg-primary rounded-full mb-6 group-hover:w-16 transition-all duration-300" />

              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm relative z-10">
                {service.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="text-xs font-medium bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full group-hover:bg-primary/5 group-hover:text-primary transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
