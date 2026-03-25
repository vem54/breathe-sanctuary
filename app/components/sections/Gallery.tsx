"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

const images = [
  {
    src: "/images/pool-breathe-logo.jpg",
    alt: "BREATHE logo on pool floor with palm tree shadow",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/sauna-man-relaxing.jpg",
    alt: "Guest relaxing in traditional wooden sauna",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/pool-edge-woman.jpg",
    alt: "Guest sitting at pool edge with Breathe text visible in the water",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/property-tote-closeup.jpg",
    alt: "Guest walking with Breathe tote bag past pool and wooden pavilions",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/pool-edge-stones.jpg",
    alt: "Pool edge detail with river stones and tree shadows",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/poolside-lounging-duo.jpg",
    alt: "Two guests lounging poolside on teal mats under tree shadows",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    src: "/images/brand-yoga-mat.jpg",
    alt: "Breathe branded yoga mat with tree logo on poolside deck",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/brand-bottle-handoff.jpg",
    alt: "Hands passing a Breathe water bottle by the pool",
    span: "",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  return (
    <SectionWrapper id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header — centered for variety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            The space
          </h2>
        </motion.div>

        {/* Gallery grid — wider gaps for luxury breathing room */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.06,
              }}
              className={`relative overflow-hidden ${img.span} ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes={
                  img.span.includes("col-span-2")
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
