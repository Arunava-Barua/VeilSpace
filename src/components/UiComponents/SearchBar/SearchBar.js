import React from 'react';
import styles from './SearchBar.module.scss';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {
    return (
        <div className={styles.borderWrapper}>
            <div className={styles.searchBar}>
                <SearchIcon className={styles.icon} />
                <input className={styles.input}></input>
            </div>
        </div>

    );
}

export default SearchBar;