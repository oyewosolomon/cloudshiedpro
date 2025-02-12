import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import React from "react";

const team = [
  {
    name: "Security Operations",
    role: "24/7 Monitoring Team",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Threat Analysis",
    role: "Expert Analysts",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert professionals working around the clock to protect your digital assets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
