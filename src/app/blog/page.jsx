import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../../../public/bob.png'


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
     cache: 'no-store' },
)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.maincontainer}>
      {data.map((item)=>(
      <Link href="/blog/testId" className={styles.container} key={item.id}>
        <div className={styles.imagecontainer}>
          <Image src={image1} alt='' width={400} height={250} className={styles.images} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga dolorem illo! Inventore, tempora optio totam aliquam adipisci nesciunt voluptatem quos, tempore iste ut voluptate.</p>
        </div>
      </Link>
      ))}
    </div>


  )
}

export default Blog