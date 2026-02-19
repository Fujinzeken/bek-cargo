"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

const stats = [
  { value: 50, suffix: "+", label: "Active Trucks" },
  { value: 48, suffix: "", label: "States Covered" },
  { value: 24, suffix: "/7", label: "Live Tracking" },
  { value: 4, suffix: "+", label: "Years Strong" },
];

export default function Hero() {
  return (
    <>
      {/* SVG clip-path definition for wavy bottom */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.88 C0.92,0.92 0.83,0.96 0.75,0.95 C0.67,0.94 0.58,0.9 0.5,0.92 C0.42,0.94 0.33,0.98 0.25,0.97 C0.17,0.96 0.08,0.92 0,0.9 Z" />
          </clipPath>
        </defs>
      </svg>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          clipPath: "url(#hero-wave-clip)",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        {/* Creative gradient overlay - red tint on right */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Animated dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-white/5 rounded-full animate-float-fast" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left content - spans 7 cols */}
            <div className="lg:col-span-7">
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  Trusted Nationwide Since 2021
                </span>
              </motion.div>

              {/* Main heading with stagger */}
              <div className="overflow-hidden mb-3">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
                    Keeping
                  </h1>
                </motion.div>
              </div>
              <div className="overflow-hidden mb-3">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
                    America&apos;s <span className="text-primary">Freight</span>
                  </h1>
                </motion.div>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                      Moving.
                    </span>
                  </h1>
                </motion.div>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed font-light"
              >
                Comprehensive trucking services with safe handling, real-time
                communication, and coast-to-coast coverage.{" "}
                <span className="text-white/90 font-medium">
                  One truck at a time.
                </span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  id="hero-cta-quote"
                  href="#contact"
                  className="group relative bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1 btn-glow-always overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  id="hero-cta-services"
                  href="#services"
                  className="group glass text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:-translate-y-1 hover:bg-white/15"
                >
                  <span className="flex items-center gap-2">
                    Our Services
                    <svg
                      className="w-5 h-5 transition-transform group-hover:rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right side - Stats cards stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`glass rounded-2xl p-6 cursor-default ${
                      i === 0 ? "mt-12" : i === 3 ? "-mt-8" : ""
                    }`}
                  >
                    <div className="text-4xl font-black text-white mb-1">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-white/50 text-sm font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                    <div className="w-8 h-1 bg-primary/50 rounded-full mt-3" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 gap-3 lg:hidden"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
