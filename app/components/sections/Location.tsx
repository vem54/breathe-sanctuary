"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

export default function Location() {
  return (
    <SectionWrapper id="location" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand">
              Find Us
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
              Phuket, Thailand
            </h2>
            <div className="mt-8 space-y-6">
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Address
                </p>
                <p className="mt-1 font-sans text-sm leading-relaxed text-stone">
                  Phuket, Thailand
                  <br />
                  <span className="text-xs italic">
                    Full address coming soon
                  </span>
                </p>
              </div>
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Hours
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  Open daily
                  <br />
                  <span className="text-xs italic">Hours coming soon</span>
                </p>
              </div>
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Walk-ins welcome
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  No reservations required. Simply arrive, and we will take care
                  of the rest.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
            className="aspect-square overflow-hidden bg-cream"
          >
            {/* Replace with Google Maps embed when address is confirmed:
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
            */}
            <div className="flex h-full w-full items-center justify-center bg-sand/20">
              <div className="text-center">
                <p className="font-serif text-2xl font-light text-charcoal">
                  Map
                </p>
                <p className="mt-2 font-sans text-xs text-stone">
                  Google Maps embed coming soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
