import React from "react";
import classes from "./Info.module.css"


const Info = (props) => {
    return (
        <div>
            <div className={classes.subtitle}>{props.name}</div>
            <div className={classes.title}>{props.info}</div>
            <p className={classes.info}>{props.main}</p>
            <div className={classes.read}>read more (В разработке)</div>
        </div>


    )
}

export default Info;