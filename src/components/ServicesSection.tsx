import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Shield, Lock, Server } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Managed Security",
    description: "24/7 monitoring and response by our expert security team",
    features: ["Threat Detection", "Incident Response", "Security Assessments"],
    image: "https://images.unsplash.com/photo-1563452619267-bc16ef6cecec",
    icon: Shield,
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud infrastructure with our advanced protection",
    features: ["Cloud Integration", "Data Protection", "Access Control"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    icon: Server,
  },
  {
    title: "Compliance Solutions",
    description: "Stay compliant with industry regulations and standards",
    features: ["Audit Support", "Policy Management", "Risk Assessment"],
    image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80",
    icon: Lock,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protecting your digital assets with enterprise-grade security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="h-48 relative rounded-lg overflow-hidden mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <service.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
