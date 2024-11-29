import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
        <h1>Pleigns</h1>
        <p>Address: 123 Pleigns St, Anytown, USA 12345</p>
        <p>Phone: 1-800-FLY-PLEIGNS (1-800-359-7546)</p>
        <p>Email: <a href="mailto:info@pleignsairplanes.com">info@pleignsairplanes.com</a></p>
        <p>Hours of Operation: Monday - Friday, 9am - 5pm EST</p>
        </div>
    </div>
  )
}
