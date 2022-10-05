import img from '../../../assets/images/Risen.png'
import React from 'react'
import styles from './Collection.module.scss'
import collectionData from '../../../data/CollectionsData/nftCollections'
export default function Collection() {

    const tableRows = collectionData.map((dataItem) => {
        return <div className={styles.tableRow}>

            <div className={styles.rowLeft}>
                <div className={styles.leftItem}>{dataItem.serial}</div>
                <div className={`${styles.leftItem} ${styles.rounded} `}><img className={styles.iconImage} src={img} alt="icon image" /></div>
                <div className={styles.leftItem}>{dataItem.name}</div>
            </div>
            <div className={styles.rowRight}>
                <div className={styles.rightItem}>{dataItem.floorPrice}</div>
                <div className={styles.rightItem}>{dataItem.volume}</div>
            </div>

        </div>
    });
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                Nft Collections
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.tableHeader}>
                    <div className={styles.headerLeft}>
                        <div className={styles.rowLeft}>
                            Collections
                        </div>
                        <div className={styles.rowRight}>
                            <div className={styles.rightItem}>Floor Price</div>
                            <div className={styles.rightItem}>Volume</div>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <div className={styles.rowLeft}>
                             Collections
                        </div>
                        <div className={styles.rowRight}>
                            <div className={styles.rightItem}>Floor Price</div>
                            <div className={styles.rightItem}>Volume</div>
                        </div>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableLeft}>
                        {tableRows}
                        {/* <div className={styles.tableRow}>

                            <div className={styles.rowLeft}>
                                <div className={styles.leftItem}></div>
                                <div className={styles.leftItem}></div>
                                <div className={styles.leftItem}></div>
                            </div>
                            <div className={styles.rowRight}>
                                <div className={styles.rightItem}></div>
                                <div className={styles.rightItem}></div>
                            </div>

                        </div>
                        <div className={styles.tableRow}></div>
                        <div className={styles.tableRow}></div>
                        <div className={styles.tableRow}></div>
                        <div className={styles.tableRow}></div> */}
                    </div>
                    <div className={styles.tableRight}>
                        {tableRows}
                    </div>
                </div>
            </div>
        </div>
    )
}
