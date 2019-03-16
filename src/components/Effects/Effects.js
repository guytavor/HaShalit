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
				<ReligionIcon className={`${styles.Icon} ${styles.iconBg}`}/>
			</div>
			<div className={`${styles.icon} ${styles.iconFill}`}>
				<ReligionIcon className={`${styles.Icon} ${styles.iconFill}`}/>
			</div>
		 </div>

		 <div className={styles.iconContainer}>
			<div className={`${styles.icon} ${styles.iconBg}`}>
				<EconomyIcon className={`${styles.Icon} ${styles.iconBg}`}/>
			</div>
			<div className={`${styles.icon} ${styles.iconFill}`}>
				<EconomyIcon className={`${styles.Icon} ${styles.iconFill}`}/>
			</div>
		 </div>

		 <div className={styles.iconContainer}>
			<div className={`${styles.icon} ${styles.iconBg}`}>
				<ReligionIconInverse className={`${styles.Icon} ${styles.iconBg}`}/>
			</div>
			<div className={`${styles.icon} ${styles.iconFill}`}>
				<ReligionIconInverse className={`${styles.Icon} ${styles.iconFill}`}/>
			</div>
		 </div>

		 <div className={styles.iconContainer}>
			<div className={`${styles.icon} ${styles.iconBg}`}>
				<EconomyIconInverse className={`${styles.Icon} ${styles.iconBg}`}/>
			</div>
			<div className={`${styles.icon} ${styles.iconFill}`}>
				<EconomyIconInverse className={`${styles.Icon} ${styles.iconFill}`}/>
			</div>
		 </div>

		</div>
  );
}

export default Effects;
