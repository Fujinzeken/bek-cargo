"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const fleetStats = [
  { value: 50, suffix: "+", label: "Active Trucks", icon: "🚛" },
  { value: 53, suffix: "'", label: "Dry Van Trailers", icon: "📦" },
  { value: 4, suffix: "+", label: "Years Running", icon: "📅" },
  { value: 24, suffix: "/7", label: "GPS Tracking", icon: "📡" },
];

export default function Fleet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="fleet"
      className="py-28 animated-gradient relative overflow-hidden"
      ref={ref}
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Floating shapes */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
                alt="BEK CARGO fleet of trucks"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-navy/60 to-transparent" />

              {/* Overlay stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">
                      Fleet Status
                    </div>
                    <div className="text-white/60 text-xs">
                      Real-time monitoring
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full pulse-dot" />
                    </div>
                    <span className="text-green-400 text-sm font-semibold">
                      All Units Active
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative border */}
            <div className="absolute -z-10 -top-3 -left-3 -right-3 -bottom-3 border border-white/10 rounded-3xl" />
          </motion.div>

          {/* Stats side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
              Our Fleet
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              Built for the
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light to-primary">
                Long Haul
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our modern fleet of 50+ trucks and 53&apos; dry van trailers is
              equipped with the latest GPS technology.{" "}
              <span className="text-white font-medium">
                Always tracked. Always safe. Always on time.
              </span>
            </p>

            {/* Stat cards - creative layout */}
            <div className="grid grid-cols-2 gap-4">
              {fleetStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glass rounded-2xl p-5 hover:bg-white/10 transition-all cursor-default group"
                >
                  <span className="text-2xl block mb-2">{stat.icon}</span>
                  <div className="text-3xl font-black text-white mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="w-6 h-0.5 bg-primary/40 rounded-full mt-3 group-hover:w-10 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider to next section */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z"
            fill="#ffffff"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
