import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const practices = ["Vinyasa Flow", "Aerial Yoga", "Hot Yoga", "Mat Pilates"];

const days = [
  { day: "SUN", date: 5 },
  { day: "MON", date: 6 },
  { day: "TUE", date: 7 },
  { day: "WED", date: 8, active: true },
  { day: "THU", date: 9 },
  { day: "FRI", date: 10 },
  { day: "SAT", date: 11 },
];

const timeSlots = [
  { time: "8:00AM – 9:00AM", active: true },
  { time: "9:00AM – 10:00AM" },
  { time: "10:00AM – 11:00AM" },
  { time: "11:00AM – 12:00PM" },
  { time: "12:00PM – 1:00PM" },
  { time: "1:00PM – 2:00PM" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Reserve section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32 text-[#4A3933]">
          <h2 className="text-2xl md:text-[56px] mb-4">Reserve your space</h2>
          <p className="leading-relaxed mb-2">
            Our practices are designed to help you release what you've been holding. Our sessions are built for women who need to slow down, not speed up. In the warmth, your muscles soften, tension melts away, and your body finds the space it's been craving.</p>
          <p className="leading-relaxed mb-8">
            This isn't about maximum return in minimum time. This is about giving yourself permission to move slowly, breathe deeply, and reconnect with the body you've been rushing through life in. Gentle guidance. Intentional heat. Transformative presence.</p>
          <div className="max-w-md mx-auto space-y-4 md:space-y-10 md:py-16">
            {["Sign in", "Sign up", "Reserve as guest"].map((opt) => (
              <button key={opt} className="w-full text-left text-sm border-b border-[#E8DED2] pb-3 text-[#9B8B7E] hover:text-[#2E231F] transition-colors">
                {opt}
              </button>
            ))}
          </div>
        </section>

        {/* Booking UI */}
        <section id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="border border-[#E8DED2] rounded-sm grid grid-cols-1 md:grid-cols-3">

            {/* Left: picker */}
            <div className="md:col-span-2 p-5 sm:p-8 border-b md:border-b-0 md:border-r border-[#E8DED2]">
              <h3 className="text-xl font-light mb-6">Choose your practice, date and time</h3>

              <div className="grid grid-cols-2 gap-2 mb-8">
                {practices.map((p, i) => (
                  <button key={p} className={`text-xs py-2.5 px-3 border transition-colors ${i === 0 ? "bg-[#2E231F] text-white border-[#2E231F]" : "border-[#E8DED2] text-[#9B8B7E] hover:border-[#2E231F]"}`}>
                    {p}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium">April 2026</p>
                <button className="text-xs border border-[#E8DED2] px-3 py-1.5 flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#2E231F] inline-block" />Month
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-6">
                {days.map((d) => (
                  <button key={d.date} className={`flex flex-col items-center py-2 text-xs rounded-sm transition-colors ${d.active ? "bg-[#2E231F] text-white" : "hover:bg-[#E8DED2] text-[#9B8B7E]"}`}>
                    <span className="text-[9px] tracking-wide">{d.day}</span>
                    <span className="font-medium">{d.date}</span>
                  </button>
                ))}
              </div>

              <p className="text-xs font-medium mb-3">Time Slots</p>
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <button key={slot.time} className={`w-full flex items-center justify-between px-4 py-3 text-sm border transition-colors ${slot.active ? "bg-[#E8DED2] border-[#9B8B7E]" : "border-[#E8DED2] hover:border-[#C97B63]"}`}>
                    {slot.time}
                    <span className="text-[#9B8B7E]">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: summary + payment */}
            <div className="p-5 sm:p-8">
              <h3 className="text-xl font-light mb-6">Booking Summary</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Session", value: "Vinyasa Flow" },
                  { label: "Trainer", value: "Kola Henshaw" },
                  { label: "Date", value: "April 8, 2026" },
                  { label: "Time", value: "08:00 AM" },
                  { label: "Duration", value: "60mins" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between border-b border-[#E8DED2] pb-2">
                    <span className="text-[#9B8B7E] text-xs">{row.label}</span>
                    <span className="text-xs font-medium">{row.value}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="text-xs text-[#9B8B7E]">Total</span>
                  <span className="text-2xl font-light text-[#2E231F]">₦30,000</span>
                </div>
              </div>

              <h4 className="text-xs font-medium mb-3">Payment Details</h4>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="text-[10px] text-[#9B8B7E] block mb-1">Card Number</label>
                  <input type="text" placeholder="Card Number" className="w-full border border-[#E8DED2] px-3 py-2 text-xs outline-none focus:border-[#2E231F] bg-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-[#9B8B7E] block mb-1">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="w-full border border-[#E8DED2] px-3 py-2 text-xs outline-none focus:border-[#2E231F] bg-transparent" />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#9B8B7E] block mb-1">CVV</label>
                    <input type="text" placeholder="123" className="w-full border border-[#E8DED2] px-3 py-2 text-xs outline-none focus:border-[#2E231F] bg-transparent" />
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#2E231F] text-white text-xs tracking-widest py-3 hover:bg-[#4A3933] transition-colors">
                Confirm & Pay ₦30,000
              </button>

              <div className="mt-6 space-y-2 text-[10px] text-[#9B8B7E] leading-relaxed">
                <p><strong>Classes:</strong> Credit 24+ hours to receive a refund or credit. Late cancellations may be subject to a fee.</p>
                <p><strong>Working Families:</strong> Credit 48+ hours before to receive a rollover or credit up to 120 sessions.</p>
                <p><strong>Memberships & Packages:</strong> Non-refundable and non-transferable.</p>
                <p><strong>Studio Cancellation:</strong> If we cancel a class, a full refund or credit will be issued.</p>
                <p><strong>Exceptions:</strong> Management may be considered — just let us know why.</p>
              </div>
            </div>
          </div>
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
