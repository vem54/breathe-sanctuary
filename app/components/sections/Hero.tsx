"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background with poster for fast LCP */}
      <div className="absolute inset-0 bg-[#3a6b5e]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content — h1 renders immediately for SEO, animation is visual only */}
      <div className="relative flex h-full flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-5xl font-light tracking-[0.2em] text-white sm:text-6xl sm:tracking-[0.25em] md:text-8xl lg:text-9xl lg:tracking-[0.3em]"
        >
          BREATHE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6"
        >
          <p className="font-sans text-sm font-light uppercase tracking-[0.3em] text-white/70">
            Thermal Wellness Sanctuary &middot; Phuket, Thailand
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator — minimal line only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="h-10 w-px bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
