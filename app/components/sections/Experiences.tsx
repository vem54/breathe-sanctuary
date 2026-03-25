"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

const featured = [
  {
    title: "Thermal Circuit",
    description:
      "Traditional Finnish sauna, infrared sauna, and eucalyptus steam room. Move between heat and rest at your own pace.",
    image: "/images/sauna-stones.jpg",
    alt: "Traditional sauna stones with wooden ladle pouring water",
  },
  {
    title: "The Pool",
    description:
      "Our open-air pool sits at the heart of the sanctuary. Lounge poolside, float in the turquoise water, or cool off between thermal sessions.",
    image: "/images/pool-aerial-full.jpg",
    alt: "Aerial view of the organic-shaped pool with guests swimming",
  },
];

const additional = [
  {
    title: "Ice Baths",
    description:
      "Cold immersion at 3°C for inflammation, energy, and mental clarity.",
  },
  {
    title: "Mineral Baths",
    description:
      "Hot magnesium and mineral soaking pools. Ease tension and restore electrolytes.",
  },
  {
    title: "Red Light Therapy",
    description:
      "LED panels for cellular regeneration, collagen production, and faster recovery.",
  },
  {
    title: "Yoga & Pilates",
    description: "Daily movement classes in our dedicated studio.",
  },
  {
    title: "Private Rooms",
    description: "Exclusive suites for solo sessions or couples.",
  },
];

export default function Experiences() {
  return (
    <SectionWrapper id="experiences" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand-dark">
            Experiences
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            Ways to restore
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-stone">
            From the intensity of a 3°C cold plunge to the gentle warmth of our
            mineral baths, every experience is designed to bring your body back
            to balance.
          </p>
        </motion.div>

        {/* Featured experiences with photos */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {featured.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.15,
              }}
              className="group"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="pt-6">
                <h3 className="font-serif text-3xl font-light text-charcoal">
                  {exp.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-stone">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional experiences — text list */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {additional.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.08,
              }}
              className="border-t border-sand/40 pt-5"
            >
              <h3 className="font-serif text-xl font-light text-charcoal">
                {exp.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-stone">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
