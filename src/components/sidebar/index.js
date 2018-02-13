import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions";
import { Scrollbars } from 'react-custom-scrollbars';
import { 
  Grid, Row, Col, Image 
} from "react-bootstrap";

import UserProfile from "./UserProfile";
import BlankSpace from "./BlankSpace";
import Navbar from "./Navbar";

class Sidebar extends Component {

  render() {
    return (
    <div className={
      this.props.sidebar ? "sidebar open" : "sidebar close"
    }>
    <Scrollbars  autoHide>
    <div className="sidebar__wrapper">
	  	<UserProfile />
		  <BlankSpace />
		  <Navbar />
      </div>
    </Scrollbars>
	  </div>
    )
  }
}



const stateProps = (state) => ({
  sidebar : state.sidebar.toggle_sidebar
});


export default connect(stateProps, actions)(Sidebar);