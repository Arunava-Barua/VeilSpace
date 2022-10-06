import React from 'react';
import styles from './SliderCard.module.scss';
import image from '../../../../assets/images/images.jpg';

export default function SliderCard() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.top}>
        <div className={styles.overlay}></div>
        <img className={styles.img} src={image} alt="some image" />
      </div>
      <div className={styles.bottom}>

      </div>

      <div className={styles.float}>
        <img className={styles.img} src={image} alt="some image" />

      </div>
    </div>
  )
}
