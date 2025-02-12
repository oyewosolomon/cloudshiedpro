import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100000, label: "Security Events/Second", suffix: "+" },
  { value: 99.99, label: "Uptime Percentage", suffix: "%" },
  { value: 5000, label: "Enterprise Clients", suffix: "+" },
  { value: 24, label: "Hour Monitoring", suffix: "/7" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={hasAnimated ? { opacity: 1 } : {}}
                transition={{ duration: 2, delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-2"
              >
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </span>
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
