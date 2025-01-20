"use client";

import { motion } from 'framer-motion';
import { Atom, Brain, FlaskRound, Award, Target, Users, Microscope, TestTube, Dna } from 'lucide-react';

const features = [
  {
    icon: Atom,
    title: "Quantum Physics",
    description: "Exploring the fundamental building blocks of our universe through cutting-edge research."
  },
  {
    icon: Brain,
    title: "Neuroscience",
    description: "Understanding the complexities of the human brain and consciousness."
  },
  {
    icon: FlaskRound,
    title: "Biotechnology",
    description: "Developing innovative solutions for health and environmental challenges."
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Excellence",
    description: "Recognized globally for groundbreaking research and discoveries."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing boundaries with state-of-the-art facilities and methodologies."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working with leading institutions and researchers worldwide."
  }
];

const experiments = [
  {
    title: "Quantum Entanglement Studies",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    icon: Microscope,
    description: "Investigating quantum phenomena at the microscopic level."
  },
  {
    title: "Neural Network Mapping",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    icon: TestTube,
    description: "Mapping complex neural pathways in the brain."
  },
  {
    title: "DNA Sequencing",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    icon: Dna,
    description: "Advanced genetic research using cutting-edge sequencing technology."
  }
];

export function MainContent() {
  return (
    <div className="py-20">
      {/* Research Areas */}
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Experiments */}
      <div className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Experiments
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => (
              <motion.div
                key={experiment.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${experiment.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <experiment.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-center">{experiment.title}</h3>
                    <p className="text-sm text-center">{experiment.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}