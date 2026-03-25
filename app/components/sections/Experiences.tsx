"use client";

import SectionWrapper from "@/app/components/ui/SectionWrapper";
import Card from "@/app/components/ui/Card";

const experiences = [
  {
    title: "Traditional Sauna",
    description:
      "Classic Finnish-style heat at 80-100°C. Deep relaxation, detoxification, and improved circulation.",
    image: "/images/placeholder-sauna.jpg",
  },
  {
    title: "Infrared Sauna",
    description:
      "Gentle, penetrating heat for deep tissue recovery. Lower temperature, deeper therapeutic benefits.",
    image: "/images/placeholder-infrared.jpg",
  },
  {
    title: "Ice Baths",
    description:
      "Cold immersion at 3°C. Reduce inflammation, boost energy, and sharpen mental clarity.",
    image: "/images/placeholder-ice.jpg",
  },
  {
    title: "Mineral Baths",
    description:
      "Hot magnesium and mineral soaking pools. Ease tension, restore electrolytes, and soften skin.",
    image: "/images/placeholder-mineral.jpg",
  },
  {
    title: "Red Light Therapy",
    description:
      "NASA-developed LED panels for cellular regeneration, collagen production, and faster recovery.",
    image: "/images/placeholder-redlight.jpg",
  },
  {
    title: "Steam Room",
    description:
      "Eucalyptus-infused steam for respiratory relief, skin purification, and deep relaxation.",
    image: "/images/placeholder-steam.jpg",
  },
  {
    title: "Yoga & Pilates",
    description:
      "Daily movement classes in our dedicated studio. Restore balance through breath and body.",
    image: "/images/placeholder-yoga.jpg",
  },
  {
    title: "Private Rooms",
    description:
      "Exclusive suites for solo sessions or couples. Your own sanctuary within the sanctuary.",
    image: "/images/placeholder-private.jpg",
  },
];

export default function Experiences() {
  return (
    <SectionWrapper id="experiences" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand">
            Experiences
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            Eight ways to restore
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-stone">
            From the intensity of a 3°C cold plunge to the gentle warmth of our
            mineral baths, every experience is designed to bring your body back
            to balance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <Card
              key={exp.title}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
