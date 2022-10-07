import React from 'react';
import styles from './CategoryCard.module.scss';

export default function CategoryCard(props) {
  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <img className={styles.image} src={props.img} alt={props.name} />
        <div className={styles.imageOverlay}></div>
      </div>

      <div className={styles.bottom}>
        {props.name}
      </div>
    </div>
  )
}
