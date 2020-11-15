import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from "./components/Toolbar/Toolbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// from youtube: ReactJS - Build a Responsive Navigation Bar & Side Drawer Tutorial

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    //prevState is paased by react, its inbuild in react
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backdropClickHandler = () => {
    // this will always close it, we dont need to know prevstate of it
    this.setState({
      sideDrawerOpen: false,
    });
  };

  render() {
    // for my entire App, I set up an inline style '<div style={{...}}>' and
    // set the height to 100%, so the <SideDrawer /> get height for 100% for full page of the webside
    // and also the parent element have to have height of 100%, so our body in index.css file gets also height: 100%
    //and to body's parent 'html' also gets height of 100%

    //let sideDrawer; // same as ---> let sideDrawer = null;
    let backdrop; // same

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop clickBackdrop={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div style={{ height: "100%" }}>
          {/* //I am passing reference like this: this.drawerToggleClickHandler, 
        // which means I pass the address to that method */}
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "74px" }}>
            <h2>This is the page content!</h2>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
