import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

export default FAQ;
