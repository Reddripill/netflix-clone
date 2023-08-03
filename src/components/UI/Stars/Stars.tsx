import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import styles from './Stars.module.scss'

const Stars = ({amount}: {amount: number}) => {
   let stars = [];
   for (let k = 0; k < amount; k++) {
      stars.push({
         id: k + 1,
         elem: <AiFillStar className='text-redColor'/>
      })
   }
   return (
      <div className={styles.stars}>
         {stars.map(star => (
            <div 
               className={styles['stars__item']}
               key={star.id}
            >
               {star.elem}
            </div>
         ))}
      </div>
   )
}

export default Stars