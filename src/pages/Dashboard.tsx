import React from 'react';
import { useAuth } from '../context/AuthContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Users, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const data = [
  { name: 'Jan', applications: 40 },
  { name: 'Feb', applications: 30 },
  { name: 'Mar', applications: 45 },
  { name: 'Apr', applications: 55 },
];

const stats = [
  { title: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
  { title: 'Applications', value: '567', icon: FileText, color: 'bg-green-500' },
  { title: 'Pending', value: '89', icon: AlertTriangle, color: 'bg-yellow-500' },
  { title: 'Approved', value: '478', icon: CheckCircle, color: 'bg-indigo-500' },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name || 'Admin'}</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your emergency relief system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Application Trends</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="applications" fill="#4f46e5" />
          </BarChart>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Application #{2024001 + index}</p>
                  <p className="text-sm text-gray-600">Emergency Housing Assistance</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}