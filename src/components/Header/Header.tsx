import React from 'react'
import styles from './Header.module.scss'
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={cn('container', styles.wrapper)}>
            <div className={styles.main}>
               <div className={styles.logo}>
                  <Link href='/'>
                     <Image
                        src={'/logo.png'}
                        alt='netflix logo'
                        width={95}
                        height={25}
                     />
                  </Link>
               </div>
               <nav className={styles.nav}>
                  <ul className={styles['nav-wrapper']}>
                     <li className={cn(styles['nav-item'], styles._active)}>
                        <Link href='/'>Home</Link>
                     </li>
                     <li className={styles['nav-item']}>
                        <Link href='/'>TV Shows</Link>
                     </li>
                     <li className={styles['nav-item']}>
                        <Link href='/'>Originals</Link>
                     </li>
                     <li className={styles['nav-item']}>
                        <Link href='/'>Movies</Link>
                     </li>
                     <li className={styles['nav-item']}>
                        <Link href='/'>Recently Added</Link>
                     </li>
                     <li className={styles['nav-item']}>
                        <Link href='/'>My List</Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className={styles.actions}>
               <div className={styles.action}>
                  <BiSearchAlt
                     className='text-mainColor text-xl cursor-pointer'
                  />
               </div>
               <div className={styles.action}>
                  <IoMdNotificationsOutline
                     className='text-mainColor text-xl cursor-pointer'
                  />
               </div>
               <div className={styles.action}>
                  <div className={styles.circle}></div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header