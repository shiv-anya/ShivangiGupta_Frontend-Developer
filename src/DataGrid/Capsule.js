import classes from "./Capsule.module.css";

const Capsule = (props) => {
  return (
    <article className={classes.card}>
      <div className={classes.image}></div>
      <div className={classes.about}>
        <h2>{props.type}</h2>
        <p>{props.serial}</p>
        <button>{props.status}</button>
      </div>
    </article>
  );
};

export default Capsule;
