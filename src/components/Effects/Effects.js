import React from "react";
import ReligionIcon from "./Icons/ReligionIcon";
import EconomyIcon from "./Icons/EconomyIcon";
import SecurityIcon from "./Icons/SecurityIcon";
import ImageIcon from "./Icons/ImageIcon";
import Effect from "../Effect/Effect";
import styles from "./Effects.module.scss";
import colors from "../../common.scss";

function Effects({ points, willEffect = {} }) {
  return (
    <div className={styles.effectsContainer}>
      <div className={styles.iconContainer}>
        <Effect points={points.religion} willEffect={willEffect.religion}>
          <ReligionIcon color={colors.stripColor} />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.image} willEffect={willEffect.image}>
          <ImageIcon color={colors.stripColor} />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.security} willEffect={willEffect.security}>
          <SecurityIcon color={colors.stripColor} />
        </Effect>
      </div>
      <div className={styles.iconContainer}>
        <Effect points={points.economy} willEffect={willEffect.economy}>
          <EconomyIcon color={colors.stripColor} />
        </Effect>
      </div>
    </div>
  );
}

export default Effects;
