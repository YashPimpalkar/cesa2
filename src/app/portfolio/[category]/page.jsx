import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';
import image1 from "../../../../public/bob.png"
const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.Category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
               <h1 className={styles.title}>asdf</h1>
               <p className={styles.desc}> asd</p>
               <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
             <Image src={image1} alt=" " fill={true} className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Category