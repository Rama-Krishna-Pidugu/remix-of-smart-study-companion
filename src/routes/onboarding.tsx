import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import mascotHi from "@/assets/mascot-hi.png";
import mascotAi from "@/assets/mascot-ai.png";
import mascotTrophy from "@/assets/mascot-trophy.png";
import mascotLogo from "@/assets/mascot-logo.png";
import { Button } from "@/components/ui/button";
import { FileText, Youtube, StickyNote, Image as ImageIcon, Sparkles, Brain, Repeat, Flame, Zap, Upload, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "PikaDecks — Turn Anything Into Flashcards" },
      { name: "description", content: "Upload PDFs, YouTube videos, notes, or screenshots and instantly create smart study decks with AI." },
    ],
  }),
  component: Onboarding,
});

type Screen = {
  mascot: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  accentBg: string;
  chips: { icon: React.ReactNode; label: string }[];
};

const screens: Screen[] = [
  {
    mascot: mascotHi,
    eyebrow: "Welcome",
    headline: "Turn Anything Into Flashcards",
    subtext: "Upload PDFs, YouTube videos, notes, or screenshots and instantly create smart study decks.",
    accentBg: "from-amber-200/70 via-yellow-100/60 to-transparent",
    chips: [
      { icon: <FileText className="size-4" />, label: "PDFs" },
      { icon: <Youtube className="size-4" />, label: "YouTube" },
      { icon: <StickyNote className="size-4" />, label: "Notes" },
      { icon: <ImageIcon className="size-4" />, label: "Screenshots" },
    ],
  },
  {
    mascot: mascotAi,
    eyebrow: "AI Magic",
    headline: "AI Builds Your Learning System",
    subtext: "Get summaries, quizzes, spaced repetition, and personalized questions automatically.",
    accentBg: "from-orange-200/70 via-amber-100/60 to-transparent",
    chips: [
      { icon: <Sparkles className="size-4" />, label: "Extracting concepts" },
      { icon: <Brain className="size-4" />, label: "Generating cards" },
      { icon: <Zap className="size-4" />, label: "Creating quizzes" },
    ],
  },
  {
    mascot: mascotTrophy,
    eyebrow: "Results",
    headline: "Remember More. Study Less.",
    subtext: "Learn faster with daily review sessions, streaks, and smart memory training.",
    accentBg: "from-yellow-200/70 via-amber-100/60 to-transparent",
    chips: [
      { icon: <Repeat className="size-4" />, label: "Daily review" },
      { icon: <Flame className="size-4" />, label: "Streaks" },
      { icon: <Brain className="size-4" />, label: "Memory training" },
    ],
  },
];

function Onboarding() {
  const [i, setI] = useState(0);
  const s = screens[i];
  const isLast = i === screens.length - 1;

  return (
    <div className="min-h-screen w-full bg-[#fdfaf2] flex justify-center">
      <div className="relative w-full max-w-md min-h-screen flex flex-col overflow-hidden">
        {/* Soft radial accent */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b ${s.accentBg}`} />
        <div className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 size-64 rounded-full bg-yellow-200/40 blur-3xl" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-2">
            <img src={mascotLogo} alt="" className="size-9 rounded-full bg-white/70 p-1 shadow-sm" />
            <span className="font-bold tracking-tight text-foreground">PikaDecks</span>
          </div>
          {!isLast && (
            <button
              onClick={() => setI(screens.length - 1)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Skip
            </button>
          )}
        </header>

        {/* Hero mascot */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-4 pb-2">
          <div key={i} className="relative size-64 flex items-center justify-center animate-pika-pop">
            {/* halo */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-b from-amber-200/70 to-transparent blur-2xl" />
            {/* ground shadow */}
            <div className="absolute bottom-2 h-3 w-32 rounded-[50%] bg-amber-900/30 blur-md animate-shadow-pulse" />

            {/* orbiting sparkles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-orbit">
                <Sparkles className="size-5 text-amber-400 drop-shadow" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center [animation-delay:-2s]">
              <div className="animate-orbit [animation-duration:11s] [animation-direction:reverse]">
                <Zap className="size-4 text-orange-400 drop-shadow" />
              </div>
            </div>

            {/* mascot — bobs up and down */}
            <div className="relative animate-pika-float">
              <div className="animate-pika-breathe">
                <img
                  src={s.mascot}
                  alt=""
                  className="relative size-52 object-contain drop-shadow-[0_18px_18px_rgba(180,120,0,0.25)]"
                />
              </div>
            </div>

            {/* fixed sparkles */}
            <Sparkles className="absolute top-2 right-4 size-6 text-amber-400 animate-sparkle" />
            <Sparkles className="absolute bottom-8 left-2 size-5 text-yellow-500 animate-sparkle [animation-delay:600ms]" />
            <Sparkles className="absolute top-10 left-6 size-3 text-orange-300 animate-sparkle [animation-delay:1200ms]" />
          </div>
        </div>


        {/* Copy + chips */}
        <div className="relative z-10 px-6 pb-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 mb-2">
            {s.eyebrow}
          </p>
          <h1 className="text-[28px] leading-tight font-extrabold tracking-tight text-foreground">
            {s.headline}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground max-w-sm mx-auto">
            {s.subtext}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {s.chips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground shadow-sm border border-amber-100"
              >
                {c.icon}
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: progress + CTA */}
        <div className="relative z-10 px-6 pt-6 pb-8">
          <div className="flex items-center justify-center gap-2 mb-5">
            {screens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to screen ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-8 bg-amber-500" : "w-2 bg-amber-200"
                }`}
              />
            ))}
          </div>

          {!isLast ? (
            <Button
              onClick={() => setI(i + 1)}
              className="w-full h-14 rounded-2xl text-base font-bold bg-amber-400 hover:bg-amber-500 text-amber-950 shadow-[0_8px_0_-2px_rgb(234,179,8,0.6)] active:translate-y-0.5 active:shadow-[0_4px_0_-2px_rgb(234,179,8,0.6)] transition-all"
            >
              Continue
            </Button>
          ) : (
            <div className="space-y-3">
              <Button className="w-full h-14 rounded-2xl text-base font-bold bg-amber-400 hover:bg-amber-500 text-amber-950 shadow-[0_8px_0_-2px_rgb(234,179,8,0.6)] active:translate-y-0.5 active:shadow-[0_4px_0_-2px_rgb(234,179,8,0.6)] transition-all">
                <Upload className="size-5" />
                Get Started
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 rounded-2xl font-semibold border-amber-200 bg-white/70 hover:bg-white">
                  <PlayCircle className="size-4" />
                  Try Demo
                </Button>
                <Button variant="ghost" className="h-12 rounded-2xl font-semibold text-foreground hover:bg-amber-100/60">
                  Upload Content
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
