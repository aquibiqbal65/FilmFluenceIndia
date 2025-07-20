import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Heart = {
  id: number;
  left: string;
  delay: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now(),
        left: Math.random() * 10 + "px", // left position inside mockup
        delay: Math.random() * 0.2,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 2000);
    }, 500); // frequency of hearts

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[250px] h-[500px] pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{
            y: -200,
            opacity: 0,
            scale: 1.4,
          }}
          transition={{
            duration: 1.5,
            delay: heart.delay,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 text-pink-500 text-2xl"
          style={{ left: heart.left }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}
