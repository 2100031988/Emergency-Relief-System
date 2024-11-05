import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, UserCheck, ArrowRight, Phone, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight">
                Emergency Relief Through Digital Identity
              </h1>
              <p className="text-xl text-indigo-100">
                Secure, efficient, and immediate access to emergency services and social benefits through verified digital identity.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/emergency-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
                >
                  Emergency Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
                alt="Emergency Response"
                className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How We Help</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive emergency relief services at your fingertips</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-12 w-12 text-indigo-600" />,
              title: "Secure Registration",
              description: "Quick and secure digital identity verification for immediate access to services"
            },
            {
              icon: <Heart className="h-12 w-12 text-red-500" />,
              title: "Emergency Response",
              description: "24/7 emergency services with real-time tracking and support"
            },
            {
              icon: <UserCheck className="h-12 w-12 text-green-500" />,
              title: "Easy Access",
              description: "Streamlined process for receiving benefits and services"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Emergency Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Emergency Hotline</p>
                    <p className="text-xl font-bold text-red-600">911</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Disaster Relief</p>
                    <p className="text-xl font-bold text-yellow-600">1-800-RED-CROSS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Emergency Form</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Emergency Contact Number"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <textarea
                  placeholder="Describe your emergency"
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Send Emergency Alert
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}