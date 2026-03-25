"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

export default function Location() {
  return (
    <SectionWrapper id="location" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Copy */}
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
              Breathe Sanctuary is a thermal wellness spa on the island of
              Phuket, surrounded by tropical greenery. We are open daily for
              walk-ins. No reservations needed. Just arrive, and we take care of
              the rest.
            </p>
            <div className="mt-10 space-y-6">
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Open daily
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  Walk-ins welcome, every day of the week
                </p>
              </div>
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Day Pass
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  ฿650 per visit. Full access to all thermal circuits, pool, and
                  recovery facilities.
                </p>
              </div>
              <div className="border-t border-sand/50 pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Get in touch
                </p>
                <p className="mt-1 font-sans text-sm text-stone">
                  <a
                    href="mailto:hello@breathephuket.com"
                    className="underline transition-colors hover:text-charcoal"
                  >
                    hello@breathephuket.com
                  </a>
                  <br />
                  <a
                    href="https://www.instagram.com/breathe.phuket/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-charcoal"
                  >
                    @breathe.phuket
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
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
              src="/images/property-tote-closeup.jpg"
              alt="Breathe Sanctuary wellness spa grounds with pool and wooden pavilions in Phuket"
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
