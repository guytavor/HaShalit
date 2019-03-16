import React from "react";
import ReligionIconInverse from "./Icons/ReligionIconInverse";
import EconomyIconInverse from "./Icons/EconomyIconInverse";
import Effect from "../Effect/Effect";
import styles from "./Effects.module.scss";

function Effects({points}) {
	console.log('adler', points);
  return (
    <div className={styles.effectsContainer}>
      <div className={styles.iconContainer}>
	  	<Effect points={points.religion}>
		  <ReligionIconInverse />
		</Effect>
      </div>
      <div className={styles.iconContainer}>
	  	<Effect points={points.economy}>
		  <EconomyIconInverse />
		</Effect>
      </div>
      <div className={styles.iconContainer}>
	  	<Effect points={points.security}>
		  <ReligionIconInverse />
		</Effect>
      </div>
      <div className={styles.iconContainer}>
	  	<Effect points={points.image}>
		  <EconomyIconInverse />
		</Effect>
      </div>
    </div>
  );
}

export default Effects;
