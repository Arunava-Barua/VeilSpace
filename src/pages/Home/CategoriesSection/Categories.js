import React from 'react';
import styles from './Categories.module.scss';
import CategoryCard from './CategoryCard/CategoryCard';
import img from '../../../assets/images/gaming.png'
import data from '../../../data/CategoryData/CategoryData';

export default function Categories() {

    const cards = data.map((dataItem)=>{
        return <div className={styles.col}>
            <CategoryCard img = {dataItem.imgUrl} name={dataItem.name} />
        </div>
    });

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div className={styles.heading}>
                    Browse by Categories
                </div>
                <div className={styles.cardWrapper}>
                        {cards}
                        {/* <div className={styles.col}>
                            <CategoryCard />
                        </div>
                        <div className={styles.col}>
                            <img src={img}  className={styles.image} alt="Category Image" />
                        </div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div> */}
              

                </div>
            </div>
        </div>
    )
}
