import React from 'react';
import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter';
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.DescBox}>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                {/* 如果不想要desc,那么只需要在props里传上一个noDesc就行了 */}
                {props.noDesc ? null : <p className={classes.Desc}>{props.meal.desc}</p>}
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Counter meal={props.meal}></Counter>
                </div>
            </div>
        </div>
    );
}

export default Meal;
