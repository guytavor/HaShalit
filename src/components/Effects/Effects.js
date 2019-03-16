import React from "react";
import styles from "./Effects.module.scss";
import ReligionIcon from "./Icons/ReligionIcon"
import ReligionIconInverse from "./Icons/ReligionIconInverse"
import EconomyIcon from "./Icons/EconomyIcon"
import EconomyIconInverse from "./Icons/EconomyIconInverse"

function Effects() {

	return (
		<div className={styles.effectsContainer}>
     <div className={styles.iconContainer}>
			<div className={`${styles.icon} ${styles.iconBg}`}>
				<ReligionIcon />
			</div>
			<div className={`${styles.icon} ${styles.iconFill}`}>
				<ReligionIcon />
			</div>
		 </div>

		 <div className={styles.iconContainer}>
			<div className={`${styles.icon} ${styles.iconBg}`}>
				<EconomyIcon />
			</div>
			<div className={`${styles.icon} ${styles.iconFill}`}>
				<EconomyIcon />
			</div>
		 </div>

		 <div className={styles.iconContainer}>
			<div className={`${styles.iconInverse} ${styles.iconFillInverse}`}/>
			<div className={`${styles.iconInverse} ${styles.iconFillLevelInverse}`}/>
			<div className={`${styles.iconInverse} ${styles.iconBgInverse}`}>
				<ReligionIconInverse />
			</div>
		 </div>

		 <div className={styles.iconContainer}>
		 <div className={`${styles.iconInverse} ${styles.iconFillInverse}`}/>
			<div className={`${styles.iconInverse} ${styles.iconFillLevelInverse}`}/>
			<div className={`${styles.iconInverse} ${styles.iconBgInverse}`}>
				<EconomyIconInverse />
			</div>
		 </div>

		</div>
  );
}

export default Effects;
