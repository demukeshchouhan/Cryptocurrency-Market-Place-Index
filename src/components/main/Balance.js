import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import { ResponsiveContainer, LineChart, Line,Tooltip, Legend } from 'recharts';
import { 
  Grid, Row, Col, Image, Button
} from "react-bootstrap";


export default class Balance extends Component {
  state = {
    data : [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]
  }
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
            <ResponsiveContainer width={"100%"} height={80} >
              <LineChart data={this.state.data}>
                <Line type='monotone' dataKey='pv' stroke='#3cce61' strokeWidth={2} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
          </div>
          </div>
          <div className="col-md-6">
          <div className="balance__bar--col-2-wrapper">
            <span className="balance__bar-text d-block">Current order volume</span>
            <span className="heading-small bold-800">$</span>
            <span className="heading-large"> 3763</span>
            <div className="balance__bar-graph">
            <ResponsiveContainer width={"100%"} height={80} >
              <LineChart data={this.state.data}>
                <Line type='monotone' dataKey='pv' stroke='#3cce61' strokeWidth={2} dot={false}/>
              </LineChart>
            </ResponsiveContainer>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
    )
  }
}
