import Link from "next/link";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTASection from "../_components/CTASection";

const packages = [
  { name: "Solo Focus", desc:"Personalized attention with a dedicated 1-on-1 session in any class of your choice.", tag: "INDIVIDUAL", price: "₦30,000", per: "1-TO-1 Any Discipline", features: ["1-on-1 session", "60 mins", "Any practice", "Personalized plan"] },
  { name: "Perfect Duo", desc:"Connect with a partner for a shared yoga experience that enhances both physical and emotional well-being.", tag: "PARTNER", price: "₦60,000", per: "Per session (2 people)", features: ["2-person session", "60 mins", "Any practice", "Shared guidance"] },
  { name: "The Honey Package", desc:"A special bundle for partners looking to deepen their connection through yoga.", tag: "PARTNER BUNDLE", price: "₦70,000", per: "4 sessions", features: ["Per session + massage", "4 classes", "Any practice", "Priority booking"] },
  { name: "Jumpstart Pass", desc:"Get started with our most popular individual package and experience the benefits of regular practice.", tag: "INDIVIDUAL BUNDLE", price: "₦168,000", per: "6 sessions / 1 month validity", features: ["1-on-1 sessions", "8 classes", "Any practice", "Dedicated trainer"] },
  { name: "Ultimate Pass", desc:"The ultimate wellness package for those committed to a comprehensive yoga journey.", tag: "INDIVIDUAL BUNDLE", price: "₦275,000", per: "10 sessions / 1 month validity", features: ["1-on-1 sessions", "14 classes", "Any practice", "Full wellness plan"] },
];

export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32">
          <h1 className="text-3xl md:text-[64px] mb-4 max-w-md">Choose your Practice</h1>
          <p className="text-xl text-[#4A3933] leading-relaxed max-w-lg">
            Whether you're seeking gentle restoration or energizing flow, we hold space for exactly what you need.
          </p>
        </section>

        {/* Practice cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 text-[#2E231F]">
          <div className="bg-[#E8DED2] h-48 sm:h-72 md:h-96 rounded-sm mb-10 w-full md:pb-16" />

          <p className="tracking-widest mb-2 md:pt-16">Our Offerings</p>
          <h2 className="text-2xl md:text-[56px] max-w-2xl mb-3">Four Transformative Practices</h2>
          <p className="mb-8 max-w-sm">
            Each practice is designed to meet you where you are — guided with intention, delivered with care, and personalized to your journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {[
              { name: "Vinyasa Yoga", desc: "A dynamic flowing sequence connecting breath to movement. Build strength, flexibility, and mental focus through mindful transitions and intentional poses. Perfect for those seeking an energizing yet grounding practice.", size: "Maximum 2 people", intensity: "Moderate to High" },
              { name: "Aerial Yoga", desc: "Experience the magic of suspended movement using silk hammocks. We guide you through inversions, core strengthening, and spinal decompression. This unique practice combines playfulness with deep therapeutic benefits.", size: "Exclusively 1-on-1", intensity: "Moderate" },
              { name: "Hot Yoga", desc: "Practice in a heated room designed to deepen your stretches, increase cardiovascular benefits, and facilitate detoxification. The warmth allows your muscles to release tension you didn't know you were holding.", size: "Maximum 2 people", intensity: "Moderate to High" },
              { name: "Mat Pilates", desc: "Strengthen your core, improve posture, and develop long, lean muscles through controlled, precise movements. Our Pilates sessions emphasize quality over quantity, form over speed.", size: "Maximum 2 people", intensity: "Low to Moderate" },
            ].map((p) => (
              <div key={p.name} className="border border-[#9B8B7E] p-4 md:p-8 rounded-lg">
                <div className="bg-[#9B8B7E] h-36 rounded-sm mb-4" />
                <h3 className="text-[40px] font-medium mb-2">{p.name}</h3>
                <p className="text-xl text-[#4A3933] leading-relaxed mb-4 md:mb-8">{p.desc}</p>
                <div className="grid grid-cols-2 gap-4 text-[11px] text-[#9B8B7E] mb-4 border-t-2 border-[#E8DED2] pt-4 md:pt-8">
                  <div>
                    <p className="uppercase text-base">Class size</p>
                    <p className="text-base text-[#4A3933]">{p.size}</p>
                  </div>
                  <div>
                    <p className="uppercase text-base">Intensity</p>
                    <p className="text-base text-[#4A3933]">{p.intensity}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32 border-t border-[#E8DED2] text-[#2E231F]">
          <h2 className="text-2xl md:text-[56px] mb-3">Plans That Fit Your Journey</h2>
          <p className="text-[#9B8B7E] mb-8 max-w-md">
            From single sessions to commitment packages — choose what feels right for you, right now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:pt-16">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-[#E8DED2] p-4 md:p-10 flex flex-col gap-4 rounded-2xl text-[#4A3933]">
                <p className="tracking-widest uppercase">{pkg.tag}</p>
                <h3 className="text-2xl font-medium">{pkg.name}</h3>
                <p className="mb-4 md:mb-8">{pkg.desc}</p>
                <div className="space-y-6">
                  <p className="text-5xl font-bold">{pkg.price}</p>
                  <p>{pkg.per}</p>
                </div>
                <ul className="flex-1 space-y-1.5 my-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-[#4A3933] flex items-center gap-4 divide-y pb-2"><span className="w-3 h-3 bg-[#2E231F] inline-block" />{f}</li>
                  ))}
                </ul>
                <Link href="/booking" className="tracking-widest border border-[#2E231F] text-[#2E231F] px-4 py-3 text-center hover:bg-[#2E231F] hover:text-white transition-colors uppercase">
                  book now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection title="Ready to begin?" subtitle="Your journey to intentional movement, peaceful presence, and reconnection with yourself starts with a single session. We're here to hold space for you." secondaryHref="" secondaryLabel="" note="First-timers: We recommend starting with Solo Focus to experience our approach and find your preferred practice style." />
        
      </main>
      <Footer />
    </>
  );
}
