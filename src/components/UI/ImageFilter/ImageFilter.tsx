import React from "react";
import styles from "./ImageFilter.module.scss";
import cn from "classnames";

const ImageFilter = ({ externalStyles }: { externalStyles?: any }) => {
   return <div className={styles["image-filter"]} style={externalStyles} />;
};

export default ImageFilter;
