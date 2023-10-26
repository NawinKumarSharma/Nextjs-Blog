import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Guys!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featurespost.webp" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Atlantic hurricanes rapidly gaining strength: Study</h1>
          <p className={styles.postDesc}>
            Hurricanes spinning across the Atlantic Ocean are now more than twice as likely to
            strengthen from a weak Category 1 storm to a major Category 3 hurricane in just
            24 hours, new research finds, with U.S. East Coast cities poised to take a critical
            hit.
            Over the past 20 years, the likelihood of such a scenario unfolding in the Atlantic
            Basin was 8.12% compared with just 3.23% during the period from 1970 to 1990,
            the study in the journal Scientific Reports found.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;