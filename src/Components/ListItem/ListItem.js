import React from 'react'
import styles from './ListItem.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock, faLockOpen, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import Images from '../../Assets/Images'
export const ListItem = (props) => {
    return(
        <div className={styles.container} onClick={props.handleClick}>
            <div className={styles.sthContainer} style={{background: props.state.bg}}>
                <Images index={(props.index*2)} color={props.state.color1}/>
                <Images index={(props.index*2)+1} color={props.state.color2}/>
            </div>
            <div className={styles.book}>
                <div className={styles.bookTitle}>{props.state.title}</div>
                <div className={styles.bookAuthor}>{props.state.author}</div>
            </div>
            <div className={styles.icons}>
                {props.state.unlocked ? <><FontAwesomeIcon style={{color: 'white'}} icon={faLockOpen}/><FontAwesomeIcon style={{color: 'white'}} icon={faChevronCircleRight}/></> : <FontAwesomeIcon style={{color: 'white'}} icon={faLock}/>}
            </div>
        </div>

    )
}

export default ListItem;