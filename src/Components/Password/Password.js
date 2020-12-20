import React, { useState } from 'react'
import styles from './Password.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleRight, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'
export const Password = (props) => {
    const wantedPassword = props.wantedPassword
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)
    const errorMsg = 'To nie jest poprawne hasło'
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const checkPassword = () => {
        if (inputValue!=wantedPassword) {setError(true)}
        else {
            setError(false)
            props.checkPassed(props.index)
        }
    }
    return(
        <>
            <div className={styles.container} style={{background: props.bgColor}}>
            </div>
            <div className={styles.passwordContainer}>
                <div className={styles.wrapper}>
                    <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} onClick={props.handlePasswordVisibility}/>
                    <div className={styles.passwordWrapper}>
                        <input type="password" className={styles.inputText} onChange={(e)=>handleChange(e)} value={inputValue} placeholder={'HASŁO'}/>
                        <FontAwesomeIcon icon={faChevronCircleRight} className={styles.icon}  onClick={checkPassword}/>
                    </div>
                    {error ? <div>{errorMsg}</div> : null}

                </div>
            </div>
        </>

    )
}

export default Password;