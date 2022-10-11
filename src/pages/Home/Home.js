import React from 'react';
import Navbar from '../../components/NavigationComponents/Navbar/navbar';
import Slider from '../../components/UiComponents/Slider/Slider';
import Categories from './CategoriesSection/Categories';
import styles from './Home.module.scss';
import Collection from './NFTCollection/Collection';
import Icon from '../../assets/CustomIcons/DaoIcon/DaoIcon';

function Home(props) {
    return (
        <div className={styles.home}>
            <Navbar />
            <div className={styles.heading}>
                <div className={styles.heading1}>Explore</div>
                <div className={styles.heading2}>DAOs</div>
            </div>
            <div className={styles.lights}>
                <div className={styles.light1}></div>
                <div className={styles.light2}></div>
                <div className={styles.light3}></div>
            </div>
            <div className={styles.overlay}>
            </div>

            <div className={styles.subHeading}>Featured</div>

            <Slider />
            <Collection/>
            <Categories/>
            <Icon/>
        </div>
    );
}

export default Home;