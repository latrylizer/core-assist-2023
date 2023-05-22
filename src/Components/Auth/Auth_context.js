import React, { useContext, useEffect, useState } from 'react'
import Loading from '../loading'
import { auth } from './firebase'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = React.createContext()
export function UseAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function Login(email, password) {
    var result = signInWithEmailAndPassword(auth, email, password)
    return result
  }
  function Logout() {
    var result = signOut(auth)
    return result
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    Login,
    currentUser,
    Logout,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <Loading />}
    </AuthContext.Provider>
  )
}
