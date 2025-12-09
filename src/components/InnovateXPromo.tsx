import React from "react";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { ArrowRight } from "lucide-react";

export default function InnovateXPromo() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center overflow-hidden rounded-xl my-20 border border-zinc-800 bg-black">
      {/* Background Effect */}
      <DottedGlowBackground
        className="pointer-events-none absolute inset-0 opacity-40"
        gap={12}
        radius={1.5}
        color="rgba(100, 100, 100, 0.5)"
        glowColor="rgba(99, 102, 241, 0.8)" // Indigo glow
        opacity={1}
        speedMin={0.3}
        speedMax={1.0}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row md:text-left md:space-y-0">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-display font-medium tracking-tight text-white sm:text-5xl">
            Experience the{" "}
            <span className="text-indigo-500 font-bold">Future</span> of Coding?
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-light max-w-lg">
            Join the InnovateX ecosystem. Visit our main hub for resources,
            updates, and more.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row shadow-2xl">
          <a
            href="https://gyanniketan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95"
          >
            Visit Main Site{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
