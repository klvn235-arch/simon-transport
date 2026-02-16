import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Truck } from "lucide-react";

export default function SimonTransportWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Simon Transport Service
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          Reliable & Professional Transport Solutions Across Australia
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-blue-700 hover:bg-gray-200 rounded-2xl">
            Get a Quote
          </Button>
          <Button className="bg-blue-900 hover:bg-blue-800 rounded-2xl">
            Call Now
          </Button>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <p className="text-center max-w-3xl mx-auto text-lg">
          Simon Transport Service provides safe, efficient, and affordable transport services. We specialize in vehicle transport, machinery relocation, backloads, and general freight. Customer satisfaction and on-time delivery are our top priorities.
        </p>
      </section>
      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 text-center">
              <Truck className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Vehicle Transport</h3>
              <p>Cars, trucks, and commercial vehicles transported safely and securely.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 text-center">
              <Truck className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Machinery & Equipment</h3>
              <p>Transport of heavy equipment and machinery with professional handling.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 text-center">
              <Truck className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Backload Services</h3>
              <p>Affordable backload options for cost-effective transport solutions.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg">
              <Phone /> 048 9996514
            </p>
            <p className="flex items-center gap-3 text-lg">
              <Mail /> Simontransport677@gmail.com
            </p>
            <p className="text-lg">ABN: 99067846398</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-2xl" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-2xl" />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded-2xl" rows={4} />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-2xl">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Simon Transport Service | All Rights Reserved</p>
      </footer>
    </div>
  );
}