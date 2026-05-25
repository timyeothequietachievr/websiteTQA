import type { ReactNode } from "react";
import { COACHING_STORY_TITLE } from "@/lib/coaching-content";

function Em({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-charcoal">{children}</strong>;
}

/** Tim's story — emphasis phrases per coaching page spec */
export function CoachingStory() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <h2
          className="max-w-3xl font-display font-semibold text-charcoal"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.05 }}
        >
          {COACHING_STORY_TITLE}
        </h2>
        <div className="mt-8 max-w-3xl space-y-4 font-reading text-[17px] leading-relaxed text-warm-700">
          <p>
            For years, <Em>I struggled to manage my own introversion</Em>. I loved my craft. I had high ambitions. I
            wanted to excel. So I voraciously read self-help books on leadership. I watched every great TED Talk. I
            modelled social butterflies at networking events. I watched in awe as company leaders delivered speeches
            effortlessly.
          </p>
          <p>
            <Em>I thought</Em>: if I tried hard enough, I could be just like them.
          </p>
          <p>
            <Em>And it worked!</Em> But I was exhausted pretending to be someone else. It always felt unnatural. It felt
            like I was wearing a mask; and with each passing day, that mask grew heavier and heavier, until I could not
            put it on anymore.
          </p>
          <p>
            <Em>I thought</Em>: maybe there was something wrong with me. Maybe I wasn&rsquo;t good enough. But there was
            a voice inside of me that refused to give up. There had to be a better way.
          </p>
          <p>
            <Em>So I stopped pretending</Em>. I took the best of what I learned and started practising. I kept what
            worked and made those skills my own.
          </p>
          <p>
            Since this change, I&rsquo;ve been a <Em>leader and manager at tech startups</Em> — full of people with{" "}
            <Em>strong opinions and loud voices</Em>. I&rsquo;ve been a keynote speaker at conferences and podcasts. I
            even wrote a book about how I did it.
          </p>
          <p>
            <Em>Today, I am no longer faking it</Em>. I am no longer pretending to be someone else. I no longer wear an
            extrovert mask; and I&rsquo;ve coached 1000+ quiet achievers to do the same.
          </p>
          <p>
            It&rsquo;s a different path to success, but <Em>it is a path I walk very comfortably in my own skin</Em>.
          </p>
          <p>
            My coaching draws upon my decades of experience surrounded by people at work with strong opinions and loud
            voices. I&rsquo;ve made plenty of mistakes along the way; I will help you avoid them.
          </p>
          <p>
            <Em>Life is too short to be living someone else&rsquo;s version of success</Em>. Introversion is not a flaw.
            It is not something you hide. It&rsquo;s a superpower. My coaching will help you show up as the best version
            of yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
