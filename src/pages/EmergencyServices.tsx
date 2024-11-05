import React from 'react';
import { Stethoscope, Phone, AlertTriangle, Clock } from 'lucide-react';

export default function EmergencyServices() {
  const services = [
    {
      icon: <Stethoscope className="h-8 w-8 text-red-500" />,
      title: "Medical Emergency",
      description: "Immediate medical assistance and ambulance services",
      action: "Call Emergency"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      title: "Disaster Relief",
      description: "Access to emergency shelter and supplies",
      action: "Get Help"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      title: "Crisis Hotline",
      description: "24/7 emergency support and counseling",
      action: "Contact Now"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Urgent Care",
      description: "Non-emergency medical assistance",
      action: "Find Location"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Services</h1>
        <p className="text-xl text-gray-600">Quick access to critical emergency services and support</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-gray-50 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                {service.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-red-50 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-red-700">Emergency Hotline</h2>
            <p className="text-red-600 mt-2">Available 24/7 for immediate assistance</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Call Now
            </button>
            <button className="px-8 py-3 bg-white text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition">
              Chat Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}