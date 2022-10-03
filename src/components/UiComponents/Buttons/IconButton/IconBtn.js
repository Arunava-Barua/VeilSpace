import React from 'react';
import styles from './IconBtn.module.scss';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const addIcon =  <AddIcon className={styles.icon}/>
const userIcon = <PersonOutlineIcon className={styles.icon}/>


function IconBtn(props) {
    const icon = props.icon == 'add' ? addIcon: userIcon;
    return (
        <div className={styles.iconBtn}>
            <a href='#'>{icon}</a>
        </div>
    );
}

export default IconBtn;