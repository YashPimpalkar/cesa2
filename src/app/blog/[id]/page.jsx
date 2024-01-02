import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
     cache: 'no-store' },
)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }
 
  return res.json()
}

const BlogPost = async ({params})  => {
  const data = await getData(params.id)
  return (
    <div className={styles.container} >
         <div className={styles.top}>
             <div className={styles.info} >
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, tenetur.</p>
                <div className={styles.author}>
                  <Image src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={40} height={40} className={styles.avatar} />
                  <span className={styles.username}>john doe</span>
                </div>
             </div>
             <div className={styles.imagecontainer}>
                    <Image src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' width={600} height={300}   className={styles.image}/>
             </div>
         </div>
         <div className={styles.content}>
              <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, hic! Dolorem culpa tenetur recusandae qui iusto earum nemo sunt repellendus, minus voluptatem veniam dolore cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni vitae iusto aperiam, perspiciatis expedita sapiente repudiandae totam? Laborum ut nihil quis! Iste ullam iure reiciendis. Consequatur mollitia voluptatum eaque voluptate consectetur error, voluptas ratione reiciendis, cumque perferendis natus cum architecto eum vero veritatis nam? Quae beatae iste odit consectetur.</p>
         </div>
    </div>
  )
}

export default BlogPost