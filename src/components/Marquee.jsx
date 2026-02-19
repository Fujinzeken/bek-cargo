"use client";

import { motion } from "framer-motion";

const phrases = [
  "COAST TO COAST",
  "•",
  "50+ TRUCKS",
  "•",
  "DRY VAN SHIPPING",
  "•",
  "24/7 DISPATCH",
  "•",
  "GPS TRACKING",
  "•",
  "NATIONWIDE COVERAGE",
  "•",
  "SAFE & INSURED",
  "•",
  "FMCSA COMPLIANT",
  "•",
];

export default function Marquee() {
  return (
    <div className="bg-primary py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span
            key={i}
            className={`mx-4 text-sm font-bold tracking-[0.15em] ${
              phrase === "•" ? "text-white/40" : "text-white"
            }`}
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
