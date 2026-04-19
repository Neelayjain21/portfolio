"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Database,
  Github,
  Linkedin,
  Mail,
  Layers,
  Wrench,
  Globe,
} from "lucide-react";

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: "Production Engineering — L&T PES",
    category: "Aerospace Fixtures",
    desc: "Validated 450 MT & 24 MT lifting fixtures using NX FEA, Solid Edge and GD&T for shop-floor integration.",
    tech: "NX FEA · Solid Edge · GD&T",
    icon: <Wrench size={20} className="text-[#FFA500]" />,
    href: "/lnt_report",
    isReport: true,
  },
  {
    id: 2,
    title: "Cross-Axis Wind Turbine (CAWT)",
    category: "Renewable Energy",
    desc: "Hybrid 3V+6H PETG blade prototype with 5:1 planetary gearbox optimized for urban environments.",
    tech: "SolidWorks · Wind Energy",
    icon: <Layers size={20} className="text-[#FFA500]" />,
    href: "/projects#cawt",
  },
  {
    id: 3,
    title: "Condition Monitoring of Ball Bearings",
    category: "Research (ICRAM 2025)",
    desc: "CNN-based thermal imaging model classifying 6 bearing conditions with ~99.8% accuracy.",
    tech: "TensorFlow · Thermal Imaging",
    icon: <Database size={20} className="text-[#FFA500]" />,
    href: "/projects#bearing-ai",
  },
  {
    id: 4,
    title: "SPECTRA — Exoplanet Detection",
    category: "NASA Space Apps",
    desc: "AI-powered exoplanet detection web app built with React + Flask using Kepler mission data.",
    tech: "XGBoost · React · Flask",
    icon: <Globe size={20} className="text-[#FFA500]" />,
    href: "/projects#spectra",
  },
];

// --- ANIMATION CONFIG ---
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "circOut" },
  },
};

