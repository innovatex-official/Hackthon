import { useState, useEffect, type ReactNode, type MouseEvent } from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Code2,
  Cpu,
  Rocket,
  Palette,
  Leaf,
  Menu,
  X,
  ChevronDown,
  Trophy,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";

// --- Utility Hooks & Components ---

const useCountdown = (targetDate: number) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

// Spotlight Effect Component
function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-zinc-900/50 overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Schedule", href: "#schedule" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-white/10 py-4 shadow-2xl shadow-indigo-500/5"
            : "bg-transparent border-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-inset ring-indigo-500/20 group-hover:bg-indigo-500/30 transition-all">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              INNOVATEX<span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/5 mr-4 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200"
            >
              Register Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-white/80 transition-all" />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 bg-zinc-950 border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <button className="w-full py-3 bg-indigo-600 rounded-lg font-bold text-white">
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Sections ---

const Hero = () => {
  const timeLeft = useCountdown(new Date("March 15, 2025 09:00:00").getTime());

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[#020202]">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative container max-w-5xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 uppercase tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Registration Live for Batch '25
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 font-display"
        >
          Code the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Future
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Innovatex 2025 is the premier web development hackathon. Join 500+
          developers, designers, and creators to build the impossible in 24
          hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="h-12 px-8 rounded-full bg-white text-black font-bold text-base hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Apply on Devfolio
          </button>
          <button className="h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-base hover:bg-zinc-800 transition-colors flex items-center gap-2">
            <Globe className="w-4 h-4" /> View Documentation
          </button>
        </motion.div>

        {/* Stats / Countdown Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-zinc-900/50 backdrop-blur border border-white/5 p-4 rounded-xl"
            >
              <div className="text-3xl font-mono font-bold text-white mb-1">
                {value < 10 ? `0${value}` : value}
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

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

const Schedule = () => (
  <section id="schedule" className="py-24 bg-[#020202]">
    <div className="container max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold font-display mb-16 text-center">
        Event <span className="text-indigo-400">Timeline</span>
      </h2>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
        {[
          {
            time: "09:00 AM",
            title: "Check-in & Registration",
            desc: "Get your swag and find your team.",
          },
          {
            time: "11:00 AM",
            title: "Hacking Begins",
            desc: "The 24-hour countdown starts now.",
          },
          {
            time: "05:00 PM",
            title: "Mentorship Session",
            desc: "Industry experts review your progress.",
          },
          {
            time: "10:00 AM",
            title: "Final Demos",
            desc: "Showcase your project to the judges.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 group-hover:border-indigo-500 group-hover:bg-indigo-500/20 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">{item.title}</span>
                <span className="text-xs font-mono text-indigo-400">
                  {item.time}
                </span>
              </div>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who can participate?",
      a: "Any student with a valid ID card can participate. You don't need to be a pro developer; beginners are welcome!",
    },
    {
      q: "What is the team size?",
      a: "Teams can consist of 1 to 4 members. You can hack solo, but it's always more fun with a team!",
    },
    {
      q: "Is it free?",
      a: "Yes! Innovatex is completely free for all admitted participants.",
    },
    {
      q: "Do I need to stay for the full 24 hours?",
      a: "We recommend it for the full experience, but you are allowed to leave if necessary, provided you return for the final pitch.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#020202]">
      <div className="container max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">F.A.Q</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-lg bg-zinc-900/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-zinc-200">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function InnovatexLanding() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Prizes />
      <FAQ />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-sm">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-500/20 rounded-lg">
              <Code2 className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="font-bold text-zinc-200">INNOVATEX 2025</span>
          </div>
          <div className="text-zinc-500 text-center md:text-right">
            <p>&copy; 2025 Gyaniketan Tech Club. All rights reserved.</p>
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
