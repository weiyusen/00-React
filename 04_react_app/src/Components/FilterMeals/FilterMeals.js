import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

export default function FilterMeals(props) {
    const inputChangeHandler = (e) => {
        const keyword = e.target.value.trim()
        props.onFilter(keyword)
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input type="text" placeholder='请输入关键字' className={classes.SearchInput} onChange={inputChangeHandler}/>
                <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon}></FontAwesomeIcon>
            </div>
        </div>
    )
}
