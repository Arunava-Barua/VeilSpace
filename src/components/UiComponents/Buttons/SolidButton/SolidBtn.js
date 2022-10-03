import React from 'react';
import styles from './SolidBtn.module.scss'

function SolidBtn(props) {
    return (
        <div className={styles.solidBtn}>
            {props.children}
        </div>
    );
}

export default SolidBtn;