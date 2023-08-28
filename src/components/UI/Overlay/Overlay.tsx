import React from "react";
import styles from "./Overlay.module.scss";

const Overlay = ({ children }: { children?: React.ReactNode }) => {
   return <div className={styles["overlay"]}>{children}</div>;
};

export default Overlay;
