import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, ArrowRight } from "lucide-react";

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
              InnovateX<span className="text-indigo-500">.</span>
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

export default Navbar;
