import React from 'react'
import styles from './Book.module.scss'
import {Books} from '../../Assets/Books'
import {Covers} from '../../Assets/Covers'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudDownloadAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
export const Book = (props) => {
    return (
        <>
            <div className={styles.container} style={{background: Books[props.index].bg}}/>
            <div className={styles.bookContainer}>
                <div className={styles.iconTopbar}>
                    <FontAwesomeIcon icon={faTimesCircle} className={styles.iconClose} style={{color: Books[props.index].fontColor2}} onClick={props.handleBookVisibility}/>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.bookWrapper}>
                        <Covers index={props.index} className={styles.cover} style={{borderColor: Books[props.index].fontColor2}}/>
                        <div className={styles.data}>
                            <div className={styles.title} style={{color: Books[props.index].fontColor2}}>{Books[props.index].title}</div>
                            <div className={styles.author} style={{color: Books[props.index].fontColor2}}>{Books[props.index].author}</div>
                            <div className={styles.publisher} style={{color: Books[props.index].fontColor2}}>{Books[props.index].publisher}</div>
                        </div>
                    </div>
                    <div className={styles.linkContainer}>
                        <a className={styles.link} href={Books[props.index].link1} target="_blank" style={{color: Books[props.index].fontColor2}}>
                            <FontAwesomeIcon icon={faCloudDownloadAlt} onClick={props.handleBookVisibility}/>
                            Pobierz EPUB
                        </a>
                        <a className={styles.link} href={Books[props.index].link2} style={{color: Books[props.index].fontColor2}}>
                            <FontAwesomeIcon icon={faCloudDownloadAlt} onClick={props.handleBookVisibility}/>
                            Pobierz MOBI (kindle)
                        </a>
                    </div>

                    <a className={styles.description} style={{color: Books[props.index].fontColor2}}>OPIS:<br/>{Books[props.index].description}</a>
                    <div style={{minHeight: '10vh', display: 'flex', width: '100vw'}}></div>
                </div>
            </div>
        </>
    );
}

export default Book;