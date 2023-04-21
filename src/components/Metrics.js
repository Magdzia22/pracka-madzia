import { Metric } from "./Metric";
import classes from "./Metrics.module.css";

export const Metrics = () => {
    return (
        <div className={classes.metrics}>
            <Metric title={"80K"} description="Followers"/>
            <Metric title={"803K"} description="Likes"/>
            <Metric title={"1.4K"} description="Photos"/>
        </div>
    );
};


