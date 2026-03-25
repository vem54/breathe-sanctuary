"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

export default function FoodDrink() {
  return (
    <SectionWrapper id="dining" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/poolside-women.jpg"
              alt="Guests dining poolside at Breathe wellness sanctuary in Phuket"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          >
            <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
              Food & drink
            </h2>
            <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-stone">
              <p>
                Our kitchen serves clean, high-quality meals built around
                recovery. Locally sourced ingredients, prepared fresh daily.
              </p>
              <p>
                Cold-pressed juices, herbal teas, smoothie bowls, and light
                plates between sessions. For those unwinding after a day at the
                spa, we offer a curated selection of wines, cocktails, and craft
                beverages poolside.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Meals", desc: "Clean, nourishing plates" },
                { label: "Juices & Teas", desc: "Cold-pressed & herbal" },
                { label: "Bar", desc: "Wines, cocktails & craft" },
                { label: "Poolside", desc: "Light bites & drinks" },
              ].map((item) => (
                <div key={item.label} className="border-t border-sand/50 pt-4">
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {item.label}
                  </p>
                  <p className="mt-1 font-sans text-xs text-stone">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
