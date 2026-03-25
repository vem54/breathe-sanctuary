"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

const tiers = [
  {
    name: "Day Pass",
    price: "฿650",
    period: "per visit",
    features: [
      "Full access to all thermal circuits",
      "Sauna, steam room, infrared sauna",
      "Ice baths & mineral hot baths",
      "Red light therapy",
      "Pool & lounging areas",
      "Towel & locker included",
    ],
    cta: "Visit Us",
    ctaHref: "#location",
    featured: false,
  },
  {
    name: "Membership",
    price: "Inquire",
    period: "",
    features: [
      "Unlimited daily access",
      "All Day Pass inclusions",
      "Priority booking for private rooms",
      "Yoga & pilates classes included",
      "Guest passes",
      "Member-only events",
    ],
    cta: "Get in Touch",
    ctaHref: "#contact",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand-dark">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            Simple, transparent
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-stone">
            Walk in for the day or commit to your practice with a membership. No
            contracts, no hidden fees.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.15,
              }}
              className={`flex flex-col p-8 md:p-10 ${
                tier.featured
                  ? "bg-charcoal text-warm-white"
                  : "bg-cream text-charcoal"
              }`}
            >
              <p
                className={`font-sans text-xs font-medium uppercase tracking-[0.2em] ${
                  tier.featured ? "text-sand" : "text-sand-dark"
                }`}
              >
                {tier.name}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-light">
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    className={`font-sans text-sm ${
                      tier.featured ? "text-warm-white/60" : "text-stone"
                    }`}
                  >
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 font-sans text-sm ${
                      tier.featured ? "text-warm-white/80" : "text-stone"
                    }`}
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sand" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`mt-10 flex cursor-pointer items-center justify-center py-3 font-sans text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                  tier.featured
                    ? "border border-warm-white/30 text-warm-white hover:bg-warm-white/10"
                    : "border border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
