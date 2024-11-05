import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-indigo-400" />
              <span className="font-bold text-xl text-white">EmergencyRelief</span>
            </div>
            <p className="text-sm">
              Providing rapid and efficient emergency relief services through secure digital identity verification.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/register" className="hover:text-white transition">Register</a></li>
              <li><a href="/status" className="hover:text-white transition">Check Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: 911</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>help@emergency.relief</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>24/7 Relief Centers</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Emergency Numbers</h3>
            <ul className="space-y-2">
              <li>Medical: 911</li>
              <li>Fire: 911</li>
              <li>Police: 911</li>
              <li>Disaster Hotline: 1-800-RED-CROSS</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EmergencyRelief. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}