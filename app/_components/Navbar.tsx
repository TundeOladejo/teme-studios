"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "ABOUT US" },
  { href: "/blog", label: "BLOG" },
  { href: "/plans", label: "PLANS" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="w-full border-b border-[#E8DED2] bg-white sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none text-[#2E231F]" onClick={() => setOpen(false)}>
            <Image src="/images/logo.svg" alt="Temé Studios" width={86} height={50} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base tracking-[0.15em] transition-colors hover:text-[#2E231F] ${
                  pathname === link.href
                    ? "text-[#2E231F] font-bold pb-0.5"
                    : "text-[#4A3933] font-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-5 h-0.5 bg-[#2E231F] transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`} 
            />
            <span 
              className={`block w-5 h-0.5 bg-[#2E231F] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`} 
            />
            <span 
              className={`block w-5 h-0.5 bg-[#2E231F] transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`} 
            />
          </button>
        </div>
      </header>

      {/* Mobile menu - Separate from header to avoid stacking context issues */}
      {open && (
        <div className="fixed md:hidden inset-0 z-[200] bg-[#FAF7F2] pt-20">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-[210] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-[#2E231F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="flex-1 px-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-lg tracking-widest transition-colors border-b border-[#E8DED2] ${
                    pathname === link.href
                      ? "text-[#2E231F] font-medium"
                      : "text-[#9B8B7E] hover:text-[#4A3933]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link
                href="/plans"
                onClick={() => setOpen(false)}
                className="block mt-8 bg-[#C97B63] text-white text-center text-sm tracking-widest px-6 py-3 hover:bg-[#E8A48E] transition-colors"
              >
                RESERVE YOUR SPOT
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}