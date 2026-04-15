import Link from "next/link";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTASection from "../_components/CTASection";

const values = [
  { name: "Peaceful", desc: "Not chaotic. Not loud. Not performative. Temé is where the noise stops and the breath begins. Every element of our space whispers: you are safe here. You can slow down here. You are allowed to simply be." },
  { name: "Elevated", desc: "Luxury without pretense. Refinement without coldness. We create experiences that feel special — not because they're expensive, but because they're intentional. Every detail is considered, every interaction is thoughtful." },
  { name: "Intimate", desc: "Small class sizes. Personalized guidance. Names remembered. Temperatures adjusted before you ask. This is not anonymity in a crowd — this is being truly seen, heard, and held." },
];

const differentiators = [
  { title: "Intimate Class Sizes", desc: "We intentionally limit our classes to a maximum of 2 people. Our Aerial Yoga sessions are exclusively 1-on-1. This isn't about maximizing capacity — it's about maximizing care. Every client feels seen, supported, and corrected with precision." },
  { title: "Aerial Yoga in Lekki", desc: "We're one of the few studios in Lekki Phase 1 offering Aerial Yoga in a refined, luxury setting. This transformative practice combines inversions, core strengthening, and spinal decompression — delivered with expert guidance and safety." },
  { title: "Personalized Energy", desc: "Our sessions are tailored to who is in the room. No cookie-cutter sequences. No rushing through poses. We adapt to your energy, your body's needs, and your emotional state. No two classes feel exactly the same." },
  { title: "Luxury Without Intimidation", desc: "We create an elevated experience that feels calm and welcoming — not performative or influencer-heavy. You don't need the perfect outfit or Instagram-ready poses. Just come as you are. We'll guide you." },
  { title: "Holistic Wellness Environment", desc: "Housed within Revive Oasis wellness centre, Temé allows you to integrate yoga, Pilates, spa treatments, and recovery into one seamless lifestyle. Your wellness journey doesn't end when class does." },
  { title: "Emotional Safety First", desc: "We prioritize comfort, softness, and confidence — especially for women who may feel intimidated by traditional fitness spaces. This is a judgment-free sanctuary where vulnerability is welcomed and strength is redefined." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32 text-[#4A3933]">
          <h1 className="text-3xl md:text-[64px] mb-6 max-w-2xl">About Us</h1>
          <p className="text-xl leading-relaxed max-w-xl mb-8">
            Intimate yoga and Pilates in Lagos&apos; most refined wellness environment. Small classes, personalized guidance and an experience as intentional as your practice.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/plans" className="bg-[#2E231F] text-white text-xs tracking-widest px-5 py-3 hover:bg-[#4A3933] transition-colors">
              RESERVE YOUR SPOT
            </Link>
            <Link href="/plans" className="border border-[#E8DED2] text-xs tracking-widest px-5 py-3 hover:border-[#2E231F] transition-colors">
              VIEW OFFERINGS
            </Link>
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-[#E8DED2] h-32 sm:h-72 md:h-96 rounded-xl w-full" />
        </div>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-28">
          <p className="tracking-widest text-[#2E231F] mb-4">What we stand for</p>
          <h2 className="text-[56px] md:text-4xl mb-4 text-[#2E231F] py-4">Our Core Values</h2>
          <p className="text-sm text-[#2E231F] mb-10 max-w-lg">
            Everything we do — from the way we greet you to the music we play — flows from these three essential truths.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#4A3933]">
            {values.map((v) => (
              <div key={v.name} className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#4A3933]" />
                <h3 className="text-4xl py-4">{v.name}</h3>
                <p className="text-sm leading-relaxed max-w-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why we're different */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-28 border-t border-[#9B8B7E]">
          <p className="tracking-widest text-[#2E231F] mb-2">Our difference</p>
          <h2 className="text-2xl md:text-[56px] mb-4 text-[#2E231F] max-w-lg">Why we&apos;re not like any other studio</h2>
          <p className="text-[#2E231F] mb-10 max-w-sm">
            We are not a high-traffic fitness studio. We are a curated wellness sanctuary where intimacy, experience, and long-term relationships matter more than volume.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8">
            {differentiators.map((d) => (
              <div key={d.title} className="border border-[#E8DED2] p-5 md:p-6 rounded-lg cursor-pointer hover:border-l-0 hover:border-l-[#2E231F] hover:border-l-12 transition-colors">
                <h3 className="text-4xl mb-2">{d.title}</h3>
                <p className="text-[#9B8B7E] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-[#E8DED2] h-56 sm:h-72 md:h-96 rounded-xl w-full" />
        </div>

        {/* Sanctuary */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-[#2E231F]">
          <div>
            <h2 className="text-2xl md:text-[56px]  mb-4">Find Your Sanctuary</h2>
            <p className="leading-relaxed mb-6">
              {/* Located in the heart of Lagos, we&apos;re easy to find and impossible to forget. */}
              Temé Studios is located within the Revive Oasis wellness centre building in Lekki Phase 1, Lagos — a peaceful retreat in the heart of the city.
              We've created a space where the outside world fades away the moment you step inside. Soft lighting. Calming music. Clean, aesthetically refined interiors. Everything is designed to help you transition from the chaos of daily life into a state of presence.
            </p>
          </div>
          <div>
            <div className="p-6">
              <p className="text-2xl mb-4">Operating Since June 2025</p>
              <p className="leading-relaxed mb-6">
                We're a young studio with a clear vision: to become Lagos' most trusted sanctuary for women seeking intentional movement and genuine wellness.
              </p>
            </div>
          </div>
        </section>

        <CTASection title="Ready to slow things down?" subtitle="Join us for a practice. Experience what it feels like to be truly seen, gently guided, and held in a space designed entirely for your wellbeing." note="First-time clients: We'll guide you through everything. Just come as you are." />
      </main>
      <Footer />
    </>
  );
}
