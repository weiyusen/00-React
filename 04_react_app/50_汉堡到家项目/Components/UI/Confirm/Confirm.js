import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'
export default function Confirm(props) {
    return (
        <Backdrop className={classes.ConfirmOuter}  onClick={props.cancelHandler}>
            <div className={classes.confirm}>
                <p className={classes.confirmText}>{props.confirmText}</p>
                <div>
                    <button className={classes.Cancel} onClick={(e) => {props.onCancel(e)}}>取消</button>
                    <button className={classes.Ok} onClick={() => {props.onOk()}}>确认</button>
                </div>
            </div>
        </Backdrop>
    )
}
