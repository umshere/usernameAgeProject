import React, { Fragment } from "react";
import Card from "./Card";
import ReactDom from "react-dom";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};
const Modaloverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}> OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <Modaloverlay
          message={props.message}
          title={props.title}
          onConfirm={props.onConfirm}
        ></Modaloverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModel;
