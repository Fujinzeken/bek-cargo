"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const complianceData = [
  { label: "USDOT Number", value: "3630045" },
  { label: "MC Number", value: "1243312" },
];

const insurances = [
  { type: "Liability", icon: "🛡️" },
  { type: "General", icon: "📋" },
  { type: "Cargo", icon: "📦" },
];

export default function Compliance() {
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
            Licensed & Insured
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05]">
            Compliance &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Trust
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-xl mx-auto">
            Fully licensed, DOT compliant, and insured — your freight is in
            safe, authorized hands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Licensing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/10 transition-all cursor-default"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg">
                🏛️
              </div>
              <h3 className="text-lg font-black text-gray-900">
                Federal Authority
              </h3>
            </div>

            <div className="space-y-3">
              {complianceData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <span className="text-gray-500 font-medium text-sm">
                    {item.label}
                  </span>
                  <span className="font-black text-gray-900 tracking-wide font-mono">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full pulse-dot" />
                  </div>
                  <span className="text-green-700 font-medium text-sm">
                    FMCSA Status
                  </span>
                </div>
                <span className="font-bold text-green-700 text-sm">
                  Active & Authorized
                </span>
              </div>
            </div>
          </motion.div>

          {/* Insurance card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/10 transition-all cursor-default"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-lg">
                💰
              </div>
              <h3 className="text-lg font-black text-gray-900">
                Insurance Coverage
              </h3>
            </div>

            <div className="space-y-3">
              {insurances.map((ins, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl group hover:bg-primary/5 transition-colors"
                >
                  <span className="text-xl">{ins.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">
                      {ins.type} Insurance
                    </div>
                    <div className="text-xs text-gray-400">
                      Full coverage active
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* FMCSA Score */}
            <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">
                  FMCSA Crash Rate
                </span>
                <span className="text-primary font-black">22.26%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "22.26%" } : {}}
                  transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Below national average — committed to safety
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
