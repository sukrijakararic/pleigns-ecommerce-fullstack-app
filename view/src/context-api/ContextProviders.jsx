import React from 'react'
import { AuthProvider } from './AuthContext'

export const ContextProviders = ({ children }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  )
}