export default function HomePage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Global Mouse Tracking (Disabled on touch devices ideally, but harmless here)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeProject = projects[currentProject];

  return (
    // UPDATED: Changed h-screen to min-h-screen and enabled overflow-y-auto for mobile scrolling
    <main className="w-full min-h-screen lg:h-screen bg-[#000000] p-2 md:p-6 overflow-y-auto lg:overflow-hidden flex items-center justify-center font-sans selection:bg-[#FFA500] selection:text-black">

      {/* --- GLOBAL MOUSE TRACKING GLOW --- */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 165, 0, 0.06), transparent 60%)`
        }}
      />

      {/* INNER CARD */}
      {/* UPDATED: h-full changed to min-h-full to allow growth on mobile */}
      <div className="relative w-full min-h-full lg:h-full max-w-[1600px] bg-[#0A0A0A] rounded-[30px] lg:rounded-[40px] border border-white/5 overflow-visible lg:overflow-hidden flex flex-col shadow-2xl z-20 pb-8 lg:pb-0">

        {/* --- BACKGROUND FX --- */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
          style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-[-10%] left-[20%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#FFA500]/7 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[10%] w-[300px] lg:w-[420px] h-[300px] lg:h-[420px] bg-[#FFA500]/4 rounded-full blur-[80px] lg:blur-[130px] pointer-events-none" />

        {/* --- HEADER ROW --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center w-full px-6 md:px-12 pt-6 md:pt-10 z-20 shrink-0 mb-4 lg:mb-0"
        >
          {/* ABOUT BUTTON */}
          <Link href="/about" className="group relative px-5 py-2 lg:px-6 lg:py-2.5 bg-[#111] rounded-full border border-white/10 overflow-hidden transition-all hover:border-[#FFA500]/50 hover:shadow-[0_0_20px_rgba(255,165,0,0.3)] cursor-pointer z-40">
            <div className="absolute inset-0 bg-[#FFA500] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            <span className="relative z-10 flex items-center gap-2 text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-black transition-colors" />
              ABOUT
            </span>
          </Link>

          {/* PROJECTS BUTTON */}
          <Link href="/projects" className="group relative px-5 py-2 lg:px-6 lg:py-2.5 bg-[#111] rounded-full border border-white/10 overflow-hidden transition-all hover:border-[#FFA500]/50 hover:shadow-[0_0_20px_rgba(255,165,0,0.3)] cursor-pointer z-40">
            <div className="absolute inset-0 bg-[#FFA500] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
            <span className="relative z-10 flex items-center gap-2 text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">
              PROJECTS <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 hidden sm:block" />
            </span>
          </Link>
        </motion.div>

        {/* --- MAIN GRID --- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 px-6 md:px-12 pb-8 items-center relative z-10"
        >
          
          {/* === CENTER COLUMN (Mobile: Order 1 - First Visual Impact) === */}
          <div className="lg:col-span-6 h-auto lg:h-full flex flex-col items-center justify-center order-1 lg:order-2 relative mt-4 lg:mt-0">

            {/* Headline */}
            <motion.h1 variants={itemAnim} className="text-[13vw] sm:text-7xl lg:text-7xl xl:text-8xl font-black text-white text-center leading-[0.9] tracking-tighter mb-6 lg:mb-8 z-20 mix-blend-screen">
              NEELAY <br />
              <span className="relative z-10 inline-block">
                JAIN
                <svg className="absolute w-[105%] h-4 lg:h-6 -bottom-1 lg:-bottom-2 -left-2 text-[#FFA500] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 25 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Image */}
            <motion.div variants={itemAnim} className="relative w-full max-w-[320px] lg:max-w-[400px] h-[350px] sm:h-[45vh] lg:h-[55vh] z-10">
              <div className="absolute inset-0 bg-[#FFA500] rounded-t-full blur-[80px] opacity-10" />
              <div className="absolute inset-0 rounded-t-full overflow-hidden border border-white/10 border-b-0 bg-[#111]">
                <Image src="/me2.jpg" alt="Neelay Jain" fill className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500" priority />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[size:100%_2px,3px_100%] pointer-events-none" />
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute bottom-6 -left-4 lg:bottom-8 lg:-left-8 bg-[#000]/80 backdrop-blur-md border border-[#333] px-4 py-3 rounded-lg flex items-center gap-3 z-30 shadow-xl">
                <div className="bg-[#FFA500] p-2 rounded-full text-black"><Wrench size={14} /></div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">Primary Domain</p>
                  <p className="text-xs font-bold text-white">Mechanical Engineering</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* === LEFT COLUMN (Mobile: Order 2 - Details) === */}
          <div className="lg:col-span-3 flex flex-col justify-center h-auto lg:h-full gap-6 order-2 lg:order-1">

            {/* Header / Name */}
            <motion.div variants={itemAnim} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FFA500] shadow-[0_0_15px_rgba(255,165,0,0.2)]">
                <Sparkles size={18} />
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-white tracking-wide">Precision Intelligence</h2>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Mechanical Systems · Online</p>
              </div>
            </motion.div>

            {/* Focus Card */}
            <motion.div variants={itemAnim} className="bg-[#111] p-6 rounded-2xl border border-white/5 relative group hover:border-[#FFA500]/30 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-[#FFA500]">
                <Layers size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Core Engineering Focus</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Mechanical Design • FEA • Manufacturing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Foundation in heavy-duty fixtures, CAD modeling, structural validation, GD&amp;T and DFM. AI and data science support this work through simulations and predictive analytics.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemAnim} className="flex gap-3 z-40">
              <a href="https://www.linkedin.com/in/neelayjain02" target="_blank" rel="noreferrer" className="flex-1 lg:flex-none h-12 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#FFA500] hover:border-[#FFA500]/50 hover:bg-[#FFA500]/5 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Neelayjain02" target="_blank" rel="noreferrer" className="flex-1 lg:flex-none h-12 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#FFA500] hover:border-[#FFA500]/50 hover:bg-[#FFA500]/5 transition-all">
                <Github size={20} />
              </a>
              <a href="mailto:neelayjain957@gmail.com" className="flex-1 lg:flex-none h-12 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#FFA500] hover:border-[#FFA500]/50 hover:bg-[#FFA500]/5 transition-all">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* === RIGHT COLUMN (Mobile: Order 3 - Projects) === */}
          <div className="lg:col-span-3 flex flex-col justify-center h-auto lg:h-full gap-6 order-3 lg:order-3 mb-8 lg:mb-0">

            {/* Tech Stack */}
            <motion.div variants={itemAnim} className="flex flex-wrap justify-start lg:justify-end gap-2">
              {["SolidWorks / NX", "ANSYS", "GD&T / DFM", "Manufacturing", "Python / ML", "MATLAB"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg border border-white/5 bg-[#111] text-[10px] font-bold text-gray-400 uppercase tracking-wide hover:text-white hover:border-[#FFA500]/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Dynamic Card (Carousel) */}
            <div className="relative h-[240px] w-full z-40">
              <AnimatePresence mode="wait">
                <Link
                  href={activeProject.href || "#"}
                  className="absolute inset-0 block"
                  target={activeProject.isReport ? "_blank" : "_self"}
                >
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-[#111] border border-white/10 p-6 rounded-2xl flex flex-col justify-between group hover:border-[#FFA500]/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(255,165,0,0.1)]"
                  >
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-[#1A1A1A] rounded-lg text-[#FFA500]">{activeProject.icon}</div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">0{activeProject.id}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFA500] transition-colors">{activeProject.title}</h4>
                      <p className="text-xs text-gray-400 line-clamp-3">{activeProject.desc}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                        <span>{activeProject.tech}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
                        <motion.div key={`bar-${activeProject.id}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 4, ease: "linear" }} className="h-full bg-[#FFA500]" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <motion.div variants={itemAnim} className="flex justify-center lg:justify-end gap-1.5 z-40">
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentProject(idx)}
                  className={`h-1 transition-all duration-300 rounded-full ${currentProject === idx ? "w-8 bg-[#FFA500]" : "w-2 bg-[#333] hover:bg-[#555]"}`}
                  aria-label={project.title}
                />
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
