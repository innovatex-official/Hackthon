import { motion } from "framer-motion";
import { Zap, Trophy } from "lucide-react";

const About = () => (
  <section id="about" className="py-24 bg-[#020202] relative">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            More than just a <span className="text-indigo-500">Hackathon.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Innovatex is where the code meets creativity. We provide the
            infrastructure, food, and mentorship—you provide the brilliance.
            Whether you're a backend wizard or a frontend artist, this is your
            canvas.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/30 border border-white/5">
              <Zap className="text-yellow-400 w-6 h-6" />
              <span className="text-2xl font-bold">24h</span>
              <span className="text-sm text-zinc-500">Non-stop Hacking</span>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-900/30 border border-white/5">
              <Trophy className="text-purple-400 w-6 h-6" />
              <span className="text-2xl font-bold">₹50k+</span>
              <span className="text-sm text-zinc-500">Prize Pool</span>
            </div>
          </div>
        </div>

        {/* VS Code Style Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700 shadow-2xl shadow-black/50 font-mono text-sm"
        >
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#333]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-4 text-zinc-400 text-xs">
              innovatex.config.ts
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 overflow-x-auto text-gray-300 leading-6">
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                1
              </span>
              <span>
                <span className="text-purple-400">import</span>{" "}
                <span className="text-yellow-300">{`{ Hackathon }`}</span>{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'@innovatex/core'</span>;
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                2
              </span>
              <span></span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                3
              </span>
              <span>
                <span className="text-purple-400">export const</span>{" "}
                <span className="text-blue-400">config</span> ={" "}
                <span className="text-yellow-300">new</span>{" "}
                <span className="text-blue-300">Hackathon</span>({`{`}
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                4
              </span>
              <span className="pl-4">
                name: <span className="text-green-400">'Innovatex 2025'</span>,
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                5
              </span>
              <span className="pl-4">
                location:{" "}
                <span className="text-green-400">'Gyaniketan Campus'</span>,
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                6
              </span>
              <span className="pl-4">
                tracks: [<span className="text-green-400">'Web3'</span>,{" "}
                <span className="text-green-400">'AI/ML'</span>,{" "}
                <span className="text-green-400">'SaaS'</span>],
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                7
              </span>
              <span className="pl-4">
                mode: <span className="text-orange-400">'Offline'</span>,
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                8
              </span>
              <span>{`});`}</span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                9
              </span>
              <span></span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                10
              </span>
              <span>
                <span className="text-zinc-500">// Initialize Event</span>
              </span>
            </div>
            <div className="flex">
              <span className="text-zinc-600 select-none w-8 text-right mr-4">
                11
              </span>
              <span>
                <span className="text-blue-400">config</span>.
                <span className="text-yellow-300">launch</span>();{" "}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
