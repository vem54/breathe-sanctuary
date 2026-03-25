/**
 * Structured Data (JSON-LD) for Breathe Sanctuary
 *
 * Schema types implemented:
 *   1. WebSite — site-level identity
 *   2. WebPage — page-level metadata
 *   3. HealthAndBeautyBusiness — primary business entity (LocalBusiness subtype)
 *      - includes Offer for Day Pass pricing
 *      - includes hasOfferCatalog for services
 *
 * NOT included (by design):
 *   - HowTo: deprecated September 2023
 *   - FAQ: restricted to government/healthcare authority sites since August 2023
 *   - Restaurant: food/drink is ancillary, not a standalone dining establishment
 */

const SITE_URL = "https://breathephuket.com";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Breathe Sanctuary",
  url: SITE_URL,
  description:
    "A premium thermal spa and wellness sanctuary in Phuket, Thailand.",
  inLanguage: "en",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Breathe Sanctuary | Thermal Wellness, Phuket",
  url: SITE_URL,
  description:
    "A premium thermal spa and wellness sanctuary in Phuket, Thailand. Sauna, ice baths, red light therapy, IV therapy, blood testing, yoga, and more.",
  isPartOf: {
    "@type": "WebSite",
    url: SITE_URL,
  },
  inLanguage: "en",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Breathe Sanctuary",
  alternateName: "Breathe Phuket",
  url: SITE_URL,
  description:
    "A premium thermal spa and wellness sanctuary in Phuket, Thailand. Thermal circuits, ice baths, red light therapy, IV therapy, blood testing, yoga, and recovery.",
  image: `${SITE_URL}/images/pool-breathe-logo.jpg`,

  // Contact
  email: "hello@breathephuket.com",
  sameAs: ["https://www.instagram.com/breathe.phuket/"],

  // Location
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuket",
    addressCountry: "TH",
  },

  // Geo — Phuket island center (update with exact coordinates when available)
  geo: {
    "@type": "GeoCoordinates",
    latitude: 7.8804,
    longitude: 98.3923,
  },

  // Currency
  currenciesAccepted: "THB",
  paymentAccepted: "Cash, Credit Card",

  // Day Pass pricing
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Breathe Sanctuary Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Day Pass",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Day Pass",
              description:
                "Full access to all thermal circuits including sauna, steam room, infrared sauna, ice baths, mineral hot baths, red light therapy, pool and lounging areas. Towel and locker included.",
            },
            price: "650",
            priceCurrency: "THB",
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Membership",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Membership",
              description:
                "Unlimited daily access, all Day Pass inclusions, priority booking for private rooms, yoga and pilates classes, guest passes, and member-only events.",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
    ],
  },

  // Services offered (amenityFeature for spa facilities)
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Finnish Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Infrared Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Steam Room", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ice Baths", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mineral Hot Baths", value: true },
    { "@type": "LocationFeatureSpecification", name: "Red Light Therapy", value: true },
    { "@type": "LocationFeatureSpecification", name: "IV Therapy", value: true },
    { "@type": "LocationFeatureSpecification", name: "Blood Testing", value: true },
    { "@type": "LocationFeatureSpecification", name: "Yoga Studio", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pilates Classes", value: true },
    { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Rooms", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
  ],

  // Known services as makesOffer
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Thermal Circuit",
        description:
          "Traditional Finnish sauna at 90°C, infrared sauna, and steam room. Move between heat and rest at your own pace.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ice Baths",
        description:
          "Cold immersion at 3 degrees Celsius for inflammation, energy, and mental clarity.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mineral Baths",
        description:
          "Hot magnesium and mineral soaking pools. Ease tension and restore electrolytes.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Red Light Therapy",
        description:
          "LED panels for cellular regeneration, collagen production, and faster recovery.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "IV Therapy",
        description:
          "Vitamin and nutrient infusions tailored to hydration, recovery, and immune support.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Blood Testing",
        description:
          "Comprehensive blood panels to track your health markers and guide your wellness plan.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Yoga & Pilates",
        description: "Daily movement classes in a dedicated studio.",
      },
    },
  ],
};

const schemas = [websiteSchema, webPageSchema, businessSchema];

export default function StructuredData() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
