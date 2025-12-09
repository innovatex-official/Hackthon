import { Sparkles } from "lucide-react";

const Prizes = () => (
  <section
    id="prizes"
    className="py-24 bg-gradient-to-b from-zinc-950 to-black"
  >
    <div className="container max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-display mb-4">
          Rewards & <span className="text-pink-500">Perks</span>
        </h2>
        <p className="text-zinc-400">
          Total prize pool worth ₹50,000 + Internship Opportunities
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-end">
        {/* Runner Up */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-zinc-900/40 text-center hover:-translate-y-2 transition-transform duration-500">
          <div className="text-5xl mb-4">🥈</div>
          <h3 className="text-xl font-bold mb-2 text-zinc-300">Runner Up</h3>
          <p className="text-3xl font-bold text-white mb-6">₹15,000</p>
          <ul className="text-sm text-zinc-400 space-y-3">
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-zinc-500" /> Silver Certificate
            </li>
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-zinc-500" /> Tech Gadgets
            </li>
          </ul>
        </div>

        {/* Winner */}
        <div className="relative p-10 rounded-2xl border border-yellow-500/30 bg-gradient-to-b from-yellow-500/10 to-zinc-900/40 text-center -translate-y-4 shadow-[0_0_50px_rgba(234,179,8,0.1)]">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider">
            Champion
          </div>
          <div className="text-6xl mb-6">🏆</div>
          <h3 className="text-2xl font-bold mb-2 text-white">Winner</h3>
          <p className="text-5xl font-bold text-yellow-400 mb-8">₹25,000</p>
          <ul className="text-sm text-zinc-300 space-y-3 font-medium">
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" /> Gold Certificate
            </li>
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" /> Mechanical
              Keyboards
            </li>
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" /> Incubation
              Support
            </li>
          </ul>
        </div>

        {/* Second Runner Up */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-zinc-900/40 text-center hover:-translate-y-2 transition-transform duration-500">
          <div className="text-5xl mb-4">🥉</div>
          <h3 className="text-xl font-bold mb-2 text-zinc-300">
            2nd Runner Up
          </h3>
          <p className="text-3xl font-bold text-white mb-6">₹10,000</p>
          <ul className="text-sm text-zinc-400 space-y-3">
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-zinc-500" /> Bronze Certificate
            </li>
            <li className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-zinc-500" /> Swag Kits
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Prizes;
