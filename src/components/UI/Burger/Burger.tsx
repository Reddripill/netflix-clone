import React, {useState} from 'react'
import styles from './Burger.module.scss'
import cn from 'classnames'
import { SetState } from '@/utilities/types';

interface IProps {
   isActive: boolean;
   setIsActive: SetState<boolean>
}

const Burger = ({isActive, setIsActive}: IProps) => {
   return (
      <div 
         className={cn(styles.burger, {[styles._active]: isActive})}
         onClick={() => setIsActive(!isActive)}
      >
         <div className={styles.burger__wrapper}>
            <span/>
         </div>
      </div>
   )
}

export default Burger