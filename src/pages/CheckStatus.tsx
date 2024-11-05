import React, { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ApplicationStatus {
  id: string;
  status: 'pending' | 'approved' | 'rejected';
  type: string;
  submittedDate: string;
  lastUpdate: string;
  details: string;
}

export default function CheckStatus() {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<ApplicationStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSearchResult({
        id: searchId,
        status: 'pending',
        type: 'Emergency Housing Assistance',
        submittedDate: '2024-03-15',
        lastUpdate: '2024-03-20',
        details: 'Application is currently under review by our housing department.'
      });
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-500';
      case 'rejected':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return <Clock className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Check Application Status
          </h1>
          <p className="text-xl text-gray-600">
            Track the progress of your emergency relief application
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Enter your application ID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:bg-indigo-400"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <AlertTriangle className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </>
                )}
              </button>
            </div>
          </form>

          {searchResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(searchResult.status)}
                  <div>
                    <p className="font-semibold">Application Status</p>
                    <p className={`capitalize ${getStatusColor(searchResult.status)}`}>
                      {searchResult.status}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  ID: {searchResult.id}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4">Application Details</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Type:</dt>
                      <dd className="font-medium">{searchResult.type}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Submitted:</dt>
                      <dd className="font-medium">{searchResult.submittedDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Last Update:</dt>
                      <dd className="font-medium">{searchResult.lastUpdate}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4">Status Details</h3>
                  <p className="text-gray-600">{searchResult.details}</p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="px-6 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
                  Download Full Report
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Need help? Contact our support team at{' '}
            <a href="tel:1-800-HELP" className="text-indigo-600 hover:text-indigo-700">
              1-800-HELP
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}