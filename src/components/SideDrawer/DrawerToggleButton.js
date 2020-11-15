import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = ({ clickDrawer }) => {
  return (
    <div>
      <button className="drawerToggle-button" onClick={clickDrawer}>
        <div className="drawerToggle-button__line" />
        <div className="drawerToggle-button__line" />
        <div className="drawerToggle-button__line" />
      </button>
    </div>
  );
};

export default DrawerToggleButton;
