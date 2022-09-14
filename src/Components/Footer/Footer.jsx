import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={`${classes.row} ${classes.between}`}>


                    <div className={classes.copyright}>
                        <div className={classes.copyright_logo}>
                            <div className={classes.logo}>GAZZI</div>
                        </div>
                        <p className={classes.copyright_desc}>
                        Get out there & discover your next slope, mountain & destination!
                        </p>
                        <p className={classes.copyrigth_terms}>
                            Copyright 2022 GAZZI, Inc. Terms
                        </p>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.nav}>
                            <h4 className={classes.title}>More on the Blog</h4>
                            <div className={classes.blok}>
                                <NavLink to="*" className={classes.ula}>About GAZZI</NavLink>
                                <NavLink to="*" className={classes.ula}>Contributtors</NavLink>
                                <NavLink to="*" className={classes.ula}>Write For Us</NavLink>
                                <NavLink to="*" className={classes.ula}>Contact Us</NavLink>
                                <NavLink to="*" className={classes.ula}>Privacy Policy</NavLink>
                            </div>
                        </div>

                        <div className={classes.nav}>
                            <h4 className={classes.title}>More on GAZZI</h4>
                            <div>
                                <NavLink to="*" className={classes.ula}>The Team</NavLink>
                                <NavLink to="*" className={classes.ula}>Jobs</NavLink>
                                <NavLink to="*" className={classes.ula}>Press</NavLink>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Footer;