"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

const featured = [
  {
    title: "Thermal Circuit",
    description:
      "Three distinct heat experiences in one session. Our traditional Finnish sauna runs at 90°C. The infrared sauna operates at a gentler temperature, using far-infrared wavelengths that penetrate deep tissue for muscle recovery and joint relief. The steam room provides high humidity for respiratory cleansing and skin purification. Move between heat and rest at your own pace.",
    image: "/images/sauna-man-relaxing.jpg",
    alt: "Guest relaxing in the Finnish sauna at Breathe Sanctuary, Phuket",
  },
  {
    title: "The Pool",
    description:
      "Our open-air pool sits at the heart of the sanctuary. An organic-shaped pool surrounded by palm trees and river stone borders. Float in the turquoise water, lounge poolside on wooden daybeds, or cool off between thermal sessions.",
    image: "/images/pool-aerial-full.jpg",
    alt: "Aerial view of the open-air pool at Breathe wellness spa in Phuket",
  },
];

const additional = [
  {
    title: "Ice Baths & Cold Plunge",
    description:
      "Cold immersion pools maintained at 3°C. A single 2-3 minute session reduces inflammation, spikes norepinephrine for sustained energy, and sharpens mental clarity. Part of every day pass.",
  },
  {
    title: "Mineral & Magnesium Baths",
    description:
      "Hot soaking pools infused with magnesium chloride and trace minerals at 38-40°C. Eases muscle tension, restores electrolyte balance, and softens skin. Ideal after a cold plunge.",
  },
  {
    title: "Red Light Therapy",
    description:
      "Full-body LED panels delivering 630-660nm red and 810-850nm near-infrared wavelengths. Supports cellular regeneration, collagen production, and faster recovery between training sessions.",
  },
  {
    title: "IV Therapy",
    description:
      "Vitamin and nutrient infusions tailored to hydration, recovery, and immune support. Multiple formulas available.",
  },
  {
    title: "Blood Testing",
    description:
      "Full blood panels to track your health markers and guide your wellness plan. Results help you understand what your body needs and measure progress over time.",
  },
  {
    title: "Yoga & Pilates",
    description:
      "Classes in our dedicated studio. Yoga and pilates for all levels.",
  },
  {
    title: "Private Rooms",
    description:
      "Exclusive suites for solo sessions or couples. Your own sanctuary within the sanctuary, with private thermal access and dedicated service.",
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
            Thermal wellness, your way
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-stone">
            Breathe Sanctuary brings together sauna, cold plunge, red light
            therapy, and holistic recovery under one roof in Phuket. Every
            session is designed to reduce inflammation, restore energy, and bring
            your body back to balance.
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
