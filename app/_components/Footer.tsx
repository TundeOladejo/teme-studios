"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-t border-[#E8DED2]">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-25 space-y-8">
        <Link href="/" className="flex flex-col leading-none text-[#2E231F]" onClick={() => setOpen(false)}>
          <Image src="/images/logo.svg" alt="Temé Studios" width={86} height={50} />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand + newsletter */}
          <div className="md:col-span-4 space-y-8">
            <p className="text-[#4A3933] leading-relaxed mb-8">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b-2 border-[#4A3933] py-3 outline-none focus:border-[#2E231F] bg-transparent placeholder:text-[#9B8B7E]"
              />
              <button
                type="submit"
                className="text-[#4A3933] cursor-pointer border border-[#4A3933] px-4 py-3 hover:bg-[#2E231F] hover:text-white transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-[#4A3933] mt-2 leading-relaxed max-w-lg">
              By subscribing, you agree to our privacy policy and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Follow Us */}
          <div className="p-3">
            <p className="text-xl font-medium tracking-wide mb-3">Follow Us</p>
            <ul className="space-y-2">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[#4A3933] hover:text-[#2E231F] flex items-center gap-2"
                  >
                    <span className="w-4 h-4 rounded border border-[#9B8B7E] inline-block shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#4A3933] text-[#E8DED2] border-t border-[#E8DED2]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Temé Studios. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((item) => (
              <Link key={item} href="#" className="hover:text-[#2E231F] underline">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
