import React from "react";
import ReligionIcon from "./Icons/ReligionIcon";
import EconomyIcon from "./Icons/EconomyIcon";
import SecurityIcon from "./Icons/SecurityIcon";
import ImageIcon from "./Icons/ImageIcon";
import Effect from "../Effect/Effect";
import styles from "./Effects.module.scss";

function Effects({ points }) {
  return (
    <div className={styles.effectsContainer}>
      <div className={styles.iconContainer}>
        <Effect points={points.religion}>
          <ReligionIcon />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.image}>
          <ImageIcon />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.security}>
          <SecurityIcon />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.economy}>
          <EconomyIcon />
        </Effect>
      </div>
    </div>
  );
}

export default Effects;
