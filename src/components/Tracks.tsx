import { Rocket, Leaf, Palette, Cpu } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const Tracks = () => (
  <section id="tracks" className="py-24 bg-zinc-950">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-bold font-display mb-4">
          Choose your <span className="text-purple-400">Path</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Four distinct tracks designed to challenge your creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "EdTech",
            icon: Rocket,
            color: "bg-blue-500",
            desc: "Revolutionize learning with interactive platforms.",
          },
          {
            title: "Social Good",
            icon: Leaf,
            color: "bg-green-500",
            desc: "Solve real community problems with code.",
          },
          {
            title: "Creative UI",
            icon: Palette,
            color: "bg-purple-500",
            desc: "Push pixel-perfect boundaries of interaction.",
          },
          {
            title: "Open Innovation",
            icon: Cpu,
            color: "bg-orange-500",
            desc: "No limits. Build your wildest ideas.",
          },
        ].map((track, idx) => (
          <SpotlightCard key={idx} className="p-8 h-full">
            <div
              className={`w-12 h-12 rounded-lg ${track.color} bg-opacity-20 flex items-center justify-center mb-6`}
            >
              <track.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{track.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {track.desc}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  </section>
);

export default Tracks;
