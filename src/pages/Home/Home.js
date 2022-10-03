import React from 'react';
import Navbar from '../../components/NavigationComponents/Navbar/navbar';
import styles from './Home.module.scss';

function Home(props) {
    return (
        <div className={styles.home}>
            <Navbar />
        </div>
    );
}

export default Home;