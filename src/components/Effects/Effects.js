import React from "react";
import ReligionIcon from "./Icons/ReligionIcon";
import EconomyIcon from "./Icons/EconomyIcon";
import SecurityIcon from "./Icons/SecurityIcon";
import ImageIcon from "./Icons/ImageIcon";
import Effect from "../Effect/Effect";
import styles from "./Effects.module.scss";

function Effects({ points, willEffect = {} }) {
  return (
    <div className={styles.effectsContainer}>
      <div className={styles.iconContainer}>
        <Effect points={points.religion} willEffect={willEffect.religion}>
          <ReligionIcon />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.image} willEffect={willEffect.image}>
          <ImageIcon />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.security} willEffect={willEffect.security}>
          <SecurityIcon />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.economy} willEffect={willEffect.economy}>
          <EconomyIcon />
        </Effect>
      </div>
    </div>
  );
}

export default Effects;
