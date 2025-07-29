// src/pages/Maintenance.tsx
import { motion } from "framer-motion";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 flex flex-col items-center justify-center px-4 text-center text-white">
      {/* Glowing & animated title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚧 We're Under Maintenance
      </motion.h1>

      {/* Subtext fade-in */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Polishing pixels, optimizing vibes. We'll be back with something epic. Stay tuned!
      </motion.p>

      {/* Pulsing loader */}
      <motion.div
        className="w-4 h-4 rounded-full bg-white animate-ping"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      />

      {/* Optional socials */}
      <div className="mt-6 flex gap-4 text-gray-400">
        <a
          href="https://instagram.com/filmfluenceindia"
          className="hover:text-pink-500 transition"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="mailto:shoaib@filmfluenceindia.in"
          className="hover:text-yellow-400 transition"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};

export default Maintenance;
