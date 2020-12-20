import React, { useEffect, useState } from 'react'
import styles from './List.module.scss'
import {ListItem} from '../ListItem/ListItem'
import {Password} from '../Password/Password'
import {Books} from '../../Assets/Books'
import {Book} from '../Book/Book'
export const List = () => {
    const [passwordVisibility,setPasswordVisibility] = useState(false)
    const [bookVisibility,setBookVisibility] = useState(false)
    const [passwordColor,setPasswordColor] = useState(false)
    const [myIndex, setMyIndex] = useState(-1)
    const [bookIndex, setBookIndex] = useState(-1)
    const [password,setPassword] = useState('')
    const [list, setList] = useState([...Books])
    const handleClick = (index) => {
        if (list[index].unlocked==false) {
            let listCopy = [...list]
            listCopy.forEach((item)=> item.opened=false)
            listCopy[index].opened=true;
            setList([...listCopy])
            setMyIndex(index)
            setPassword(list[index].password)
            setPasswordColor(list[index].color1)
            setPasswordVisibility(true)
        }
        else {
            setBookIndex(index)
            setBookVisibility(true)
        }

    }
    const handlePasswordVisibility = () => {
        setPasswordVisibility(false);
    }
    const handleBookVisibility = () => {
        setBookVisibility(false);
    }

    const checkPassed = (index) => {
        setPasswordVisibility(false)
        let listCopy = [...list]
        listCopy[index].unlocked=true;
        localStorage.setItem(listCopy[index].title, true)
        setList([...listCopy])
    }

    useEffect(()=>{
        let listCopy = [...list]
        listCopy.forEach((item, index)=>{
            const ls = localStorage.getItem(item.title)
            if (ls!=null) {
                listCopy[index].unlocked=true;
            }
        })
        setList([...listCopy])
    },[])
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {list.map((item, index)=>
                    <ListItem handleClick={()=>handleClick(index)} state={list[index]} index={index}/>
                )}
            </div>
            {passwordVisibility ? <Password wantedPassword={password} index={myIndex} checkPassed={checkPassed} handlePasswordVisibility={handlePasswordVisibility} bgColor={passwordColor}/> : null}
            {bookVisibility ? <Book index={bookIndex} handleBookVisibility={handleBookVisibility}/> : null}

        </div>
    )
}

export default List;