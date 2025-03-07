import { motion } from "framer-motion";
import { Shield, Lock, Eye, Cloud, Bot, FileCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import React from "react";

const features = [
  {
    title: "Real-time Threat Detection",
    description: "Continuous monitoring and instant alerts for potential security threats",
    icon: Eye,
  },
  {
    title: "AI-Powered Security",
    description: "Advanced machine learning algorithms for proactive threat hunting",
    icon: Bot,
  },
  {
    title: "Cloud Integration",
    description: "Seamless security integration with your cloud infrastructure",
    icon: Cloud,
  },
  {
    title: "Compliance Management",
    description: "Automated compliance reporting and regulatory adherence",
    icon: FileCheck,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade Security Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive security solutions protect your business with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}