import Image from "next/image";
import Link from "next/link";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import CTASection from "./_components/CTASection";

const practices = [
  { tag: "signature flow", name: "Vinyasa Yoga", desc: "A breath-guided flow that builds strength, flexibility and presence. Adapted to every level, never rushed.", price: "₦30,000" },
  { tag: "exclusive", name: "Aerial Yoga", desc: "Lagos's most refined aerial practice. 1-on-1 only. Decompresses the spine, builds core strength, lifts the spirit.", price: "₦30,000" },
  { tag: "therapeutic", name: "Hot Yoga", desc: "Deep release in a heated, controlled environment. Detoxifying, grounding, and profoundly restorative.", price: "₦30,000" },
  { tag: "reforming", name: "Mat Pilates", desc: "Precision movement for posture, core strength, and elegant alignment. Quiet power, visible results.", price: "₦30,000" },
];

const steps = [
  {
    num: "01",
    label: "Browse & Choose",
    description: "Select your discipline, trainer, and available time — all from one elegant interface."
  },
  {
    num: "02",
    label: "Reserve your spot",
    description: "Pay securely upfront. Receive your confirmation immediately — no WhatsApp required."
  },
  {
    num: "03",
    label: "Timely reminders",
    description: "We'll remind you 48 hours, 24 hours, and the morning of your practice. Arrive ready."
  },
  {
    num: "04",
    label: "Exhale",
    description: "Show up. Your trainer is ready. Your space is prepared. All that's left is to breathe."
  }
];

const packages = [
  { name: "Solo Focus", tag: "SINGLE SESSION", price: "₦30K", per: "1-TO-1 Any Discipline", desc: "Complete personal attention with a dedicated trainer. Perfect for exploring a new discipline." },
  { name: "Perfect Duo", tag: "SHARED SESSION", price: "₦60K", per: "2 people · Any discipline", desc: "2-person session with shared guidance." },
  { name: "Revive Package", tag: "Wellness Bundle", price: "₦70K", per: "Session + 20-min massage", desc: "Combines a session with a relaxing massage for ultimate relaxation." },
  { name: "Jumpstart Pass", tag: "MONTHLY PASS", price: "₦168K", per: "6 classes · One month", desc: "Ideal for those looking to establish a consistent practice." },
  { name: "Ultimate Pass", tag: "BEST VALUE", price: "₦275K", per: "10 classes · One month ", desc: "The most comprehensive option for dedicated practitioners." },
];

const testimonials = [
  { stars: 5, text: "I've tried many yoga studios in Lagos but nothing compares to the intimacy and quality here. My instructor remembers every detail about my practice.", name: "Amara", occupation: "Corporate executive · Lekki" },
  { stars: 5, text: "The aerial yoga class completely changed how I think about movement. I feel stronger and more confident than I have in years.", name: "Chisom", occupation: "Creative director · Ikoyi" },
];

