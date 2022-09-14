import React from "react";
import {  NavLink } from "react-router-dom";
import classes from "./Header.module.css"

const Header = () => {
    return (

        <div className={classes.head}>
            <div className={classes.header}>
                <div className={`${classes.row} ${classes.between}`}>
                    <div className={classes.logo}>GAZZI</div>
                    <div className={classes.nav}>
                        <div>
                            <NavLink to="/" className={classes.ula}>Главная</NavLink> 
                            <NavLink to="/calculator" className={classes.ula}>Калькулятор</NavLink>
                        </div>       
                        {/* <ul>
                            <li><a href="#">dfd</a></li>
                            <li><a href="#">dsdsd</a></li>
                            <li><a href="#">dfsdsdd</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;