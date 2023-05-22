import { Navigate } from 'react-router-dom'
import { UseAuth } from '../Auth/Auth_context'
import { useEffect } from 'react'
export default function PrivateRoute({ children }) {
  const { currentUser } = UseAuth()
  if (!currentUser) return <Navigate to="/login" />
  return children
}
