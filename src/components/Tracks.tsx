import { cn } from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function Tracks() {
  const features = [
    {
      title: "FinTech Revolution",
      description:
        "Reimagine finance with blockchain and AI. Build the next generation of payments.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "HealthTech & Bio",
      description:
        "Solve critical healthcare challenges using data, IoT, and telemedicine solutions.",
      icon: <IconHeart />,
    },
    {
      title: "EdTech & Learning",
      description:
        "Transform education with personalized learning platforms and interactive tools.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Optimize infrastructure. Build resilient, scalable, and automated cloud systems.",
      icon: <IconCloud />,
    },
    {
      title: "Open Innovation",
      description:
        "No limits. Build whatever your heart desires. Just make it cool.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "AI & ML Agents",
      description:
        "Create autonomous agents that solve real-world problems with intelligence.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Cybersecurity",
      description:
        "Protect the digital world. Build tools for privacy, security, and safety.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Social Good",
      description:
        "Code for a cause. Build solutions that help non-profits and communities.",
      icon: <IconHelp />,
    },
  ];
  return (
    <section id="tracks" className="relative z-10 py-24 max-w-7xl mx-auto">
      <div className="mb-16 px-8">
        <h2 className="text-4xl font-bold font-display mb-4 text-white">
          Choose your <span className="text-purple-400">Path</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Select a track and build your masterpiece.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-zinc-800",
        (index === 0 || index === 4) && "lg:border-l border-zinc-800",
        index < 4 && "lg:border-b border-zinc-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-zinc-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-zinc-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-zinc-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-zinc-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-zinc-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
