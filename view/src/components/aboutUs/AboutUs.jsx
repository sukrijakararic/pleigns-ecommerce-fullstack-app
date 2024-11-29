import React from "react";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h1>About Pleigns</h1>
      <p className={styles.aboutUsText}>
        Welcome to Pleigns, your premier destination for high-quality airplanes.
        At Pleigns, we pride ourselves on offering a diverse selection of
        aircraft, from small private planes to large commercial jets, all
        meticulously maintained and ready for your next adventure.
      </p>
      <p className={styles.aboutUsText}>
        Founded with a passion for aviation and a commitment to excellence,
        Pleigns has established itself as a trusted name in the industry. Our
        team of experienced professionals is dedicated to providing exceptional
        customer service, ensuring that each of our clients finds the perfect
        aircraft to meet their unique needs.
      </p>
      <p className={styles.aboutUsText}>
        Whether you're a first-time buyer or a seasoned pilot, Pleigns has the
        expertise and inventory to help you soar to new heights. Explore our
        collection today and discover why Pleigns is the preferred choice for
        airplane enthusiasts worldwide.
      </p>
    </div>
  );
};
