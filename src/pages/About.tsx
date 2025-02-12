
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About CyberShield</h1>
            <p className="text-lg text-muted-foreground">
              Leading the way in cybersecurity solutions and digital protection
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  At CyberShield, we're committed to providing cutting-edge cybersecurity solutions 
                  that protect businesses and individuals from evolving digital threats. Our mission 
                  is to create a safer digital world through innovative security measures and 
                  proactive protection strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2020, CyberShield emerged from a vision to make enterprise-grade 
                  cybersecurity accessible to organizations of all sizes. Our team of security 
                  experts and developers work tirelessly to stay ahead of cyber threats and 
                  provide robust protection for our clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Innovation in security solutions</li>
                  <li>• Commitment to client protection</li>
                  <li>• Transparency in operations</li>
                  <li>• Continuous improvement and adaptation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
