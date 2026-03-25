"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

export default function Location() {
  return (
    <SectionWrapper id="location" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Copy — different pattern: large serif heading, no label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
              Phuket, Thailand
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-stone">
              Tucked into the island with lush tropical surroundings. Walk-ins
              are welcome any day of the week. No reservations required.
            </p>
            <div className="mt-10 space-y-6">
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Open daily
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  Contact us for current hours
                </p>
              </div>
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  No reservations needed
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  Simply arrive, and we will take care of the rest.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image instead of empty map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src="/images/property-tote-walk.jpg"
              alt="Guest walking through the Breathe Sanctuary grounds"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
