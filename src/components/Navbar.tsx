import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="font-bold text-xl">EmergencyRelief</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/services" className="hover:text-indigo-200 transition">Services</Link>
            <Link to="/check-status" className="hover:text-indigo-200 transition">Check Status</Link>
            <Link to="/register" className="flex items-center space-x-1 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
              <UserCircle className="h-5 w-5" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}