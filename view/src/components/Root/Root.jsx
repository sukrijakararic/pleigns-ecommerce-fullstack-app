import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

export const Root = () => {
  return (
    <div className={styles.Root}>
      <Navigation />
        <Outlet />
    </div>
  )
}
