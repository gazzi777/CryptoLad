import React from "react";
import classes from "./Content.module.css"
import Info from "./Info/Info";


//Тут прям дублирование кода, но я не знаю как без него сделать, тк для каждого элемента нужно зменять css
const Content = (props) => {
    let n = props.number;
    // eslint-disable-next-line
    if (n == 1) {
        return (
            <div className={classes.container}>
                <div className={classes.contnent} >
                    <div className={classes.text}>
                        <Info name={props.name} info={props.info} main={props.main} />
                    </div>
                </div>
            </div>
        )
    }
    // eslint-disable-next-line
    else if (n == 2) {
        return (
            <div className={classes.container}>
                <div className={classes.contnent2} >
                    <div className={classes.text2} >
                        <Info name={props.name} info={props.info} main={props.main} />
                    </div>
                </div>
            </div>

        )
    }
    else {
        return (
            <div className={classes.container}>
                <div className={classes.contnent} >
                    <div className={classes.text3}>
                        <Info name={props.name} info={props.info} main={props.main} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;