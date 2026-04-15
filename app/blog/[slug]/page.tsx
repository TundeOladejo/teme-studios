import Link from "next/link";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";

const postContent = {
  title: "5 Day Challenge Trainer Series",
  body: `If you've ever felt stuck in your yoga routine — or struggled to stay consistent — you're not alone. Life gets busy, motivation fluctuates, and sometimes even the most dedicated yogis need a reset. That's exactly why we created the 5 Day Challenge Trainer Series: a focused, energizing journey designed to help you reconnect with your body, mind, and breath in just five days.

**Why a 5 Day Challenge?**

Five days is powerful. It's short enough to commit to, yet long enough to create real momentum. This challenge is about building consistency, not perfection. Whether you're a complete beginner or returning to the mat after a break, these five days are your opportunity to show up for yourself — no pressure, just progress.

**What to Expect**

Each day in the Trainer Series is intentionally designed to build on the last. Whether you're a complete beginner or returning to the mat after a break, these five days are your opportunity to show up for yourself.

**Day 1: Foundation & Breath**

We begin by grounding ourselves. You'll focus on simple postures and breath awareness to set a strong base.

**Day 2: Strength & Stability**

Expect gentle strength-building flows that wake up your muscles and improve balance.

**Day 3: Flexibility & Release**

Time to let go. This session focuses on stretching tight areas and releasing built-up tension.

**Day 4: Flow & Connection**

Here, everything comes together in a smooth, mindful flow linking breath with movement.

**Day 5: Reset & Reflect**

We close the challenge with a restorative session and guided reflection, helping you carry this energy forward.

**The Power of Consistency**

One of the biggest transformations you'll notice isn't just physical — it's mental. Showing up for five consecutive days builds discipline, boosts confidence, and reinforces a positive habit. Even 15–30 minutes a day can shift your mindset in a meaningful way.

**Who Is This For?**

- Beginners looking for a structured starting point
- Busy individuals needing short, effective sessions
- Anyone feeling disconnected from their practice
- Yogis wanting a quick reset or motivation boost

**Tips for Success**

- Set a regular time each day — even if it's just 20 minutes
- Create a dedicated space where you can move freely
- Listen to your body — modify when needed
- Stay present — this isn't about performance

Your Journey Starts Here`,
};

const nextPost = {
  slug: "ketogenic-diet-for-beginners",
  title: "Ketogenic diet for beginners",
};

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  // In a real app, fetch post by slug. Using static content for demo.
  void slug;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="bg-[var(--cream)] h-64 md:h-80 w-full" />

        {/* Content */}
        <article className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            {postContent.title}
          </h1>
          <div className="prose prose-sm max-w-none text-[var(--text-muted)] leading-relaxed space-y-4">
            {postContent.body.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-medium text-[var(--foreground)] mt-6"
                  >
                    {para.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc list-inside space-y-1">
                    {para.split("\n").map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              // inline bold
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith("**") ? (
                      <strong key={j} className="text-[var(--foreground)] font-medium">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </article>

        {/* Next post */}
        <div className="border-t border-[#E8DED2]">
          <div className="max-w-2xl mx-auto px-6 py-8">
            <Link
              href={`/blog/${nextPost.slug}`}
              className="text-2xl font-light hover:text-[var(--medium-brown)] transition-colors"
            >
              {nextPost.title} &gt;
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
