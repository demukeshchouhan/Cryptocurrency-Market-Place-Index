import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../actions";

import { 
  Grid, Row, Col, Image 
} from "react-bootstrap";

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__user-profile">
          <figure className="sidebar__user-profile-img-box" >
            <img src="https://avatars0.githubusercontent.com/u/8403545?s=460&v=4" className="sidebar__user-profile-img"/>
            <figcaption className="sidebar__user-profile-notification">8</figcaption>
          </figure>

        </div>
      </div>
    )
  }
}



const stateProps = (state) => ({
  sidebar : state.sidebar.toggle_sidebar
});


export default connect(stateProps, actions)(Sidebar);