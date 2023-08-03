'use client'

import React, {useState} from 'react'
import styles from './Header.module.scss'
import {BiSearchAlt} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import Burger from '../UI/Burger/Burger'
import SubMenu from '../UI/SubMenu/SubMenu'
import { useOutside } from '@/utilities/hooks/useOutside'

const Header = () => {
   const [isActive, setIsActive] = useState<boolean>(false);
   const {
      isActive: isShowed,
      setIsActive: setIsShowed,
      ref
   } = useOutside();
   return (
      <header className={styles.header}>
         <div className={cn('container', styles.wrapper)}>
            <div className={styles.main}>
               <Burger
                  isActive={isActive}
                  setIsActive={setIsActive}
               />
               <div className={styles.logo}>
                  <Link href='/'>
                     <Image
                        src={'/logo.png'}
                        alt='netflix logo'
                        height={25}
                        width={95}
                     />
                  </Link>
               </div>
               <nav className={cn(styles.nav, {[styles._active]: isActive})}>
                  <div className={styles['menu-logo']}>
                     <Link href='/'>
                        <Image
                           src={'/logo.png'}
                           alt='netflix logo'
                           height={25}
                           width={95}
                        />
                     </Link>
                  </div>
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
               <div 
                  className={styles.action}
                  onClick={() => setIsShowed(!isShowed)}
                  ref={ref}
               >
                  <div className={styles.circle}></div>
                  <SubMenu
                     isShowed={isShowed}
                     setIsShowed={setIsShowed}
                  />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header