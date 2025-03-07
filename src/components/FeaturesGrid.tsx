import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Lock, Eye, Cloud, Bot, FileCheck, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const features: Feature[] = [
  {
    title: "Real-time Threat Detection",
    description: "Continuous monitoring and instant alerts for potential security threats",
    icon: Eye,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "AI-Powered Security",
    description: "Advanced machine learning algorithms for proactive threat hunting",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud Integration",
    description: "Seamless security integration with your cloud infrastructure",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "Compliance Management",
    description: "Automated compliance reporting and regulatory adherence",
    icon: FileCheck,
    color: "from-green-500 to-emerald-400",
  },
];

const FeaturesGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20
      }
    }
  };

  // Floating animation for icons
  const iconVariants: Variants = {
    initial: { y: 0 },
    float: { 
      y: -8,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Enterprise-Grade Security Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive security solutions protect your business with cutting-edge technology
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="h-full"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 border-0 shadow-md hover:shadow-xl relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-5' : ''}`}></div>
                <CardHeader className="p-6">
                  <motion.div 
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    initial="initial"
                    animate={hoveredIndex === index ? "float" : "initial"}
                    variants={iconVariants}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, var(--${feature.color.split(' ')[0].slice(5)}), var(--${feature.color.split(' ')[2].slice(3)}))` 
                  }}
                  animate={{ 
                    width: hoveredIndex === index ? '100%' : '0%' 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut" 
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;