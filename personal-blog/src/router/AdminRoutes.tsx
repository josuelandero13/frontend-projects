import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '@/pages/admin/Login/Login';
import { Dashboard } from '@/pages/admin/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { Outlet } from 'react-router-dom';

function AdminLayoutWrapper() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </ProtectedRoute>
  );
}

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<AdminLayoutWrapper />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}
