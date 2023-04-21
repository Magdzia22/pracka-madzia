import classes from "./Details.module.css"

export const Details = ({ name, surname, age, city }) => {
  return (
    <div className={classes.details}>
      <div>
        <span className={classes.name}>{name}</span>
        <span className={classes.name}> {surname}</span>
        <span className={classes.age}> {age}</span>
      </div>
      <span className={classes.city}>{city}</span>
    </div>
  );
};

