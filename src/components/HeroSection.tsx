import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Shield, Lock, ArrowRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                Next-Gen
              </span>{" "}
              Cybersecurity Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your digital assets with AI-powered threat detection and real-time monitoring. Processing over 100,000 security events per second.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
                alt="Cybersecurity Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
