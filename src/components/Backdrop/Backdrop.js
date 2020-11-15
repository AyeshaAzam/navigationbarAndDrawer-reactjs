import React from "react";
import "./Backdrop.css";

const Backdrop = ({ clickBackdrop }) => {
  return <div className="backdrop" onClick={clickBackdrop} />;
};

export default Backdrop;
