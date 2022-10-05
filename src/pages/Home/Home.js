import React from 'react';
import Navbar from '../../components/NavigationComponents/Navbar/navbar';
import Slider from '../../components/UiComponents/Slider/Slider';
import styles from './Home.module.scss';
import Collection from './NFTCollection/Collection';

function Home(props) {
    return (
        <div className={styles.home}>
            <Navbar />
            <div className={styles.heading}>
                <div className={styles.heading1}>Explore</div>
                <div className={styles.heading2}>DAOs</div>
            </div>

            <div className={styles.subHeading}>Featured</div>

            <Slider />
            <Collection/>
        </div>
    );
}

export default Home;