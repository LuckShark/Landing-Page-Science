"use client";

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discovering Tomorrow&apos;s Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Exploring the frontiers of science and innovation to create a better future
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
}