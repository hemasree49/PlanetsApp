import { Planet } from "./types";

export const PLANETS = [
  {
    name: "Mercury",
    position: 1,
    description:
      "The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon.",
    color: "#8C8C8C",
    mass: "3.285 × 10^23 kg",
    diameter: "4,879 km",
    gravity: "3.7 m/s²",
    distanceFromSun: "57.9 million km",
    orbitalPeriod: "88 days",
    moons: 0,
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Mariner 10", year: "1973", agency: "NASA", status: "Completed" },
      { name: "MESSENGER", year: "2004", agency: "NASA", status: "Completed" },
      {
        name: "BepiColombo",
        year: "2018",
        agency: "ESA/JAXA",
        status: "En Route",
      },
    ],
    additionalInfo:
      "Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Despite being closest to the Sun, it's not the hottest—Venus is.",
  },
  {
    name: "Venus",
    position: 2,
    description:
      "Spinning slowly in the opposite direction from most planets, Venus is the hottest planet in our solar system.",
    color: "#F5F5DC",
    mass: "4.867 × 10^24 kg",
    diameter: "12,104 km",
    gravity: "8.87 m/s²",
    distanceFromSun: "108.2 million km",
    orbitalPeriod: "225 days",
    moons: 0,
    image:
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=800&q=80",
    missions: [
      {
        name: "Venera 7",
        year: "1970",
        agency: "Soviet Union",
        status: "Completed",
      },
      { name: "Magellan", year: "1989", agency: "NASA", status: "Completed" },
      { name: "Akatsuki", year: "2010", agency: "JAXA", status: "Active" },
    ],
    additionalInfo:
      "Venus has a thick, toxic atmosphere filled with sulfuric acid clouds that trap heat in a runaway greenhouse effect.",
  },
  {
    name: "Earth",
    position: 3,
    description:
      "Our home planet is the only place we know of so far that’s inhabited by living things.",
    color: "#2B82C9",
    mass: "5.972 × 10^24 kg",
    diameter: "12,742 km",
    gravity: "9.8 m/s²",
    distanceFromSun: "149.6 million km",
    orbitalPeriod: "365.25 days",
    moons: 1,
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Apollo 11", year: "1969", agency: "NASA", status: "Completed" },
      {
        name: "Landsat 8",
        year: "2013",
        agency: "NASA/USGS",
        status: "Active",
      },
      { name: "Sentinel-2", year: "2015", agency: "ESA", status: "Active" },
    ],
    additionalInfo:
      "Earth is the only world in our solar system with liquid water on the surface and an atmosphere that contains free oxygen.",
  },
  {
    name: "Mars",
    position: 4,
    description:
      "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was once much wetter.",
    color: "#E27B58",
    mass: "6.39 × 10^23 kg",
    diameter: "6,779 km",
    gravity: "3.71 m/s²",
    distanceFromSun: "227.9 million km",
    orbitalPeriod: "687 days",
    moons: 2,
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Viking 1", year: "1975", agency: "NASA", status: "Completed" },
      { name: "Curiosity", year: "2011", agency: "NASA", status: "Active" },
      { name: "Perseverance", year: "2020", agency: "NASA", status: "Active" },
    ],
    additionalInfo:
      "Mars is home to Olympus Mons, the largest volcano in the solar system, which is three times taller than Mount Everest.",
  },
  {
    name: "Jupiter",
    position: 5,
    description:
      "Jupiter is more than twice as massive than the other planets of our solar system combined.",
    color: "#D39C7E",
    mass: "1.898 × 10^27 kg",
    diameter: "139,820 km",
    gravity: "24.79 m/s²",
    distanceFromSun: "778.5 million km",
    orbitalPeriod: "12 years",
    moons: 79,
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Voyager 1", year: "1977", agency: "NASA", status: "Completed" },
      { name: "Galileo", year: "1989", agency: "NASA", status: "Completed" },
      { name: "Juno", year: "2011", agency: "NASA", status: "Active" },
    ],
    additionalInfo:
      "Jupiter's Great Red Spot is a gigantic storm that has been raging for hundreds of years and is larger than Earth.",
  },
  {
    name: "Saturn",
    position: 6,
    description:
      "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system.",
    color: "#C5AB6E",
    mass: "5.683 × 10^26 kg",
    diameter: "116,460 km",
    gravity: "10.44 m/s²",
    distanceFromSun: "1.4 billion km",
    orbitalPeriod: "29 years",
    moons: 82,
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Pioneer 11", year: "1973", agency: "NASA", status: "Completed" },
      {
        name: "Cassini-Huygens",
        year: "1997",
        agency: "NASA/ESA",
        status: "Completed",
      },
      { name: "Dragonfly", year: "2027", agency: "NASA", status: "Planned" },
    ],
    additionalInfo:
      "Saturn's rings are not solid; they are made of billions of small chunks of ice and rock coated with another material such as dust.",
  },
  {
    name: "Uranus",
    position: 7,
    description:
      "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system.",
    color: "#B5E3E3",
    mass: "8.681 × 10^25 kg",
    diameter: "50,724 km",
    gravity: "8.69 m/s²",
    distanceFromSun: "2.9 billion km",
    orbitalPeriod: "84 years",
    moons: 27,
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Voyager 2", year: "1977", agency: "NASA", status: "Completed" },
    ],
    additionalInfo:
      "Uranus is unique because it rotates on its side, likely due to a massive collision early in its history.",
  },
  {
    name: "Neptune",
    position: 8,
    description:
      "Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant major planet.",
    color: "#4B70DD",
    mass: "1.024 × 10^26 kg",
    diameter: "49,244 km",
    gravity: "11.15 m/s²",
    distanceFromSun: "4.5 billion km",
    orbitalPeriod: "165 years",
    moons: 14,
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    missions: [
      { name: "Voyager 2", year: "1977", agency: "NASA", status: "Completed" },
    ],
    additionalInfo:
      "Neptune was the first planet located through mathematical calculations rather than by direct observation.",
  },
];
