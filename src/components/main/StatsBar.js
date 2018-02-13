import React, { Component } from 'react';
import { findDomNode } from "react-dom";
import FontAwesome from "react-fontawesome";
import { 
  Grid, Row, Col, Image, Button
} from "react-bootstrap";

export default class StatsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden : true
    }
  }
  handleToggle() {
    this.setState({
      hidden : !this.state.hidden
    });
    console.log(this.statsBarBtn);
  }
  render() {
    return (
      <div className="stats_bar">
        
      </div>
    )
  }
}
