import React, { Component } from 'react';
import { findDomNode } from "react-dom";
import FontAwesome from "react-fontawesome";
import { 
  Grid, Row, Col, Image, Button
} from "react-bootstrap";

export default class StatsBar extends Component {
  
  state = {
    hidden : true
  }

  handleToggle() {
    this.setState({
      hidden : !this.state.hidden
    });
  }


  render() {
    return (
      <div className={this.state.hidden ? "statsbar slideInLeft" : "statsbar slideOutRight"}>
        <div className="row">
          <div className="col-md-8">
               <ul className={this.state.hidden ? "statsbar__nav slideInLeft" : "statsbar__nav slideOutRight"} >
               <li className="statsbar__nav-item">
                   <span className="statsbar__nav-item--text">ETH/IDD</span>
                   <span className="statsbar__nav-item--heading">365.56</span>
                   <span className="statsbar__nav-item--heading-sub green"><sup>+ 152%</sup></span>
                 </li>
   
                 <li className="statsbar__nav-item">
                   <span className="statsbar__nav-item--text">ETH/IDD</span>
                   <span className="statsbar__nav-item--heading">365.56</span>
                   <span className="statsbar__nav-item--heading-sub green"><sup>+ 152%</sup></span>
                 </li>
   
                 <li className="statsbar__nav-item">
                   <span className="statsbar__nav-item--text">ETH/IDD</span>
                   <span className="statsbar__nav-item--heading">365.56</span>
                   <span className="statsbar__nav-item--heading-sub green"><sup>+ 152%</sup></span>
                 </li>
   
                 <li className="statsbar__nav-item">
                   <span className="statsbar__nav-item--text">ETH/IDD</span>
                   <span className="statsbar__nav-item--heading">365.56</span>
                   <span className="statsbar__nav-item--heading-sub red"><sup>+ 152%</sup></span>
                 </li>
   
                 <li className="statsbar__nav-item">
                   <span className="statsbar__nav-item--text">ETH/IDD</span>
                   <span className="statsbar__nav-item--heading">365.56</span>
                   <span className="statsbar__nav-item--heading-sub green"><sup>+ 152%</sup></span>
                 </li>
   
              </ul>
          </div>
          <div className="col-md-4">
          <div className="statsbar__toggle pull-right" onClick={() => this.handleToggle()}>
            <span className="statsbar__toggle-icon">
              <FontAwesome name="area-chart" />
            </span>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
