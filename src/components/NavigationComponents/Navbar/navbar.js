import React, { useState } from 'react';
import IconBtn from '../../UiComponents/Buttons/IconButton/IconBtn';
import SolidBtn from '../../UiComponents/Buttons/SolidButton/SolidBtn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import styles from './navbar.module.scss';
import SearchBar from '../../UiComponents/SearchBar/SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ClearIcon from '@mui/icons-material/Clear';


const addIcon =  <AddIcon className={styles.icon}/>
const userIcon = <PersonOutlineIcon className={styles.icon}/>

function Navbar(props) {

    const [slideIn, setSlideIn] = useState(false);
    return (

        <nav className={`${styles.nav}`}>
           <ul className={`${styles.navLeft}`}>
                <li className={styles.logo}><AcUnitIcon className={styles.icon}/></li>
                <li className={styles.searchBar}><SearchBar/></li>
           </ul>
           <ul className={`${styles.navRight}`}>
                <li className={styles.create}><IconBtn icon='add'/></li>
                <li className={styles.user}><IconBtn icon='user'/></li>
                <li className={styles.connect}>
                    <SolidBtn>Connect</SolidBtn>
                </li>

           </ul>
           <div className={`${styles.hamburger} ${slideIn == true && styles.invisible}`} onClick={()=>{setSlideIn((prev)=>{return !prev})}}>
                <MenuIcon className={styles.menuIcon}/>
           </div>
           <div className={`${styles.rightMenu} ${slideIn==true && styles.slideIn } `}>
            <div className={styles.cross} onClick={()=>{setSlideIn((prev)=>{return !prev})}}>
                <ClearIcon className={styles.clearIcon}/>
            </div>
            <div className={styles.wrapper}>
            <div className={`${styles.menuItem} ${styles.menuItem1}`}> <div className={styles.iconWrap}>{addIcon}</div> Create DAO</div>                
                <div className={`${styles.menuItem} ${styles.menuItem2}`}><div className={styles.iconWrap}>{userIcon} </div>Profile</div>                
                <div className={`${styles.menuItem} ${styles.menuItem3}`}><SolidBtn>Connect</SolidBtn></div> 
            </div>
                               
           </div>
        </nav>
    );
}

export default Navbar;