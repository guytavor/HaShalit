import React from "react";
import styles from "./Effects.module.scss";
import ReligionIcon from "./Icons/ReligionIcon"

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
		</div>
  );
}

export default Effects;
