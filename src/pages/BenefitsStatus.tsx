import React, { useState } from 'react';
import { Search, Loader, CheckCircle, XCircle, Clock } from 'lucide-react';
import FormInput from '../components/forms/FormInput';

export default function BenefitsStatus() {
  const [applicationId, setApplicationId] = useState('');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationId) return;

    setSearchStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setSearchStatus('success');
    }, 1500);
  };

  const renderStatusContent = () => {
    switch (searchStatus) {
      case 'loading':
        return (
          <div className="flex items-center justify-center p-8">
            <Loader className="h-8 w-8 text-indigo-600 animate-spin" />
          </div>
        );
      case 'success':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium text-green-700">Application Approved</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Application Details</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Status:</dt>
                    <dd className="font-medium text-gray-900">Approved</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Date Submitted:</dt>
                    <dd className="font-medium text-gray-900">March 15, 2024</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Type:</dt>
                    <dd className="font-medium text-gray-900">Emergency Relief</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Next Steps</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Application Verified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Documents Processed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span>Benefit Distribution (In Progress)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'error':
        return (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <XCircle className="h-6 w-6 text-red-500" />
              <span className="font-medium text-red-700">Application not found</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Check Benefit Status</h1>
        <p className="text-gray-600">Enter your application ID to check your benefit status</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <FormInput
            label="Application ID"
            name="applicationId"
            type="text"
            value={applicationId}
            onChange={(e) => setApplicationId(e.target.value)}
            placeholder="Enter your application ID"
            required
          />
          
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            <Search className="h-5 w-5" />
            <span>Check Status</span>
          </button>
        </form>

        <div className="mt-8">
          {renderStatusContent()}
        </div>
      </div>
    </div>
  );
}