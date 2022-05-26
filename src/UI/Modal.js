import React from "react";
import Backdrop from "./Backdrop";
import Card from "./Card";
import "./modal.css";

function Modal(props) {
  return (
    <>
      <Backdrop
        color={props.color}
        colorAnim={props.colorAnim}
        colorChangeStyle={props.colorChangeStyle}
      />
      <div className="modal-card">
        <Card>{props.children}</Card>
        <a href={props.url}>
          <p>{props.link}</p>
        </a>
      </div>
    </>
  );
}

export default Modal;
