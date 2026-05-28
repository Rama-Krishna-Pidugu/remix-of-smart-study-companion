import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import mascotLogo from "@/assets/mascot-logo.png";
import { Sparkles, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PikaDecks — Turn Anything Into Flashcards" },
      { name: "description", content: "Smart AI flashcards from anything you upload." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Android splash spec: short, dismiss as soon as app is ready (~1.8s here)
    const leaveT = setTimeout(() => setLeaving(true), 1600);
    const goT = setTimeout(() => navigate({ to: "/onboarding" }), 2100);
    return () => {
      clearTimeout(leaveT);
      clearTimeout(goT);
    };
  }, [navigate]);

  return (
    <div
      className={`min-h-screen w-full flex justify-center bg-[#fdfaf2] transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-md min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient amber wash — matches Android splash windowBackground pattern */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-200/60 via-yellow-100/40 to-transparent" />
        <div className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-amber-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 size-72 rounded-full bg-yellow-200/50 blur-3xl" />

        {/* Centered brand icon (Android splash: single centered icon) */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative size-40 flex items-center justify-center">
            {/* expanding halo */}
            <div className="absolute inset-0 rounded-full bg-amber-300/40 blur-2xl animate-splash-halo" />
            <div className="absolute inset-4 rounded-full bg-white/60 backdrop-blur-sm shadow-[0_20px_50px_-12px_rgba(180,120,0,0.45)]" />

            {/* orbiting sparkles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-orbit [animation-duration:6s]">
                <Sparkles className="size-5 text-amber-500 drop-shadow" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-orbit [animation-duration:9s] [animation-direction:reverse]">
                <Zap className="size-4 text-orange-400 drop-shadow" />
              </div>
            </div>

            {/* logo */}
            <img
              src={mascotLogo}
              alt="PikaDecks"
              className="relative size-28 object-contain animate-splash-pop drop-shadow-[0_14px_18px_rgba(180,120,0,0.35)]"
            />
          </div>

          {/* Wordmark */}
          <div className="mt-8 flex flex-col items-center animate-splash-rise">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
              PikaDecks
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Learn anything. Remember everything.
            </p>
          </div>
        </div>

        {/* Loading dots pinned to bottom */}
        <div className="absolute bottom-12 z-10 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-amber-500 animate-splash-dot" />
          <span className="size-2 rounded-full bg-amber-500 animate-splash-dot [animation-delay:150ms]" />
          <span className="size-2 rounded-full bg-amber-500 animate-splash-dot [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
