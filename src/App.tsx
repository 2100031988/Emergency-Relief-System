import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import EmergencyServices from './pages/EmergencyServices';
import BenefitsStatus from './pages/BenefitsStatus';
import Dashboard from './pages/Dashboard';
import AdminLayout from './components/AdminLayout';
import Services from './pages/Services';
import CheckStatus from './pages/CheckStatus';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="/emergency-services"
          element={
            <>
              <Navbar />
              <EmergencyServices />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/check-status"
          element={
            <>
              <Navbar />
              <CheckStatus />
              <Footer />
            </>
          }
        />
        <Route
          path="/benefits-status"
          element={
            <>
              <Navbar />
              <BenefitsStatus />
              <Footer />
            </>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/applications"
          element={
            <AdminLayout>
              <div className="p-6">Applications Management</div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <div className="p-6">Users Management</div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <AdminLayout>
              <div className="p-6">System Settings</div>
            </AdminLayout>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;