import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '@/pages/admin/Login/Login'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  )
}