"use client";

import React, { useState, useRef } from "react";
import styles from "./Header.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import Burger from "../UI/Burger/Burger";
import { usePathname } from "next/navigation";
import { useHeaderIntersection } from "@/utilities/hooks/useHeaderIntersection";

const Header = () => {
   const [isActive, setIsActive] = useState<boolean>(false);
   const pathname = usePathname();
   const headerRef = useRef<HTMLElement>(null);
   const isIntersected = useHeaderIntersection(headerRef);
   return (
      <header className={styles.header} ref={headerRef}>
         <div
            className={cn(styles.wrapper, { [styles._scroll]: !isIntersected })}
         >
            <div className={styles.container}>
               <div className={styles.main}>
                  <Burger isActive={isActive} setIsActive={setIsActive} />
                  <div className={styles.logo}>
                     <Link href="/">
                        <Image
                           src={"/logo.png"}
                           alt="netflix logo"
                           height={25}
                           width={95}
                        />
                     </Link>
                  </div>
                  <nav
                     className={cn(styles.nav, {
                        [styles._active]: isActive,
                     })}
                  >
                     <div className={styles["nav__sidebar"]}>
                        <div className={styles["menu-logo"]}>
                           <Link href="/">
                              <Image
                                 src={"/logo.png"}
                                 alt="netflix logo"
                                 height={25}
                                 width={95}
                              />
                           </Link>
                        </div>
                        <ul className={styles["nav-wrapper"]}>
                           <li
                              className={cn(styles["nav-item"], {
                                 [styles._active]:
                                    pathname === "/home" || pathname === "/",
                              })}
                           >
                              <Link href="/">Home</Link>
                           </li>
                           <li
                              className={cn(styles["nav-item"], {
                                 [styles._active]: pathname === "/tvShows",
                              })}
                           >
                              <Link href="tvShows">TV Shows</Link>
                           </li>
                           <li
                              className={cn(styles["nav-item"], {
                                 [styles._active]: pathname === "/originals",
                              })}
                           >
                              <Link href="originals">Originals</Link>
                           </li>
                           <li
                              className={cn(styles["nav-item"], {
                                 [styles._active]: pathname === "/movies",
                              })}
                           >
                              <Link href="movies">Movies</Link>
                           </li>
                           <li
                              className={cn(styles["nav-item"], {
                                 [styles._active]:
                                    pathname === "/recentlyAdded",
                              })}
                           >
                              <Link href="recentlyAdded">Recently Added</Link>
                           </li>
                           <li
                              className={cn(styles["nav-item"], {
                                 [styles._active]: pathname === "/myList",
                              })}
                           >
                              <Link href="myList">My List</Link>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
               <div className={styles.actions}>
                  <div className={styles.action}>
                     <BiSearchAlt className="text-mainColor text-xl cursor-pointer" />
                  </div>
                  <div className={styles.action}>
                     <IoMdNotificationsOutline className="text-mainColor text-xl cursor-pointer" />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
