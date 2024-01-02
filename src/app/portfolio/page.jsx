import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
const Portfolio = () => {
  return (
   <div className={styles.container}>
     <h1 className={styles.selectTitle}> Choose gallery</h1>
     <div className={styles.items}>
       <Link href="/portfolio/illustraions" className={styles.item}>
        <span className={styles.title}>Illustraions</span>
       </Link>
       <Link href="/portfolio/website" className={styles.item}>
        <span className={styles.title}>Website</span>
       </Link>
       <Link href="/portfolio/applications" className={styles.item}>
        <span className={styles.title}>applications</span>
       </Link>
     </div>
   </div>
  )
}

export default Portfolio