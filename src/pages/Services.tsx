import React from 'react';
import { Shield, Heart, Truck, Home, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Medical Assistance",
      description: "Emergency medical care and ambulance services available 24/7",
      buttonText: "Request Medical Help"
    },
    {
      icon: <Home className="h-8 w-8 text-blue-500" />,
      title: "Emergency Housing",
      description: "Temporary shelter and housing assistance for displaced individuals",
      buttonText: "Find Shelter"
    },
    {
      icon: <Truck className="h-8 w-8 text-green-500" />,
      title: "Supply Distribution",
      description: "Essential supplies and resources for emergency situations",
      buttonText: "Get Supplies"
    },
    {
      icon: <Phone className="h-8 w-8 text-purple-500" />,
      title: "Crisis Support",
      description: "24/7 crisis counseling and mental health support",
      buttonText: "Contact Support"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Safety Services",
      description: "Emergency evacuation and safety planning assistance",
      buttonText: "Safety Planning"
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
      title: "Documentation Help",
      description: "Assistance with emergency documentation and paperwork",
      buttonText: "Get Help"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Emergency Relief Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Comprehensive emergency support when you need it most
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-indigo-50 rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-indigo-900">Need Immediate Assistance?</h2>
              <p className="text-indigo-700 mt-2">Our emergency response team is available 24/7</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Call Emergency Line
              </button>
              <button className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                Live Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}