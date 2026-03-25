"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

const images = [
  { src: "/images/placeholder-gallery-1.jpg", alt: "Open-air pool and lounging area", span: "col-span-2 row-span-2" },
  { src: "/images/placeholder-gallery-2.jpg", alt: "Sauna interior", span: "" },
  { src: "/images/placeholder-gallery-3.jpg", alt: "Ice bath plunge pool", span: "" },
  { src: "/images/placeholder-gallery-4.jpg", alt: "Relaxation lounge", span: "" },
  { src: "/images/placeholder-gallery-5.jpg", alt: "Yoga studio", span: "" },
  { src: "/images/placeholder-gallery-6.jpg", alt: "Tropical surroundings", span: "col-span-2" },
];

export default function Gallery() {
  return (
    <SectionWrapper id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand">
            Gallery
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            The space
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.08,
              }}
              className={`overflow-hidden ${img.span}`}
            >
              <div
                className="aspect-square h-full w-full bg-sand/30 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
                role="img"
                aria-label={img.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
