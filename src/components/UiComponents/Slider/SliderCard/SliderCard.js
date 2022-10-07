import React from 'react';
import styles from './SliderCard.module.scss';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function SliderCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.top}>
        <div className={styles.overlay}></div>
        <img className={styles.img} src={props.url} alt="some image" />
      </div>
      <div className={styles.bottom}>
          <span className={styles.name}>{props.name}</span> <span className={styles.icon}><VerifiedIcon/></span>
      </div>

      <div className={styles.float}>
        <img className={styles.img} src={props.url} alt="some image" />

      </div>
    </div>
  )
}
