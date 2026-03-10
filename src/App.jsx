import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Orbit,
  Weight,
  Maximize,
  Waves,
  Moon,
  Sparkles,
  Search,
  ArrowRight,
  Clock,
  Navigation2,
  Thermometer,
} from "lucide-react";

const PLANETS = [
  {
    name: "Mercury",
    position: 1,
    color: "#9CA3AF",
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800",
    description:
      "The smallest planet in our solar system and the closest to the Sun. It is only slightly larger than Earth's Moon.",
    diameter: "4,879 km",
    mass: "3.28 × 10²³ kg",
    gravity: "3.7 m/s²",
    distanceFromSun: "57.9M km",
    orbitalPeriod: "88 Days",
    moons: 0,
    temp: "167°C",
  },
  {
    name: "Venus",
    position: 2,
    color: "#FBBF24",
    image:
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=800",
    description:
      "Often called Earth's twin because of their similar size. Venus has a thick, toxic atmosphere that traps heat.",
    diameter: "12,104 km",
    mass: "4.87 × 10²⁴ kg",
    gravity: "8.9 m/s²",
    distanceFromSun: "108.2M km",
    orbitalPeriod: "225 Days",
    moons: 0,
    temp: "464°C",
  },
  {
    name: "Earth",
    position: 3,
    color: "#3B82F6",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800",
    description:
      "Our home planet is the only place we know of so far that’s inhabited by living things and has liquid water.",
    diameter: "12,742 km",
    mass: "5.97 × 10²⁴ kg",
    gravity: "9.8 m/s²",
    distanceFromSun: "149.6M km",
    orbitalPeriod: "365 Days",
    moons: 1,
    temp: "15°C",
  },
  {
    name: "Mars",
    position: 4,
    color: "#EF4444",
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800",
    description:
      "The Red Planet is a dusty, cold, desert world with a very thin atmosphere and seasonal changes.",
    diameter: "6,779 km",
    mass: "6.39 × 10²³ kg",
    gravity: "3.7 m/s²",
    distanceFromSun: "227.9M km",
    orbitalPeriod: "687 Days",
    moons: 2,
    temp: "-65°C",
  },
  {
    name: "Jupiter",
    position: 5,
    color: "#D97706",
    image:
      "https://images.unsplash.com/photo-1630834727033-9e8a93796397?q=80&w=800",
    description:
      "The largest planet in our solar system—twice as massive as all the other planets combined.",
    diameter: "139,820 km",
    mass: "1.90 × 10²⁷ kg",
    gravity: "24.8 m/s²",
    distanceFromSun: "778.5M km",
    orbitalPeriod: "12 Years",
    moons: 79,
    temp: "-110°C",
  },
  {
    name: "Saturn",
    position: 6,
    color: "#EAB308",
    image:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=800",
    description:
      "Adorned with a dazzling, complex system of icy rings, Saturn is a gas giant made mostly of hydrogen.",
    diameter: "116,460 km",
    mass: "5.68 × 10²⁶ kg",
    gravity: "10.4 m/s²",
    distanceFromSun: "1.4B km",
    orbitalPeriod: "29 Years",
    moons: 82,
    temp: "-140°C",
  },
  {
    name: "Uranus",
    position: 7,
    color: "#22D3EE",
    image:
      "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=800",
    description:
      "An ice giant that rotates at a nearly 90-degree angle from the plane of its orbit, appearing to spin on its side.",
    diameter: "50,724 km",
    mass: "8.68 × 10²⁵ kg",
    gravity: "8.7 m/s²",
    distanceFromSun: "2.9B km",
    orbitalPeriod: "84 Years",
    moons: 27,
    temp: "-195°C",
  },
  {
    name: "Neptune",
    position: 8,
    color: "#6366F1",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea206f25bc?q=80&w=800",
    description:
      "The most distant major planet orbiting our Sun. It is dark, cold, and whipped by supersonic winds.",
    diameter: "49,244 km",
    mass: "1.02 × 10²⁶ kg",
    gravity: "11.1 m/s²",
    distanceFromSun: "4.5B km",
    orbitalPeriod: "165 Years",
    moons: 14,
    temp: "-201°C",
  },
];

