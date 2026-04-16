export type Practice = "Vinyasa Flow" | "Aerial Yoga" | "Hot Yoga" | "Mat Pilates";

export interface Plan {
  id: string;
  name: string;
  desc: string;
  tag: string;
  price: string;
  priceValue: number; // total price in kobo-free number
  per: string;
  sessions: number;
  pricePerSession: number;
  allowedPractices: Practice[];
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "solo-focus",
    name: "Solo Focus",
    desc: "Personalized attention with a dedicated 1-on-1 session in any class of your choice.",
    tag: "SINGLE SESSION",
    price: "₦30,000",
    priceValue: 30000,
    per: "1-TO-1 Any Discipline",
    sessions: 1,
    pricePerSession: 30000,
    allowedPractices: ["Vinyasa Flow", "Aerial Yoga", "Hot Yoga", "Mat Pilates"],
    features: [
      "Any practice style (Vinyasa, Aerial, Hot Yoga, or Pilates)",
      "Exclusive 1-on-1 guidance",
      "Fully personalized to your needs",
      "Perfect for trying different practices",
      "Complete flexibility in scheduling",
    ],
  },
  {
    id: "perfect-duo",
    name: "Perfect Duo",
    desc: "Share the energy and fun! Grab a friend and crush a class together.",
    tag: "SHARED SESSION",
    price: "₦50,000",
    priceValue: 50000,
    per: "Per session (2 people)",
    sessions: 1,
    pricePerSession: 50000,
    allowedPractices: ["Vinyasa Flow", "Hot Yoga", "Mat Pilates"],
    features: [
      "Bring your practice partner",
      "Shared motivation and accountability",
      "Cost-effective at ₦25,000 per person",
      "Available for Vinyasa, Hot Yoga, and Pilates",
      "Still intimate and personalized",
    ],
  },
  {
    id: "revive-package",
    name: "The Revive Package",
    desc: "Treat yourself to a class of your choice, followed by a blissful 20-minute post-workout massage.",
    tag: "Wellness Bundle",
    price: "₦70,000",
    priceValue: 70000,
    per: "Per session + massage",
    sessions: 1,
    pricePerSession: 70000,
    allowedPractices: ["Vinyasa Flow", "Aerial Yoga", "Hot Yoga", "Mat Pilates"],
    features: [
      "Any 1-on-1 practice session",
      "20-minute therapeutic massage included",
      "Perfect for deep relaxation and recovery",
      "Holistic wellness experience",
      "Melt away tension completely",
    ],
  },
  {
    id: "jumpstart-pass",
    name: "Jumpstart Pass",
    desc: "Dive in with 6 classes of your choice over one month. Build consistency.",
    tag: "MONTHLY PASS",
    price: "₦168,000",
    priceValue: 168000,
    per: "6 sessions / 1 month validity",
    sessions: 6,
    pricePerSession: 28000,
    allowedPractices: ["Vinyasa Flow", "Aerial Yoga", "Hot Yoga", "Mat Pilates"],
    features: [
      "6 sessions to use as you wish",
      "₦28,000 per session (save ₦12,000)",
      "Valid for 30 days from purchase",
      "Mix and match practice styles",
      "Establish a consistent routine",
    ],
  },
  {
    id: "ultimate-pass",
    name: "Ultimate Pass",
    desc: "Maximize your results with 10 classes in a month. Stay consistent and achieve your goals faster.",
    tag: "BEST VALUE",
    price: "₦275,000",
    priceValue: 275000,
    per: "10 sessions / 1 month validity",
    sessions: 10,
    pricePerSession: 27500,
    allowedPractices: ["Vinyasa Flow", "Aerial Yoga", "Hot Yoga", "Mat Pilates"],
    features: [
      "10 sessions for maximum progress",
      "₦27,500 per session (save ₦25,000)",
      "Valid for 30 days from purchase",
      "Best value per session",
      "Ideal for serious commitment",
    ],
  },
];
