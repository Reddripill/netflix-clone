import React from 'react'
import styles from './SubMenu.module.scss'
import { SetState } from '@/utilities/types';
import cn from 'classnames'
import Link from 'next/link';

interface IProps {
   isShowed: boolean;
   setIsShowed: SetState<boolean>;
}

const SubMenu = ({isShowed, setIsShowed}: IProps) => {
   return (
      <div 
         className={cn(styles.submenu, {[styles._active]: isShowed})}
      >
         <div className={styles.main}>
            <div className={styles.profiles}>
               <Link href='/' className={styles.profile}>
                  <div className={styles.avatar}></div>
                  <div className='texts'>Willson</div>
               </Link>
               <Link href='/' className={styles.profile}>
                  <div className={styles.avatar}></div>
                  <div className='texts'>Anna</div>
               </Link>
               <Link href='/' className={styles.profile}>
                  <div className={styles.avatar}></div>
                  <div className='texts'>Kids</div>
               </Link>
            </div>
            <div className='texts'>
               <Link href='/'>Manage Profile</Link>
            </div>
         </div>
         <div className={styles.additional}>
            <div className='texts'>
               <Link href='/'>Account</Link>
            </div>
            <div className='texts'>
               <Link href='/'>Help Center</Link>
            </div>
            <div className='texts'>
               <Link href='/'>Sign out of Netflix</Link>
            </div>
         </div>
      </div>
   )
}

export default SubMenu;