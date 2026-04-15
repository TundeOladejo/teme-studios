import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
}

export default function CTASection({
  title = "You were not built to perform at full capacity forever.",
  subtitle = "Reserve your spot today. A unique experience awaits you.",
  primaryLabel = "BOOK YOUR FIRST SESSION",
  primaryHref = "/plans",
  secondaryLabel = "VIEW ALL PACKAGES",
  secondaryHref = "/plans",
  note = ""
}: CTASectionProps) {
  return (
    <section className="bg-[var(--dark-brown)] text-white py-25 px-6 text-center">
      <h2 className="text-4xl md:text-[56px] mb-4 max-w-4xl mx-auto">
        {title}
      </h2>
      <p className="text-2xl text-[#D4C8B8] mb-8 leading-relaxed max-w-4xl mx-auto">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pb-4">
        <Link
          href={primaryHref}
          className="bg-[#C97B63] text-[var(--tan)] text-xs tracking-widest px-6 py-3 hover:bg-[#C97B63]/80 text-white transition-colors"
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className="border border-[#FAF7F2] text-[#FAF7F2] text-xs tracking-widest px-6 py-3 hover:bg-[#FAF7F2] hover:text-[#2E231F] transition-colors"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
      <p className="text-2xl text-[#D4C8B8] py-8 leading-relaxed max-w-4xl mx-auto">
        {note}
      </p>
    </section>
  );
}
