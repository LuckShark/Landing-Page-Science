"use client";

import { motion } from "framer-motion";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <span>contact@sciencelab.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <span>123 Science Street, Research Park, CA 94025</span>
            </div>
          </div>
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border rounded-md"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}