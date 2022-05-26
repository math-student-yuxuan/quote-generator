import React from "react";
import "./Backdrop.css";
function Backdrop(props) {
  return (
    <>
      <style children={props.colorAnim} />
      <div
        key={props.color}
        className="backdrop"
        style={props.colorChangeStyle}
      ></div>
    </>
  );
}
export default Backdrop;
