"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

function ParallaxImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={90}
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  return (
    <SectionWrapper id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
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

        {/* Row 1: Full-width hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ParallaxImage
            src="/images/pool-breathe-logo.jpg"
            alt="BREATHE logo on pool floor with palm tree shadow"
            className="aspect-[21/9] w-full"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Row 2: Two equal columns */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ParallaxImage
              src="/images/sauna-man-relaxing.jpg"
              alt="Guest relaxing in traditional wooden sauna"
              className="aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          >
            <ParallaxImage
              src="/images/pool-edge-woman.jpg"
              alt="Guest sitting at pool edge with Breathe text visible in the water"
              className="aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Row 3: Wide landscape */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5"
        >
          <ParallaxImage
            src="/images/poolside-lounging-duo.jpg"
            alt="Two guests lounging poolside on teal mats under tree shadows"
            className="aspect-[21/9] w-full"
            sizes="100vw"
          />
        </motion.div>

        {/* Row 4: Three columns — detail shots */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ParallaxImage
              src="/images/pool-edge-stones.jpg"
              alt="Pool edge detail with river stones and tree shadows"
              className="aspect-square"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.08,
            }}
          >
            <ParallaxImage
              src="/images/brand-yoga-mat.jpg"
              alt="Breathe branded yoga mat with tree logo on poolside deck"
              className="aspect-square"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.16,
            }}
          >
            <ParallaxImage
              src="/images/brand-bottle-handoff.jpg"
              alt="Hands passing a Breathe water bottle by the pool"
              className="aspect-square"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
