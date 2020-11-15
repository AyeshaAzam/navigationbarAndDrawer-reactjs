import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  AccountCircleIcon: {
    "& svg": {
      fontSize: 35,
      color: "white",
    },
  },
}));

const SideDrawer = ({ show }) => {
  let drawerClasses = "sideDrawer";

  const classes = useStyles();

  // if (show) ---> is true
  // then add the below classes in DOM
  if (show) {
    drawerClasses = "sideDrawer open";
  }

  return (
    <>
      <IconContext.Provider value={{ color: "Red" }}>
        <header className="sideDrawer__header">
          <nav className={drawerClasses}>
            <ul className="sideDrawer__nav-menu-items">
              <li className="sideDrawer__navbar-toggle">
                {/* <a href="/">testing</a> */}
                <Link to="#" className="sideDrawer__menu-bars-link">
                  <div className="sideDrawer__menu-bars-link-account">
                    <span className="SideDrawer__AcountUser-icon">
                      <IconButton className={classes.AccountCircleIcon}>
                        <AccountCircleIcon />
                      </IconButton>
                    </span>
                    <span className="header__optionLineTwo">Hej, logga in</span>
                  </div>
                </Link>
                <Link to="#" className="sideDrawer__menu-bars-link">
                  <div className="sideDrawer__menu-bars-link-close">
                    <AiIcons.AiOutlineClose />
                  </div>
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                      <div className="spacer" />
                      {item.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </IconContext.Provider>
    </>
  );
};

export default SideDrawer;
