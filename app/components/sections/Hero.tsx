"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image — will be replaced with video when ready */}
      <div className="absolute inset-0">
        <Image
          src="/images/pool-aerial-swimmer.jpg"
          alt="Aerial view of the Breathe Sanctuary pool with swimmer floating near the Breathe logo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-6xl font-light tracking-[0.3em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          BREATHE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6"
        >
          <p className="font-sans text-xs font-light uppercase tracking-[0.3em] text-white/70">
            Thermal Wellness &middot; Phuket
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <div className="h-8 w-px bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
