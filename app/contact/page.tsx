import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-light mb-4">Get in touch</h1>
          <p className="text-sm text-[#9B8B7E] leading-relaxed mb-10 max-w-sm">
            Intimate yoga and Pilates in Lagos&apos; most refined wellness environment. Small classes, personalized guidance and an experience as intentional as your practice.
          </p>
          <form className="space-y-8">
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
                rows={5}
                className="w-full border-b border-[#E8DED2] py-2 text-sm outline-none focus:border-[#2E231F] bg-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#2E231F] text-white text-xs tracking-widest px-16 py-3 hover:bg-[#4A3933] transition-colors"
            >
              SEND
            </button>
          </form>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-[#E8DED2] h-56 md:h-96 w-full rounded-sm flex items-center justify-center">
            {/* <p className="text-sm text-[#9B8B7E]">Map — Lagos, Nigeria</p> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
