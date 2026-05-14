import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const INTRO_COPY =
  "Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.";

const LIFESTYLE_CARDS = [
  {
    emoji: "⚡️",
    text: "Open-sourcing our latest experiment (or hacking on yours)",
  },
  {
    emoji: "🎥",
    text: "Teaching devs on Twitch/YouTube—because rising tides lift all ships",
  },
  {
    emoji: "🧗",
    text: "Rock climbing (problem-solving with real stakes)",
  },
  {
    emoji: "🎸",
    text: "Strumming chords while CI pipelines pass (multitasking at its finest)",
  },
];

const About = () => {
  const text = `Passionate about clean architecture
    We build scalable, high-performance solutions
    from prototype to production`;

  const contentRef = useRef(null);
  const introRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.98,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
  });

  useGSAP(
    () => {
      const intro = introRef.current;
      const subtitle = subtitleRef.current;
      const cards = cardRefs.current.filter(Boolean);
      if (!intro || !subtitle || cards.length === 0) return;

      gsap.set([intro, subtitle, ...cards], {
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      tl.from(intro, {
        y: 64,
        opacity: 0,
        scale: 0.94,
        rotateX: 6,
        duration: 0.85,
      })
        .from(
          subtitle,
          { y: 28, opacity: 0, letterSpacing: "0.35em", duration: 0.55 },
          "-=0.45",
        )
        .from(
          cards,
          {
            y: 48,
            opacity: 0,
            rotateX: 10,
            scale: 0.92,
            stagger: { each: 0.11, from: "start" },
            duration: 0.7,
          },
          "-=0.35",
        );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: contentRef },
  );

  return (
    <section id="about" className="min-h-screen rounded-b-4xl bg-zinc-950">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-zinc-100"}
        withScrollTrigger={true}
      />

      <div
        ref={contentRef}
        className="mx-auto w-full max-w-5xl px-6 pb-24 pt-6 sm:px-10 md:pt-10"
        style={{ perspective: "1200px" }}
      >
        <article
          ref={introRef}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-out will-change-transform hover:-translate-y-0.5 hover:border-emerald-500/25 hover:shadow-[0_28px_90px_-20px_rgba(16,185,129,0.12)] md:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(80% 55% at 50% 0%, rgba(16,185,129,0.16), transparent 55%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-80" />
          <p className="relative text-left text-base font-light leading-relaxed tracking-wide text-zinc-300 sm:text-lg md:text-xl">
            {INTRO_COPY}
          </p>
        </article>

        <h3
          ref={subtitleRef}
          className="mt-14 text-center text-xs font-light uppercase tracking-[0.35em] text-zinc-500 sm:mt-16 sm:text-sm"
        >
          When we&apos;re not shipping
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mt-8 md:gap-6">
          {LIFESTYLE_CARDS.map((item, index) => (
            <article
              key={item.emoji}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-out will-change-transform hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_20px_50px_-16px_rgba(16,185,129,0.1)] md:p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 20%, rgba(52,211,153,0.12), transparent 50%)",
                }}
              />
              <span
                className="relative text-2xl leading-none transition-transform duration-500 ease-out group-hover:scale-110 md:text-3xl"
                aria-hidden
              >
                {item.emoji}
              </span>
              <p className="relative text-left text-sm font-light leading-relaxed tracking-wide text-zinc-400 sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
