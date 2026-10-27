import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  // wait for the /auth/me check on page load before deciding to redirect
  if (loading) return null
  if (!user) return <Navigate to="/login" replace />
  return children
}
