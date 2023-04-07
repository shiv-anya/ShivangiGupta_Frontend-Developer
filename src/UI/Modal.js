import classes from "./Modal.module.css";
import { Fragment } from "react";

import reactDom from "react-dom";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.image}></div>
        <div className={classes.info}>
          <ul>
            {Object.entries(props.capsule).map((t, k) => (
              <li key={t.id}>{`${t[0]}: ${k}`}</li>
            ))}
          </ul>
          <button onClick={props.onClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay onClick={props.onClick} capsule={props.capsule}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
