import React from 'react'
import styles from './LandingPage.module.css'
import { Registration } from '../registration/Registration'

export const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.landingText}>
      <h1>Welcome to Pleigns!</h1>
      <h2>Lets fly somewhere new</h2>

      <h5>We provide you with the best Aircrafts on the market. All checked and ready to fly.</h5>
    </div>
    <div>
    <Registration />
    </div>
    </div>
  )
}
