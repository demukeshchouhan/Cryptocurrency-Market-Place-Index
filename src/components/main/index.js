import React, { Component } from 'react';

import Balance from "./Balance";
import Chart from "./Chart";
import Currency from "./Currency";
import MyAccount from "./MyAccount";
import StatsBar from "./StatsBar";
import TopBar from "./TopBar";

import { 
  Grid, Row, Col, Image 
} from "react-bootstrap";

import { connect } from "react-redux";
import * as actions from "../../actions";



export class Main extends Component{
  render() {
    return (
      <div 
        className={this.props.sidebar ? "col-sm-11 col-sm-offset-1" : "col-sm-12 col-sm-offset-0"}
        style={!this.props.sidebar ? {"paddingLeft": "3rem"} :  null}
      >
      <div className="main__interface">
        <TopBar />
        <Row>
          <Col sm={6} md={4}><Balance /></Col>
          <Col sm={6} md={8}><MyAccount /></Col>
        </Row>
        <Row>
        <Chart />
        </Row>
        <Row>
          <StatsBar />
        </Row>
      </div>
      </div>
    )
  }
}


const stateProps = (state) => ({
  sidebar : state.sidebar.toggle_sidebar
});


export default connect(stateProps, actions)(Main);