const faqs = [
  { q: "What types of yoga classes do you offer?", a: "We offer a variety of yoga styles, including Hatha, Vinyasa, and Yin Yoga, suitable for all skill levels." },
  { q: "Do I need any prior experience to join your fitness programs?", a: "No, all equipment is provided. Just bring yourself and comfortable clothing." },
  { q: "How do I book a personalized coaching session?", a: "Use our Plans page to choose your practice, pick a date and time, and confirm your booking online." },
  { q: "What should I bring to a yoga class?", a: "Cancellations made 24 hours before the session are fully refunded. Late cancellations may be subject to a fee." },
  { q: "Are your nutritional plans tailored to individual needs?", a: "Absolutely. Our trainers tailor every session to your level, whether you're brand new or returning after a break." },
  { q: "How often are wellness workshops held?", a: "Absolutely. Our trainers tailor every session to your level, whether you're brand new or returning after a break." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative min-h-[480px] sm:min-h-[560px] md:min-h-[640px]">
            <Image
              src="/images/heroImage.png"
              alt="Woman in a yoga pose at Temé Studios"
              fill
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
              loading="eager"
              priority
            />
            <div className="absolute inset-0 bg-[#2E231F]/20 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-32 h-full flex items-center">
              <div className="max-w-lg w-full">
                <h1 className="text-5xl md:text-6xl font-normal leading-tight my-4 sm:my-6 text-white">
                  A sanctuary for the woman who needs to{" "}
                  <em className="italic font-light text-[#E8A48E]">exhale.</em>
                </h1>
                <p className="text-base sm:text-lg text-[#FAF7F2] leading-relaxed mb-6 sm:mb-8">
                  Intimate yoga and Pilates in Lagos&apos; most refined wellness environment. Small classes, personalized guidance and an experience as intentional as your practice.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/plans" className="inline-block bg-[#C97B63] text-white text-xs tracking-widest px-6 py-3 hover:bg-[#E8A48E] transition-colors text-center">
                    RESERVE YOUR SPOT
                  </Link>
                  <Link
                    href="/plans"
                    className="uppercase border border-[#E8DED2] text-[#E8DED2] text-xs tracking-widest px-6 py-3 hover:bg-[#E8DED2] hover:text-[#2E231F] transition-colors text-center"
                  >
                    view offering
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar - Improved mobile layout */}
          <div className="bg-[#4A3933]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-18">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-6 sm:gap-8 md:gap-0 md:divide-x md:divide-[#FAF7F2]">
                {[
                  { val: "Max 2", label: "per session" },
                  { val: "4", label: "disciplines" },
                  { val: "1-on-1", label: "aerial yoga" },
                  {
                    val: "Personalized Coaching",
                    label: "One-on-one sessions with our fitness and yoga experts, get personalized guidance and encouragement to reach your specific goals.",
                    isLong: true,
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={`px-4 sm:px-5 text-center text-[#FAF7F2] ${s.isLong ? "md:flex-[2] col-span-1 sm:col-span-2" : "flex-1"
                      }`}
                  >
                    <p
                      className={`${s.isLong
                          ? "text-lg sm:text-xl lg:text-2xl font-medium"
                          : "text-xl sm:text-2xl lg:text-[56px]"
                        }`}
                    >
                      {s.val}
                    </p>
                    <p
                      className={`mt-1 ${s.isLong
                          ? "font-light normal-case tracking-normal max-w-xs text-center sm:text-justify mx-auto"
                          : "font-thin tracking-widest uppercase text-sm sm:text-base"
                        }`}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practices - Improved grid spacing */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-[#2E231F]">
          <p className="text-xs tracking-widest uppercase mb-2">What we offer</p>
          <h2 className="text-2xl sm:text-3xl md:text-[56px] mb-3 max-w-lg">Move beautifully, with intention.</h2>
          <p className="text-sm mb-8 sm:mb-10 max-w-xl">
            Whether you&apos;re a beginner or an advanced practitioner, our offerings are designed to inspire and support you on your wellness journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
            {practices.map((p) => (
              <div
                key={p.name}
                className="group border rounded-2xl px-6 sm:px-8 py-10 sm:py-14 flex flex-col gap-3 cursor-pointer
                text-[#4A3933] border-[#9B8B7E] 
                hover:bg-[#4A3933] hover:text-white hover:border-[#2E231F] transition-colors"
              >
                <span className="border border-[#9B8B7E] h-10 w-10 rounded-xl group-hover:border-[#FAF7F2]" />
                <p className="py-3 sm:py-4 uppercase font-thin text-xs sm:text-sm">{p.tag}</p>
                <h3 className="text-2xl sm:text-3xl font-medium">{p.name}</h3>
                <p className="leading-relaxed text-sm flex-1 text-[#4A3933] group-hover:text-[#FAF7F2]">
                  {p.desc}
                </p>
                <div className="flex gap-4 py-4 sm:py-6 font-bold text-[#4A3933] group-hover:text-[#FAF7F2]">
                  <span>From {p.price}</span>
                </div>
                <Link
                  href="/plans"
                  className="text-xs uppercase tracking-widest border px-4 py-3 text-center 
                  border-[#2E231F] text-[#2E231F] 
                  hover:bg-[#2E231F] hover:text-white 
                  group-hover:border-[#FAF7F2] group-hover:text-white group-hover:hover:bg-[#FAF7F2] group-hover:hover:text-[#2E231F] 
                  transition-colors"
                >
                  view more
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Booking steps - Improved mobile layout */}
        <section className="bg-[#E8DED2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
            <p className="text-xs tracking-widest text-[#2E231F] uppercase mb-2">RESERVE YOUR SPOT</p>
            <h2 className="text-2xl sm:text-3xl md:text-[56px] mb-6 sm:mb-3 max-w-2xl tracking-tighter">Booking is as seamless as yoga itself.</h2>

            <div className="max-w-7xl mx-auto py-8 sm:py-12">
              <div className="relative">
                {/* Steps - Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-8 relative">
                  {/* Hide line on mobile, show on larger screens */}
                  <div className="hidden md:block absolute top-9 left-[calc(12.5%)] right-[calc(12.5%)] h-[2px] bg-[#2E231F]" />

                  {steps.map((s, index) => (
                    <div key={s.num} className="flex flex-col items-center text-center relative">
                      {/* Connector line for mobile */}
                      {index < steps.length - 1 && (
                        <div className="md:hidden absolute left-1/2 top-9 w-[2px] h-8 bg-[#2E231F] -translate-x-1/2" style={{ top: '36px' }} />
                      )}
                      
                      {/* Marker */}
                      <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-3xl bg-[#2E231F] text-[#FAF7F2] text-xl sm:text-2xl font-light z-10">
                        {s.num}
                      </div>

                      {/* Content */}
                      <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
                        <h3 className="text-xl sm:text-2xl text-[#2E231F]">
                          {s.label}
                        </h3>
                        <p className="text-[#6B5E57] text-sm sm:text-base max-w-xs mx-auto">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages - Improved responsive grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-[#4A3933]">
          <p className="text-xs tracking-widest uppercase mb-2">WHAT WORKS FOR YOU?</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl py-3 sm:py-5">Choose your package</h2>
          <p className="mb-8 sm:mb-10 max-w-xl text-sm sm:text-base">Every session is an investment in yourself. Our packages are designed for consistency - because transformation is a practice, not an event.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border rounded-2xl px-6 sm:px-8 py-10 sm:py-14 flex flex-col gap-3 border-[#E8DED2]">
                <p className="tracking-widest text-[#9B8B7E] uppercase text-xs sm:text-sm">{pkg.tag}</p>
                <h3 className="text-xl sm:text-2xl font-medium">{pkg.name}</h3>
                <div>
                  <p className="text-4xl sm:text-5xl py-6 sm:py-8">{pkg.price}</p>
                  <p className="text-sm sm:text-base">{pkg.per}</p>
                </div>
                <p className="flex-1 space-y-1.5 my-4 sm:my-5 text-sm sm:text-base">
                  {pkg.desc && <span>{pkg.desc}</span>}
                </p>
                <Link href="/plans" className="text-xs uppercase tracking-widest border border-[#2E231F] text-[#2E231F] px-4 py-3 my-4 sm:my-5 text-center hover:bg-[#2E231F] hover:text-white transition-colors">
                  book now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials - Improved responsive typography */}
        <section className="px-4 sm:px-6 text-[#4A3933]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#9B8B7E]">
            <p className="tracking-widest uppercase mb-2 text-xs sm:text-sm">WHAT THEY SAY</p>
            <h2 className="text-3xl sm:text-[40px] md:text-[56px] mb-6 sm:mb-10">Felt, not just told.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-10">
              {testimonials.map((t) => (
                <div key={t.name} className="p-5 sm:p-6 border border-[#9B8B7E] rounded-lg">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-[#9B8B7E] text-lg sm:text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-xl sm:text-2xl text-[#4A3933] leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-lg sm:text-xl font-medium">{t.name}</p>
                  <p className="text-sm sm:text-base">{t.occupation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />

        {/* Contact - Improved mobile layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[#4A3933]">
            <div className="relative w-full h-64 sm:h-80 md:h-full min-h-[300px] order-2 md:order-1">
              <Image
                src="/images/yoga-lady.jpg"
                alt="Woman in a yoga pose at Temé Studios"
                fill
                className="object-cover object-center rounded-lg"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="px-0 sm:px-4 md:px-6 py-2 order-1 md:order-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Get in touch.</h3>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base">Whatever questions you&apos;ve got, we&apos;ll be happy to answer. Please fill and submit the form below. We will get back to you.</p>

              <form className="space-y-6 sm:space-y-8">
                <div>
                  <label className="text-sm text-[#9B8B7E] block mb-2">Email (required)</label>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-[#E8DED2] py-2 text-sm outline-none focus:border-[#2E231F] bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#9B8B7E] block mb-2">Message (required)</label>
                  <textarea
                    required
                    rows={3}
                    className="w-full border-b border-[#E8DED2] py-2 text-sm outline-none focus:border-[#2E231F] bg-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="border border-[#2E231F] text-[#2E231F] text-xs tracking-widest px-12 sm:px-16 py-3 hover:bg-[#4A3933] hover:text-white cursor-pointer transition-colors w-full sm:w-auto"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ - Improved responsive layout */}
        <section className="bg-[#4A3933] text-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                Frequently <span className="italic font-light">asked</span> questions
              </h3>
              <p className="tracking-tighter text-sm sm:text-base">Everything you need to know about Temé Studios</p>
            </div>

            <div className="divide-y divide-[#E8DED2]">
              {faqs.map((faq) => (
                <details key={faq.q} className="py-3 sm:py-4 group">
                  <summary className="text-base sm:text-xl cursor-pointer list-none flex justify-between items-start gap-4 pb-4 sm:pb-6">
                    <span className="text-sm sm:text-base md:text-xl">{faq.q}</span>
                    <span className="text-2xl sm:text-4xl leading-none shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base pb-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}