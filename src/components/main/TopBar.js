import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { 
  Grid, Row, Col, Image 
} from "react-bootstrap";

class TopBar extends Component {
  handleSidebarToggle() {
    this.props.toggleSidebar(!this.props.sidebar);
  }
  render() {
    return (
      <div className="topbar">
        <div className="row">
          <div className="col-md-1">
            <FontAwesome 
              name={this.props.sidebar ? "chevron-left" : "chevron-right" }
              className="topbar-chev-icon"
              onClick={() => this.handleSidebarToggle()}
              />
          </div>
          <div className="col-md-11">
            <div className="row">
            <div className="col-md-4">
              <h2 className="topbar__heading primary-heading">Accounts Overview</h2>
            </div>
            <div className="col-md-8 ">
              <ul className="topbar__nav pull-right">
              <li className="topbar__nav-text">Page Style</li>
              <li><FontAwesome name="th" className="topbar__nav-icon active"/></li>
              <li><FontAwesome name="bars" className="topbar__nav-icon"/></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const stateProps = (state) => ({
  sidebar : state.sidebar.toggle_sidebar
});


export default connect(stateProps, actions)(TopBar);