export default function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(PLANETS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMissions, setShowMissions] = useState(false);
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const navigateNext = () => {
    const idx = PLANETS.findIndex((p) => p.name === selectedPlanet.name);
    const nextIdx = (idx + 1) % PLANETS.length;
    setSelectedPlanet(PLANETS[nextIdx]);
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#020617] text-white"
      style={{ "--planet-color": selectedPlanet.color }}
    >
      {/* Background VFX */}
      <div className="nebula-bg" />
      <div className="stars-bg fixed inset-0 pointer-events-none twinkle" />
      <div className="scan-line" />

      {[0, 7, 15].map((delay, i) => (
        <div
          key={`star-${i}`}
          className="shooting-star"
          style={{
            top: `${15 + i * 20}%`,
            left: `${10 + i * 25}%`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-50 px-8 py-8 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: selectedPlanet.color }}
          >
            <Orbit className="w-6 h-6 text-[#020617]" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter uppercase">
            Cosmos
          </span>
        </div>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search universe..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => {
              const value = e.target.value;
              setSearchQuery(value);

              const foundPlanet = PLANETS.find((planet) =>
                planet.name.toLowerCase().includes(value.toLowerCase()),
              );

              if (foundPlanet) {
                setSelectedPlanet(foundPlanet);
              }
            }}
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col lg:flex-row items-center justify-center px-8 gap-16 max-w-7xl mx-auto w-full py-6">
        <div className="flex-1 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlanet.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 0.8,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative"
            >
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] rounded-full relative overflow-hidden transition-all duration-1000 planet-glow"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${selectedPlanet.color} 0%, #000 70%)`,
                }}
              >
                <img
                  src={selectedPlanet.image}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  alt={selectedPlanet.name}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex-1 w-full max-w-xl space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlanet.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.4em] uppercase"
                style={{ color: selectedPlanet.color }}
              >
                <Sparkles className="w-3 h-3" />
                <span>{getOrdinal(selectedPlanet.position)} Planet</span>
              </div>
              <h1 className="text-8xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">
                {selectedPlanet.name}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                {selectedPlanet.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <StatItem
                  icon={<Maximize />}
                  label="Diameter"
                  value={selectedPlanet.diameter}
                />
                <StatItem
                  icon={<Weight />}
                  label="Mass"
                  value={selectedPlanet.mass}
                />
                <StatItem
                  icon={<Waves />}
                  label="Gravity"
                  value={selectedPlanet.gravity}
                />
                <StatItem
                  icon={<Navigation2 />}
                  label="Distance"
                  value={selectedPlanet.distanceFromSun}
                />
                <StatItem
                  icon={<Clock />}
                  label="Orbit"
                  value={selectedPlanet.orbitalPeriod}
                />
                <StatItem
                  icon={<Thermometer />}
                  label="Avg Temp"
                  value={selectedPlanet.temp}
                />
              </div>

              <button
                onClick={navigateNext}
                className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform flex items-center gap-2"
              >
                Next Destination <ArrowRight size={14} />
              </button>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Navigation (Restored to Sphere Style from Image 1) */}
      <footer className="relative z-10 px-8 py-10 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar">
            {PLANETS.map((planet) => {
              const isActive = selectedPlanet.name === planet.name;
              return (
                <button
                  key={planet.name}
                  onClick={() => setSelectedPlanet(planet)}
                  className="flex flex-col items-center group transition-all duration-300 min-w-[80px]"
                >
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                    {planet.name === "Saturn" && (
                      <div
                        className="planet-ring"
                        style={{ borderColor: `${planet.color}66` }}
                      />
                    )}
                    <div
                      className={`planet-sphere transition-all duration-500 ${isActive ? "scale-125" : "scale-100 opacity-60 group-hover:opacity-100"}`}
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${planet.color}, #000)`,
                        boxShadow: isActive
                          ? `0 0 25px ${planet.color}`
                          : `0 0 10px ${planet.color}44`,
                      }}
                    />
                  </div>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? "opacity-100" : "opacity-40"}`}
                    style={{ color: isActive ? planet.color : "white" }}
                  >
                    {planet.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

const StatItem = ({ icon, label, value }) => (
  <div className="glass-card p-4 flex flex-col gap-1 border border-white/5">
    <div className="flex items-center gap-2 text-white/30">
      {React.cloneElement(icon, { size: 12 })}
      <span className="text-[9px] uppercase font-bold tracking-[0.15em]">
        {label}
      </span>
    </div>
    <p className="text-xs font-mono">{value}</p>
  </div>
);
