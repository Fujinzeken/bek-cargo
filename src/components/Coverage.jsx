"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const coveragePoints = [
  {
    label: "Coast to Coast",
    desc: "Full coverage across all 48 contiguous states",
    icon: "🌎",
  },
  {
    label: "24/7 Dispatch",
    desc: "Round-the-clock coordination and communication",
    icon: "📞",
  },
  {
    label: "Real-Time Updates",
    desc: "Live GPS tracking on every shipment",
    icon: "📍",
  },
];

export default function Coverage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-white relative overflow-hidden" ref={ref}>
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
            Coverage Area
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05]">
            Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              the USA
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-xl mx-auto">
            From the East Coast to the West Coast — zero compromises.
          </p>
        </motion.div>

        {/* Map + Info */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-3 relative"
          >
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-gray-100">
              {/* Animated dot pattern inside map area */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #e63946 0.5px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />

              <svg
                viewBox="0 0 960 600"
                className="w-full h-auto relative z-10"
                fill="none"
              >
                <path
                  d="M 130,100 L 230,90 330,80 430,75 530,70 630,75 730,85 820,100 850,120 870,170 880,230 870,280 850,340 830,380 810,410 790,430 760,440 720,445 680,440 650,435 610,440 570,450 530,455 500,450 460,440 420,435 380,440 340,450 300,460 260,455 220,440 180,420 150,390 130,350 120,300 115,250 120,200 125,150 Z"
                  className="fill-white stroke-gray-200"
                  strokeWidth="2"
                />
                {/* Animated route lines */}
                <motion.path
                  d="M 200,300 Q 400,250 500,280 Q 600,310 800,250"
                  stroke="#E63946"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 250,200 Q 450,350 750,300"
                  stroke="#E63946"
                  strokeWidth="2"
                  strokeDasharray="6 3"
                  fill="none"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
                />
                {/* City dots */}
                {[
                  { x: 780, y: 220, label: "NY" },
                  { x: 200, y: 320, label: "LA" },
                  { x: 500, y: 300, label: "OH" },
                  { x: 600, y: 250, label: "IL" },
                  { x: 350, y: 350, label: "TX" },
                ].map((city, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="15"
                      className="fill-primary"
                      opacity="0.1"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
                    />
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="6"
                      className="fill-primary"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
                    />
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="2"
                      className="fill-white"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 1.1 + i * 0.15, duration: 0.3 }}
                    />
                    <motion.text
                      x={city.x}
                      y={city.y - 22}
                      textAnchor="middle"
                      className="fill-gray-500 font-bold"
                      style={{ fontSize: "11px" }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.2 + i * 0.15 }}
                    >
                      {city.label}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* HQ badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-primary rounded-full pulse-dot" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    HQ: Loveland, OH
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Coverage info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {coveragePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                whileHover={{ x: 4, scale: 1.02 }}
                className="flex gap-4 p-5 bg-gray-50 rounded-2xl hover:shadow-lg transition-all border border-transparent hover:border-gray-100 cursor-default group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors text-xl">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {point.label}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{point.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl font-bold transition-all btn-glow hover:-translate-y-0.5 mt-4 group"
            >
              Request a Route Quote
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
