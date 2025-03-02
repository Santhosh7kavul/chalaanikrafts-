'use client';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/card';
import { Monitor, Server, Shield, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-blue-400" />,
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions.",
  },
  {
    icon: <Server className="w-10 h-10 text-green-400" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your needs.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-400" />,
    title: "Cybersecurity",
    description: "Protect your business with advanced security measures.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-yellow-400" />,
    title: "Mobile Solutions",
    description: "Custom mobile applications for your business.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-12 md:py-20 mt-12">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-white/80 text-sm mt-2">{service.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
     
    </div>
  );
}
