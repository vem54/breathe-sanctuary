"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function Card({
  title,
  description,
  image,
  index = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      }}
      className="group relative cursor-pointer overflow-hidden"
    >
      <div className="aspect-[4/5] overflow-hidden bg-cream">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="pt-5 pb-2">
        <h3 className="font-serif text-2xl font-light text-charcoal">
          {title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-stone">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
