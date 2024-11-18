import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'
import { Footer } from '../footer/Footer'

export const Root = () => {
  return (
    <div>
      <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}
