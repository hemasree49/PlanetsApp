/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Info,
  Orbit,
  Weight,
  Maximize,
  Waves,
  Moon,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Search,
  ArrowRight,
  Rocket,
  Database,
  Menu,
  X,
} from "lucide-react";
import { PLANETS } from "./constants";
import { Planet, Mission } from "./types";

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState < Planet > PLANETS[0];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] =
    (useState < "exploration") | "missions" | ("data" > "exploration");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredPlanets = PLANETS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getOrdinal = (n) => `${n}${[, "st", "nd", "rd"][n] || "th"}`;
  const navigate = (dir) => {
    const idx = PLANETS.findIndex((p) => p.name === selectedPlanet.name);
    setSelectedPlanet(PLANETS[(idx + dir + PLANETS.length) % PLANETS.length]);
  };

  const SearchInput = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      <input
        type="text"
        placeholder="Search planets..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 ring-indigo-500/50 transition-all w-full"
      />
      {searchQuery && (
        <div className="absolute top-full mt-2 left-0 right-0 glass-card overflow-hidden z-50">
          {filteredPlanets.length > 0 ? (
            filteredPlanets.map((p) => (
              <button
                key={p.name}
                onClick={() => {
                  setSelectedPlanet(p);
                  setSearchQuery("");
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{p.name}</span>
                <span className="text-[10px] opacity-50 uppercase">
                  {getOrdinal(p.position)} Planet
                </span>
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-sm opacity-50 italic">
              No planets found
            </div>
          )}
        </div>
      )}
    </div>
  );

  const tabs = ["exploration", "missions", "data"];

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#020617]">
      {/* Background Elements */}
      <div className="nebula-bg" />
      <div className="nebula-texture" />
      <motion.div
        animate={{
          background: `radial-gradient(circle at 50% 30%, ${selectedPlanet.color}22 0%, transparent 60%), radial-gradient(circle at 10% 80%, ${selectedPlanet.color}11 0%, transparent 50%)`,
        }}
        className="atmosphere"
      />
      <div className="stars-bg fixed inset-0 pointer-events-none twinkle" />
      <div className="stars-bg-2 fixed inset-0 pointer-events-none" />
      <div className="stars-bg-3 fixed inset-0 pointer-events-none" />

      {/* Shooting Stars & Meteoroids */}
      {[0, 7, 12].map((delay, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${10 + i * 25}%`,
            left: `${10 + i * 20}%`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      {[10, 25, 40, 60, 80, 95].map((left, i) => (
        <div
          key={i}
          className="meteoroid"
          style={{ left: `${left}%`, animationDelay: `${i * 1.5}s` }}
        >
          <div className="meteoroid-glow" />
        </div>
      ))}

      {/* Observer Silhouette */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="fixed bottom-0 right-0 z-0 pointer-events-none hidden lg:block"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800&q=80"
            alt="Observer"
            className="w-[30vw] h-auto object-contain mix-blend-screen grayscale brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Navigation Header */}
      <header className="relative z-50 px-6 py-8 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">{/* Logo removed */}</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`transition-opacity capitalize ${activeTab === tab ? "opacity-100 border-b-2 border-indigo-500" : "opacity-60 hover:opacity-100"}`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <SearchInput className="hidden sm:block w-40 md:w-64" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 glass-card"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["exploration", "missions", "data"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`text-2xl font-bold uppercase tracking-widest ${activeTab === tab ? "text-indigo-500" : "text-white"}`}
              >
                {tab}
              </button>
            ))}
            <SearchInput className="w-64 mt-8" />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 gap-12 max-w-7xl mx-auto w-full py-12">
        {/* Planet Visual Section */}
        <div className="flex-1 flex flex-col items-center justify-center relative w-full lg:w-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlanet.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: [0, -15, 0],
              }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative"
            >
              {/* Decorative Rings removed */}

              <div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full relative overflow-hidden shadow-2xl group"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${selectedPlanet.color}, #000)`,
                  boxShadow: `0 0 80px ${selectedPlanet.color}22`,
                }}
              >
                <motion.img
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={selectedPlanet.image}
                  alt={selectedPlanet.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  referrerPolicy="no-referrer"
                />

                {/* Atmosphere/Shadow Layer */}
                <div className="absolute inset-0 bg-linear-to-tr from-black/80 via-transparent to-white/20" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedPlanet.name}-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {activeTab === "exploration" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-widest uppercase">
                      <Sparkles className="w-3 h-3" />
                      <span>
                        {getOrdinal(selectedPlanet.position)} Planet from the
                        Sun
                      </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                      {selectedPlanet.name}
                    </h2>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md">
                      {selectedPlanet.description}
                    </p>
                    {selectedPlanet.additionalInfo && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 glass-card border-l-2 border-indigo-500/50 bg-indigo-500/5"
                      >
                        <p className="text-xs md:text-sm italic text-white/60 leading-relaxed">
                          <span className="text-indigo-400 font-bold uppercase text-[10px] block mb-1">
                            Observation Note
                          </span>
                          {selectedPlanet.additionalInfo}
                        </p>
                      </motion.div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      {
                        icon: <Maximize className="w-4 h-4" />,
                        label: "Diameter",
                        value: selectedPlanet.diameter,
                      },
                      {
                        icon: <Weight className="w-4 h-4" />,
                        label: "Mass",
                        value: selectedPlanet.mass,
                      },
                      {
                        icon: <Waves className="w-4 h-4" />,
                        label: "Gravity",
                        value: selectedPlanet.gravity,
                      },
                      {
                        icon: <Orbit className="w-4 h-4" />,
                        label: "Distance",
                        value: selectedPlanet.distanceFromSun,
                      },
                      {
                        icon: <Orbit className="w-4 h-4" />,
                        label: "Orbit",
                        value: selectedPlanet.orbitalPeriod,
                      },
                      {
                        icon: <Moon className="w-4 h-4" />,
                        label: "Moons",
                        value: String(selectedPlanet.moons),
                      },
                    ].map((s, i) => (
                      <StatItem key={i} {...s} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "missions" && (
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
                    Missions
                  </h2>
                  <div className="space-y-4">
                    {selectedPlanet.missions.map((m, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 10 }}
                        className="glass-card p-4 flex items-center justify-between group hover:bg-white/10 transition-colors"
                      >
                        <div>
                          <p className="text-xs font-bold text-indigo-400 uppercase">
                            {m.agency}
                          </p>
                          <p className="text-lg font-bold">{m.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs opacity-50">{m.year}</p>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.status === "Active" ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-white/60"}`}
                          >
                            {m.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "data" && (
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
                    Technical Data
                  </h2>
                  <div className="glass-card overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-white/5">
                        {[
                          { label: "Mass", value: selectedPlanet.mass },
                          { label: "Diameter", value: selectedPlanet.diameter },
                          { label: "Gravity", value: selectedPlanet.gravity },
                          {
                            label: "Distance from Sun",
                            value: selectedPlanet.distanceFromSun,
                          },
                          {
                            label: "Orbital Period",
                            value: selectedPlanet.orbitalPeriod,
                          },
                          {
                            label: "Number of Moons",
                            value: String(selectedPlanet.moons),
                          },
                          {
                            label: "Planet Order",
                            value: getOrdinal(selectedPlanet.position),
                          },
                        ].map((r, i) => (
                          <DataRow key={i} {...r} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <button
                onClick={() => navigate(1)}
                className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-indigo-500 hover:text-white transition-all group w-full sm:w-auto justify-center"
              >
                Next Planet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Planet Selector Footer */}
      <footer className="relative z-10 px-6 py-8 md:py-12 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Select Destination
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {filteredPlanets.map((planet) => (
              <button
                key={planet.name}
                onClick={() => {
                  setSelectedPlanet(planet);
                  setActiveTab("exploration");
                }}
                className={`shrink-0' group relative ${selectedPlanet.name === planet.name ? "w-40 md:w-48" : "w-24 md:w-32"} transition-all duration-500`}
              >
                <div
                  className={`
                    aspect-video rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-500 relative
                  `}
                  style={{
                    borderColor:
                      selectedPlanet.name === planet.name
                        ? planet.color
                        : "rgba(255, 255, 255, 0.1)",
                    boxShadow:
                      selectedPlanet.name === planet.name
                        ? `0 0 20px ${planet.color}66`
                        : "none",
                  }}
                >
                  {selectedPlanet.name === planet.name && (
                    <motion.div
                      layoutId="active-glow"
                      className="absolute inset-0 z-10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        boxShadow: [
                          `inset 0 0 0px ${planet.color}`,
                          `inset 0 0 20px ${planet.color}`,
                          `inset 0 0 0px ${planet.color}`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                      {planet.name}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

class StatItemProps {
  icon;
  label;
  value;
}
const StatItem = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    className="glass-card p-3 md:p-4 flex flex-col gap-1 cursor-default"
  >
    <div className="flex items-center gap-2 text-white/40">
      {icon}
      <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest">
        {label}
      </span>
    </div>
    <p className="text-xs md:text-sm font-mono font-medium truncate">{value}</p>
  </motion.div>
);

const DataRow = ({ label, value }) => (
  <motion.tr
    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", x: 5 }}
    className="group transition-colors cursor-default"
  >
    <td className="py-3 px-4 text-white/40 font-bold uppercase tracking-widest text-[10px]">
      {label}
    </td>
    <td className="py-3 px-4 font-mono text-indigo-300">{value}</td>
  </motion.tr>
);
