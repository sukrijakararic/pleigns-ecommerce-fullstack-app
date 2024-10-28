import React from 'react'
import styles from './LandingPage.module.css'

export const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <img className={styles.landingPageImg} src='\src\assets\fleet_4472x(2).webp' alt="A fleet of planes" />
      <div className={styles.landingText}>
      <h1>Welcome to Pleigns!</h1>
      <h2>Lets fly somewhere new</h2>
    </div>
    </div>
  )
}
