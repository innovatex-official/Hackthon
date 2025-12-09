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

export default Schedule;
