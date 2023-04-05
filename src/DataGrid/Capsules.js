import classes from "./Capsules.module.css";
import Capsule from "./Capsule";

const Capsules = (props) => {
  const capsules = props.capsules;
  return (
    <section className={classes.capsules}>
      {capsules &&
        capsules.map((capsule) => {
          return (
            <Capsule
              serial={capsule.serial}
              status={capsule.status}
              type={capsule.type}
              key={capsule.id}
            />
          );
        })}
    </section>
  );
};

export default Capsules;
