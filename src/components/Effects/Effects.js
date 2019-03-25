import React from "react";
import ReligionIcon from "./Icons/ReligionIcon";
import EconomyIcon from "./Icons/EconomyIcon";
import SecurityIcon from "./Icons/SecurityIcon";
import ImageIcon from "./Icons/ImageIcon";
import Effect from "../Effect/Effect";
import styles from "./Effects.module.scss";
import colors from "../../common.scss";

const EFFECTS = {
  religion: ReligionIcon,
  image: ImageIcon,
  security: SecurityIcon,
  economy: EconomyIcon,
}

function Effects({ points, willEffect = {} }) {
  return (
    <div className={styles.effectsContainer}>
      {
        Object.keys(EFFECTS).map(type => (
          <div className={styles.iconContainer} key={type}>
            <Effect points={points[type]} willEffect={willEffect[type]}>
              {React.createElement(EFFECTS[type], {color: colors.stripColor})}
            </Effect>
        </div>
        ))
      }
    </div>
  );
}

export default Effects;
