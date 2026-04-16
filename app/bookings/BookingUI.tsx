"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { plans, type Plan, type Practice } from "../_data/plans";

const trainers: Record<Practice, string> = {
  "Vinyasa Flow": "Kola Henshaw",
  "Aerial Yoga": "Amara Osei",
  "Hot Yoga": "Temi Adeyemi",
  "Mat Pilates": "Ngozi Bello",
};

const practiceDuration: Record<Practice, string> = {
  "Vinyasa Flow": "60mins",
  "Aerial Yoga": "75mins",
  "Hot Yoga": "60mins",
  "Mat Pilates": "45mins",
};

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const timeSlots = [
  "8:00AM – 9:00AM",
  "9:00AM – 10:00AM",
  "10:00AM – 11:00AM",
  "11:00AM – 12:00PM",
  "12:00PM – 1:00PM",
  "1:00PM – 2:00PM",
];

/** Returns the 7 dates of the week containing the given date (Sun–Sat) */
function getWeekDays(date: Date): Date[] {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() - date.getDay());
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    return d;
  });
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function formatDate(date: Date) {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatMonthYear(date: Date) {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

function formatPrice(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatSummaryTime(slot: string) {
  return slot.split("–")[0].trim();
}

export default function BookingUI() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  const defaultPlan = plans.find((p) => p.id === planId) ?? plans[0];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedPlan, setSelectedPlan] = useState<Plan>(defaultPlan);
  const [selectedPractice, setSelectedPractice] = useState<Practice>(defaultPlan.allowedPractices[0]);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [weekAnchor, setWeekAnchor] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const weekDays = getWeekDays(weekAnchor);

  function prevWeek() {
    const d = new Date(weekAnchor);
    d.setDate(d.getDate() - 7);
    setWeekAnchor(d);
  }
  function nextWeek() {
    const d = new Date(weekAnchor);
    d.setDate(d.getDate() + 7);
    setWeekAnchor(d);
  }

  function selectMonth(monthIndex: number) {
    const isPast = monthIndex < today.getMonth();
    if (isPast) return;
    const d = new Date(today.getFullYear(), monthIndex, 1);
    // if selecting current month, anchor to today's week; otherwise first week
    const anchor = monthIndex === today.getMonth() ? today : d;
    setWeekAnchor(anchor);
    setSelectedDate(anchor);
    setShowMonthPicker(false);
  }

  // Reset practice when plan changes if current practice is no longer allowed
  useEffect(() => {
    if (!selectedPlan.allowedPractices.includes(selectedPractice)) {
      setSelectedPractice(selectedPlan.allowedPractices[0]);
    }
  }, [selectedPlan, selectedPractice]);

  const summaryRows = [
    { label: "Plan", value: selectedPlan.name },
    { label: "Session", value: selectedPractice },
    { label: "Trainer", value: trainers[selectedPractice] },
    { label: "Date", value: formatDate(selectedDate) },
    { label: "Time", value: formatSummaryTime(selectedTime) },
    { label: "Duration", value: practiceDuration[selectedPractice] },
    ...(selectedPlan.sessions > 1
      ? [{ label: "Sessions", value: `${selectedPlan.sessions} sessions` }]
      : []),
  ];

  return (
    <>
      {/* Reserve section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32 text-[#4A3933]">
        <h2 className="text-2xl md:text-[56px] mb-4">Reserve your space</h2>
        <p className="leading-relaxed mb-2">
          Our practices are designed to help you release what you&apos;ve been holding. Our sessions are built for women who need to slow down, not speed up. In the warmth, your muscles soften, tension melts away, and your body finds the space it&apos;s been craving.
        </p>
        <p className="leading-relaxed mb-8">
          This isn&apos;t about maximum return in minimum time. This is about giving yourself permission to move slowly, breathe deeply, and reconnect with the body you&apos;ve been rushing through life in. Gentle guidance. Intentional heat. Transformative presence.
        </p>
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
        <div className="border border-[#E8DED2] rounded-2xl grid grid-cols-1 md:grid-cols-5">

          {/* Left: picker */}
          <div className="md:col-span-3 p-5 sm:p-8 border-b md:border-b-0 md:border-r border-[#E8DED2]">
            <h3 className="text-3xl font-bold mb-6 md:mb-12">Choose your practice, date and time</h3>

            {/* Plan selector */}
            <p className="text-sm text-[#9B8B7E] uppercase tracking-widest mb-3">Plan</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`py-2.5 px-3 border text-left transition-colors ${
                    selectedPlan.id === plan.id
                      ? "bg-[#2E231F] text-white border-[#2E231F]"
                      : "border-[#E8DED2] text-[#9B8B7E] hover:border-[#2E231F]"
                  }`}
                >
                  <span className="block font-medium">{plan.name}</span>
                  <span className="text-xs opacity-70 uppercase">{plan.price} · {plan.tag}</span>
                </button>
              ))}
            </div>

            {/* Practice selector — filtered by plan */}
            <p className="text-sm text-[#9B8B7E] uppercase tracking-widest mb-3">Practice</p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
              {(["Vinyasa Flow", "Aerial Yoga", "Hot Yoga", "Mat Pilates"] as Practice[]).map((p) => {
                const allowed = selectedPlan.allowedPractices.includes(p);
                return (
                  <button
                    key={p}
                    onClick={() => allowed && setSelectedPractice(p)}
                    disabled={!allowed}
                    className={`py-2.5 px-3 border transition-colors ${
                      selectedPractice === p
                        ? "bg-[#2E231F] text-white border-[#2E231F]"
                        : allowed
                        ? "border-[#E8DED2] text-[#9B8B7E] hover:border-[#2E231F]"
                        : "border-[#E8DED2] text-[#E8DED2] cursor-not-allowed opacity-40"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            {/* Month header */}
            <div className="relative flex items-center justify-between mb-4 border-t border-t-[#9B8B7E] md:py-6">
              <p className="text-2xl font-bold">{formatMonthYear(weekAnchor)}</p>
              <button
                onClick={() => setShowMonthPicker((v) => !v)}
                className="border border-[#E8DED2] px-3 md:px-5 py-1.5 md:py-2 flex items-center gap-2 hover:border-[#2E231F] transition-colors"
              >
                <span className="w-3 h-3 bg-[#2E231F] inline-block" />Month
              </button>

              {/* Month picker dropdown */}
              {showMonthPicker && (
                <div className="absolute top-full right-0 z-10 bg-white border border-[#E8DED2] rounded-lg shadow-md p-4 grid grid-cols-3 gap-2 w-64">
                  {MONTH_NAMES.map((name, i) => {
                    const isPast = i < today.getMonth();
                    const isCurrent = i === weekAnchor.getMonth();
                    return (
                      <button
                        key={name}
                        disabled={isPast}
                        onClick={() => selectMonth(i)}
                        className={`py-2 px-3 text-sm rounded transition-colors ${
                          isCurrent
                            ? "bg-[#2E231F] text-white"
                            : isPast
                            ? "text-[#E8DED2] cursor-not-allowed"
                            : "text-[#4A3933] hover:bg-[#E8DED2]"
                        }`}
                      >
                        {name.slice(0, 3)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Week row with arrows on sides */}
            <div className="flex items-center gap-1 mb-6 border-b border-b-[#9B8B7E] md:pb-8">
              <button onClick={prevWeek} className="flex-shrink-0 border border-[#E8DED2] px-3 py-2 hover:border-[#2E231F] text-[#9B8B7E] hover:text-[#2E231F] transition-colors">‹</button>
              <div className="grid grid-cols-7 gap-1 flex-1">
                {weekDays.map((d) => {
                  const isPast = d < today;
                  const isSelected = isSameDay(d, selectedDate);
                  const isToday = isSameDay(d, today);
                  return (
                    <button
                      key={d.toISOString()}
                      disabled={isPast}
                      onClick={() => { setSelectedDate(d); setWeekAnchor(d); }}
                      className={`flex flex-col items-center py-2 rounded-sm transition-colors ${
                        isSelected
                          ? "bg-[#2E231F] text-white"
                          : isPast
                          ? "text-[#E8DED2] cursor-not-allowed"
                          : isToday
                          ? "border border-[#2E231F] text-[#2E231F] hover:bg-[#E8DED2]"
                          : "hover:bg-[#E8DED2] text-[#9B8B7E]"
                      }`}
                    >
                      <span className="text-[9px] tracking-wide">{DAY_LABELS[d.getDay()]}</span>
                      <span className="font-medium">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>
              <button onClick={nextWeek} className="flex-shrink-0 border border-[#E8DED2] px-3 py-2 hover:border-[#2E231F] text-[#9B8B7E] hover:text-[#2E231F] transition-colors">›</button>
            </div>

            {/* Time slots */}
            <p className="text-xl font-bold mb-3 md:py-8">Time Slots</p>
            <div className="space-y-2 md:space-y-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`md:text-2xl w-full flex items-center border justify-between p-4 md:py-6 md:px-12 transition-colors rounded-xl ${
                    selectedTime === slot
                      ? "bg-[#E8DED2] border-none"
                      : "border-[#E8DED2] hover:border-[#C97B63]"
                  }`}
                >
                  {slot}
                  <span className="text-[#9B8B7E]">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: summary + payment */}
          <div className="md:col-span-2 p-5 sm:p-8">
            <h3 className="text-3xl font-bold mb-6">Booking Summary</h3>

            {/* Plan badge */}
            <div className="mb-4 inline-block bg-[#E8DED2] text-[#2E231F] text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              {selectedPlan.tag}
            </div>

            <div className="text-xl space-y-3 mb-6 md:pb-8">
              {summaryRows.map((row, index, array) => (
                <div
                  key={row.label}
                  className={`flex justify-between ${index !== array.length - 1 ? "border-b border-[#9B8B7E]" : ""} pb-2 md:py-6`}
                >
                  <span className="text-[#9B8B7E]">{row.label}</span>
                  <span className="font-medium text-right">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between py-4 md:py-8 border-y-6 border-y-[#9B8B7E]">
                <span className="text-[#4A3933] font-bold">Total</span>
                <span className="text-2xl md:text-4xl font-bold text-[#2E231F]">
                  {formatPrice(selectedPlan.priceValue)}
                </span>
              </div>
            </div>

            <h4 className="text-2xl font-bold mb-3 md:mb-8">Payment Details</h4>
            <div className="space-y-3 md:space-y-8 mb-4 md:mb-8">
              <div>
                <label className="text-xl text-[#4A3933] block mb-1">Card Number</label>
                <input type="text" placeholder="Card Number" className="w-full border border-[#E8DED2] p-3 outline-none focus:border-[#2E231F] bg-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xl text-[#4A3933] block mb-1">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full border border-[#E8DED2] p-3 outline-none focus:border-[#2E231F] bg-transparent" />
                </div>
                <div>
                  <label className="text-xl text-[#4A3933] block mb-1">CVV</label>
                  <input type="text" placeholder="123" className="w-full border border-[#E8DED2] p-3 outline-none focus:border-[#2E231F] bg-transparent" />
                </div>
              </div>
            </div>
            <button className="w-full border border-[#2E231F] text-[#2E231F] font-bold tracking-widest py-4 hover:bg-[#4A3933] hover:text-white cursor-pointer transition-colors rounded-md md:mb-12">
              Confirm & Pay {formatPrice(selectedPlan.priceValue)}
            </button>

            <div className="mt-6 space-y-2 text-[14px] text-[#4A3933] leading-relaxed">
              <p><strong>Classes:</strong> Cancel 24+ hours in advance for a full refund or credit. Late cancellations and no-shows are non-refundable.</p>
              <p><strong>Working/Events:</strong> Cancel 48+ hours before for a refund or credit. Late cancellations are non-refundable.</p>
              <p><strong>Memberships & Packages:</strong> Non-refundable and non-transferable. Memberships require 7 days&apos; notice to cancel.</p>
              <p><strong>Studio Cancellations:</strong> You&apos;ll receive a full refund or credit if we cancel.</p>
              <p><strong>Exceptions:</strong> Emergencies may be considered—contact us directly.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-[#E8DED2] h-56 md:h-96 w-full rounded-sm flex items-center justify-center" />
      </div>
    </>
  );
}
