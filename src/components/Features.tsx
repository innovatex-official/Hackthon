import React from "react";
import { cn } from "../lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  Network,
  Globe as GlobeIcon,
  Code2,
  GitBranch,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Algorithmic Mastery",
      description:
        "Develop ultra-efficient algorithms. Optimize for time and space complexity in our competitive programming arenas.",
      skeleton: <SkeletonCode />,
      className:
        "col-span-1 lg:col-span-1 border-b lg:border-r dark:border-zinc-800",
    },
    {
      title: "Distributed Systems",
      description:
        "Architect fault-tolerant distributed systems. Master microservices, event-driven architecture, and consensus protocols.",
      skeleton: <SkeletonTerminal />,
      className: "border-b col-span-1 lg:col-span-1 dark:border-zinc-800",
    },
    {
      title: "Collaborative Engineering",
      description:
        "Simulate enterprise workflows. Use Git for version control, code reviews, and CI/CD pipelines in real-time.",
      skeleton: <SkeletonGit />,
      className: "col-span-1 lg:col-span-1 lg:border-r dark:border-zinc-800",
    },
    {
      title: "Global Scale Deployment",
      description:
        "Deploy to the edge. Ensure high availability and low latency for users across the globe using modern cloud infrastructure.",
      skeleton: <SkeletonGlobe />,
      className: "col-span-1 lg:col-span-1 border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-24 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white font-display">
          Engineering the <span className="text-indigo-500">Future</span>
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-zinc-500 text-center font-normal dark:text-zinc-400 font-mono">
          &gt; Initializing Hackathon Environment... <br />
          &gt; Accessing Premium Developer Tools...
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 xl:border rounded-md dark:border-zinc-800 bg-zinc-950/50 backdrop-blur-sm border-zinc-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full mt-4">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
      <p className="max-w-5xl text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug font-bold font-display">
        {children}
      </p>
    </div>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left",
        "text-zinc-500 font-normal dark:text-zinc-400",
        "text-left max-w-sm mx-0 md:text-sm my-2 font-mono leading-relaxed pl-4 border-l-2 border-zinc-800"
      )}
    >
      {children}
    </p>
  );
};

// --- Skeletons ---

// 1. Code Editor Visualization
export const SkeletonCode = () => {
  return (
    <div className="relative flex flex-col gap-2 h-full w-full p-4 bg-[#1e1e1e] rounded-lg border border-zinc-800 shadow-2xl font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-1.5 mb-2 border-b border-zinc-800 pb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="ml-auto text-zinc-500 text-[10px]">solution.cpp</div>
      </div>
      <div className="flex flex-col gap-1 text-zinc-300">
        <div className="flex">
          <span className="w-4 text-zinc-600">1</span>
          <span className="text-purple-400">#include</span>{" "}
          <span className="text-green-400">&lt;iostream&gt;</span>
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">2</span>
          <span className="text-purple-400">using</span>{" "}
          <span className="text-blue-400">namespace</span> std;
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">3</span>
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">4</span>
          <span className="text-blue-400">int</span>{" "}
          <span className="text-yellow-300">main</span>() {"{"}
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">5</span>
          <span className="pl-4 text-blue-400">auto</span>{" "}
          <span className="text-white">solve</span> = []() {"{"}
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">6</span>
          <span className="pl-8 text-zinc-400">// Optimized O(n log n)</span>
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">7</span>
          <span className="pl-8 text-purple-400">return</span>{" "}
          <span className="text-orange-400">true</span>;
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">8</span>
          <span className="pl-4">{"};"}</span>
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">9</span>
          <span className="text-purple-400">return</span>{" "}
          <span className="text-cyan-400">0</span>;
        </div>
        <div className="flex">
          <span className="w-4 text-zinc-600">10</span>
          <span>{"}"}</span>
        </div>
      </div>

      {/* Animated Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-indigo-500 mix-blend-overlay pointer-events-none"
      />
    </div>
  );
};

// 2. Terminal Visualization
export const SkeletonTerminal = () => {
  return (
    <div className="relative flex flex-col h-full w-full p-4 bg-zinc-950 rounded-lg border border-zinc-800 shadow-2xl font-mono text-xs overflow-hidden">
      <div className="flex items-center justify-between mb-2 text-zinc-500 text-[10px] border-b border-zinc-800 pb-2">
        <span>root@innovatex-server:~</span>
        <Terminal className="w-3 h-3" />
      </div>
      <div className="flex flex-col gap-1.5 text-zinc-300">
        <div className="opacity-50">
          <span className="text-green-500">➜</span>{" "}
          <span className="text-blue-400">~</span> docker-compose up -d --build
        </div>
        <div className="text-zinc-500 pl-4">
          [+] Building 0.4s (3/3) FINISHED
        </div>
        <div className="text-zinc-500 pl-4">
          {" "}
          {`=>`} [internal] load build definition
        </div>
        <div className="text-zinc-500 pl-4">
          {" "}
          {`=>`} [internal] load metadata for docker.io/library/node:20
        </div>
        <div className="text-green-400 pl-4">
          ✔ Container innovatex-api Started
        </div>
        <div className="text-green-400 pl-4">
          ✔ Container innovatex-db Started
        </div>
        <div className="text-green-400 pl-4">
          ✔ Container innovatex-web Started
        </div>
        <div className="mt-2">
          <span className="text-green-500">➜</span>{" "}
          <span className="text-blue-400">~</span>{" "}
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

// 3. Git Diagram Visualization
export const SkeletonGit = () => {
  return (
    <div className="relative flex flex-col h-full w-full p-4 bg-zinc-900 rounded-lg border border-zinc-800 shadow-2xl overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <GitBranch className="w-24 h-24 text-indigo-500" />
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        {/* Commit 1 */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-16 bg-zinc-800 rounded-full mx-1.5 relative">
            <div className="absolute top-0 w-2 h-2 rounded-full bg-zinc-600" />
            <div className="absolute bottom-0 w-2 h-2 rounded-full bg-indigo-500" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-zinc-800/50 p-2 rounded border border-zinc-700/50">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">
                JP
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-white">
                  feat: init project structure
                </span>
                <span className="text-[10px] text-zinc-500">2 hours ago</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/50 p-2 rounded border border-zinc-700/50">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-400">
                AK
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-white">
                  fix: api rate limiting
                </span>
                <span className="text-[10px] text-zinc-500">Just now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] border border-green-500/20">
            All checks passed
          </span>
          <span className="text-[10px] text-zinc-500">
            main branch deployed
          </span>
        </div>
      </div>
    </div>
  );
};

// 4. Globe Visualization
export const SkeletonGlobe = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1], // Darker base
      markerColor: [0.6, 0.2, 1], // Purple/Indigo markers
      glowColor: [0.2, 0.2, 0.3], // Subtle glow
      markers: [
        { location: [28.6139, 77.209], size: 0.1 }, // Delhi
        { location: [37.7749, -122.4194], size: 0.05 }, // SF
        { location: [51.5074, -0.1278], size: 0.05 }, // London
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
