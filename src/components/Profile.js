import React from "react";
import { Logo } from "./Logo"
import { Details } from "./Details";
import { Metrics } from "./Metrics"
import classes from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={classes.card}>
            <div className={classes.topCard}>
                <Logo />
            </div>
            <Details name={"Magda"} surname={"Marcinkowska"} age={"29"} city={"Cracow"} />
            <Metrics />
        </div>
    );
};
