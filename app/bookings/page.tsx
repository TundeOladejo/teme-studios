import { Suspense } from "react";
import BookingUI from "./BookingUI";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-32 text-[#9B8B7E]">Loading booking...</div>}>
          <BookingUI />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
