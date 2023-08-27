import React from "react";
import styles from "./Button.module.scss";

interface IProps {
   theme: "white" | "gray";
   children: React.ReactNode;
}

const Button = ({ children, theme }: IProps) => {
   return (
      <button
         type="button"
         className={`${styles.button} ${styles[`button-${theme}`]}`}
      >
         {children}
      </button>
   );
};

export default Button;
