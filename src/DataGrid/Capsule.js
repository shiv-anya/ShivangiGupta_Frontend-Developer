import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Capsule.module.css";

const Capsule = (props) => {
  const [modal, setModal] = useState(false);
  const triggerModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <Fragment>
      {modal && <Modal onClick={closeModal} capsule={props.capsule} />}
      <article className={classes.card} onClick={triggerModal}>
        <div className={classes.image}></div>
        <div className={classes.about}>
          <h2>{props.type}</h2>
          <p>{props.serial}</p>
          <p className={classes.status}>{props.status}</p>
        </div>
      </article>
    </Fragment>
  );
};

export default Capsule;
