import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css';

const MenuPosts = ({ withImage }) => {
  return (
    // <div className={styles.items}>
    //   <Link href='/' className={styles.item}>

    //     <div className={styles.textContainer}>
    //       <span className={`${styles.category} ${styles.travel}`}>Travel</span>
    //       <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
    //       <h3 className={styles.detail}>
    //         <span className={styles.username}>Nawin Kumar Sharma</span>
    //         <span className={styles.date}> - 23.10.2023 </span>
    //       </h3>
    //     </div>
    //   </Link>
    //   <Link href='/' className={styles.item}>

    //     <div className={styles.textContainer}>
    //       <span className={`${styles.category} ${styles.fashion}`}>fashion</span>
    //       <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
    //       <h3 className={styles.detail}>
    //         <span className={styles.username}>Nawin Kumar Sharma</span>
    //         <span className={styles.date}> - 23.10.2023 </span>
    //       </h3>
    //     </div>
    //   </Link>
    //   <Link href='/' className={styles.item}>

    //     <div className={styles.textContainer}>
    //       <span className={`${styles.category} ${styles.culture}`}>culture</span>
    //       <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
    //       <h3 className={styles.detail}>
    //         <span className={styles.username}>Nawin Kumar Sharma</span>
    //         <span className={styles.date}> - 23.10.2023 </span>
    //       </h3>
    //     </div>
    //   </Link>
    //   <Link href='/' className={styles.item}>

    //     <div className={styles.textContainer}>
    //       <span className={`${styles.category} ${styles.food}`}>food</span>
    //       <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
    //       <h3 className={styles.detail}>
    //         <span className={styles.username}>Nawin Kumar Sharma</span>
    //         <span className={styles.date}> - 23.10.2023 </span>
    //       </h3>
    //     </div>
    //   </Link>
    // </div>
    <div className={styles.items}>
      <Link href='/' className={styles.item}>
        {withImage && <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
          <h3 className={styles.detail}>
            <span className={styles.username}>Nawin Kumar Sharma</span>
            <span className={styles.date}> - 23.10.2023 </span>
          </h3>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage && <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>fashion</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
          <h3 className={styles.detail}>
            <span className={styles.username}>Nawin Kumar Sharma</span>
            <span className={styles.date}> - 23.10.2023 </span>
          </h3>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage && <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>culture</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
          <h3 className={styles.detail}>
            <span className={styles.username}>Nawin Kumar Sharma</span>
            <span className={styles.date}> - 23.10.2023 </span>
          </h3>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage && <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>food</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>
          <h3 className={styles.detail}>
            <span className={styles.username}>Nawin Kumar Sharma</span>
            <span className={styles.date}> - 23.10.2023 </span>
          </h3>
        </div>
      </Link>
    </div>

  )
}

export default MenuPosts
