import React from "react";
import { ReactComponent as ReligionIcon } from '../../assets/effects/ReligionIcon.svg';
import { ReactComponent as SecurityIcon } from '../../assets/effects/SecurityIcon.svg';
import { ReactComponent as EconomyIcon } from '../../assets/effects/EconomyIcon.svg';
import { ReactComponent as ImageIcon } from '../../assets/effects/ImageIcon.svg';
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
              {React.createElement(EFFECTS[type], { color: colors.stripColor })}
            </Effect>
          </div>
        ))
      }
    </div>
  );
}

export default Effects;
