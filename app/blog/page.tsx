"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTASection from "../_components/CTASection";

const posts = [
  { slug: "5-day-challenge-trainer-series", tag: "Yoga Session", title: "5 Day Challenge Trainer Series", date: "August 20, 2022" },
  { slug: "ketogenic-diet-for-beginners", tag: "Wellness", title: "Ketogenic diet for beginners", date: "August 20, 2022" },
  { slug: "prepare-a-healthy-weekly-menu", tag: "Fitness", title: "Prepare a healthy weekly menu", date: "August 20, 2022" },
  { slug: "cardio-before-or-after-training", tag: "Yoga Session", title: "Cardio before or after training", date: "August 20, 2022" },
  { slug: "ketogenic-diet-for-beginners-2", tag: "Yoga Session", title: "Ketogenic diet for beginners", date: "August 20, 2022" },
  { slug: "5-day-challenge-trainer-series-2", tag: "Fitness", title: "5 Day Challenge Trainer Series", date: "August 20, 2022" },
  { slug: "ketogenic-diet-for-beginners-3", tag: "Yoga Session", title: "Ketogenic diet for beginners", date: "August 20, 2022" },
  { slug: "prepare-a-healthy-weekly-menu-2", tag: "Yoga Session", title: "Prepare a healthy weekly menu", date: "August 20, 2022" },
  { slug: "cardio-before-or-after-training-2", tag: "Yoga Session", title: "Cardio before or after training", date: "August 20, 2022" },
  { slug: "mindfulness-meditation-guide", tag: "Wellness", title: "Mindfulness meditation for daily peace", date: "September 5, 2022" },
  { slug: "pilates-for-beginners", tag: "Pilates", title: "Pilates fundamentals for beginners", date: "September 12, 2022" },
  { slug: "yoga-for-stress-relief", tag: "Yoga Session", title: "Yoga poses for stress relief", date: "September 18, 2022" },
  { slug: "healthy-meal-prep-tips", tag: "Nutrition", title: "Weekly meal prep for busy people", date: "September 25, 2022" },
  { slug: "morning-rituals-wellness", tag: "Wellness", title: "Morning rituals for a balanced day", date: "October 2, 2022" },
  { slug: "strength-training-yoga", tag: "Fitness", title: "Combining strength training with yoga", date: "October 10, 2022" },
  { slug: "plant-based-diet-guide", tag: "Nutrition", title: "Plant-based diet for beginners", date: "October 15, 2022" },
  { slug: "breathing-techniques", tag: "Yoga Session", title: "Breathing techniques for relaxation", date: "October 22, 2022" },
  { slug: "core-strength-pilates", tag: "Pilates", title: "Building core strength with Pilates", date: "October 30, 2022" },
  { slug: "meditation-daily-life", tag: "Wellness", title: "Incorporating meditation into daily life", date: "November 5, 2022" },
  { slug: "yoga-pilates-difference", tag: "Fitness", title: "Yoga vs Pilates: Key differences", date: "November 12, 2022" },
  { slug: "gut-health-nutrition", tag: "Nutrition", title: "Gut health and its impact on wellness", date: "November 18, 2022" },
  { slug: "inversion-yoga-poses", tag: "Yoga Session", title: "Safe inversion poses for all levels", date: "November 25, 2022" },
  { slug: "winter-wellness-tips", tag: "Wellness", title: "Staying healthy during winter months", date: "December 3, 2022" },
  { slug: "holiday-fitness-routine", tag: "Fitness", title: "Maintaining fitness during holidays", date: "December 10, 2022" },
  { slug: "new-year-wellness-goals", tag: "Wellness", title: "Setting realistic wellness goals", date: "December 28, 2022" },
];

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-32">
          <h1 className="text-3xl md:text-[64px] mb-4">Blog</h1>
          <p className="text-xl text-[#9B8B7E] leading-relaxed max-w-xl mb-8">
            Intimate yoga and Pilates in Lagos&apos; most refined wellness environment. Small classes, personalized guidance and an experience as intentional as your practice.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link href="/plans" className="bg-[#2E231F] text-white text-xs tracking-widest px-5 py-3 hover:bg-[#4A3933] transition-colors">
              RESERVE YOUR SPOT
            </Link>
            <Link href="/plans" className="border border-[#4A3933] text-xs tracking-widest px-5 py-3 hover:border-[#2E231F] transition-colors">
              VIEW OFFERINGS
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
            {currentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="border border-[#4A3933] p-4 flex flex-col gap-3 md:gap-6 transition-colors group rounded-lg text-[#4A3933]"
              >
                <div className="bg-[#E8DED2] h-40 rounded-lg" />
                <span className="text-xl tracking-widest border border-[#1E1E1E] rounded-lg text-[#9B8B7E] px-2 py-1 self-start">
                  {post.tag}
                </span>
                <h2 className="text-2xl group-hover:text-[#4A3933] transition-colors">
                  {post.title}
                </h2>
                <p className="text-xl text-[#9B8B7E]">{post.date}</p>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === 1
                    ? "border-[#E8DED2] text-[#D4C8BC] cursor-not-allowed"
                    : "border-[#4A3933] text-[#2E231F] hover:bg-[#2E231F] hover:text-white"
                }`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-[#2E231F] text-white"
                      : "border border-[#4A3933] text-[#2E231F] hover:bg-[#4A3933] hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === totalPages
                    ? "border-[#E8DED2] text-[#D4C8BC] cursor-not-allowed"
                    : "border-[#4A3933] text-[#2E231F] hover:bg-[#2E231F] hover:text-white"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </section>

        <CTASection title="Ready to slow things down?" subtitle="Join us for a practice. Experience what it feels like to be truly seen, gently guided, and held in a space designed entirely for your wellbeing." note="First-time clients: We'll guide you through everything. Just come as you are." />
      </main>
      <Footer />
    </>
  );
}