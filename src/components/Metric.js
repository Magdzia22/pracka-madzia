import classes from "./Metric.module.css";

export const Metric = ({ title, description }) => {
    return <div className={classes.metric}>
        <span>
            {title}
        </span>
        <span className={classes.description}>
            {description}
        </span>
    </div>;
}
