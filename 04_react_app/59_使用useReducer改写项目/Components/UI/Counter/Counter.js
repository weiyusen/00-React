import React,{useContext} from 'react';
import classes from './Counter.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from '../../../store/cart-context';
const Counter = (props) => {
    const ctx = useContext(CartContext);
    const addButtonHandler = () => {
        // ctx.addItem(props.meal)
        ctx.cartDispatch({type:'ADD', meal:props.meal})
    }
    const subButtonHandler = () => {
        // ctx.removeItem(props.meal)
        ctx.cartDispatch({type:'REMOVE', meal:props.meal})
    }

    return (
        <div className={classes.Counter}>
            {(props.meal.amount && props.meal.amount !== 0) ?
                <>
                    <button className={classes.Sub} onClick={subButtonHandler}><FontAwesomeIcon icon={faMinus} /></button>
                    <span className={classes.count}>{props.meal.amount}</span>
                </>
                : null}
            <button className={classes.Add} onClick={addButtonHandler}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
}

export default Counter;
