import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

import { 
  Grid, Row, Col, Image, Button
} from "react-bootstrap";


export default class Balance extends Component {
  render() {
    return (
      <div className="balance__bar">
        <h2 className="balance__bar-header">Balance</h2>
        <div className="row">
          <div className="balance__bar--col-1">
          <div className="col-md-6">
          <div className="balance__bar--col-1-price">
            <span className="heading-small">ETH</span>
            <span className="heading-large">107.89</span>
            <div className="balance__bar--text-wrapper">
            <span className="balance__bar-text">$ 399856.14</span>
            <span className="balance__bar-text green">6.89%</span>
            </div>
          </div>
          </div>
          <div className="col-md-6">
          <div className="balance__bar--col-1-links">
          <button className="link__btn">
              <span className="link__btn-icon"><FontAwesome name="long-arrow-up"/></span>
              <span className="link__btn-text">Sell</span>
            </button>
            <button className="link__btn">
              <span className="link__btn-icon"><FontAwesome name="long-arrow-down"/></span>
              <span className="link__btn-text">Buy</span>
            </button>
            <button className="link__btn">
              <span className="link__btn-icon"><FontAwesome name="file-text-o"/></span>
              <span className="link__btn-text">Order</span>
            </button>
          </div>
          </div>
          </div>
        </div>


        <div className="row">
        <div className="balance__bar--col-2">
          <div className="col-md-6">
          <div className="balance__bar--col-2-wrapper">
            <span className="balance__bar-text d-block">Your today response</span>
            <span className="heading-small bold-800">+ $</span>
            <span className="heading-large"> 195</span>
            <div className="balance__bar-graph">
              <div className="progress">
              <div className="progress-bar progress-bar-primary" 
                role="progressbar" 
                aria-valuenow="40" 
                aria-valuemin="30" 
                aria-valuemax="100" 
                style={{"width": "40%"}}></div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-6">
          <div className="balance__bar--col-2-wrapper">
            <span className="balance__bar-text d-block">Current order volume</span>
            <span className="heading-small bold-800">$</span>
            <span className="heading-large"> 3763</span>
            <div className="balance__bar-graph">
              <div className="progress">
              <div className="progress-bar progress-bar-success" 
                role="progressbar" 
                aria-valuenow="40" 
                aria-valuemin="30" 
                aria-valuemax="100" 
                style={{"width": "70%"}}></div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
