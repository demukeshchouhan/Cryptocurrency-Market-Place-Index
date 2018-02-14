import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { findDOMNode } from "react-dom";
import axios from "axios";
import { 
  Grid, Row, Col, Image, Button
} from "react-bootstrap";


export default class Chart extends Component {

  state = {
    data: []
  }

  handleChartBarNav(e) {
      document.querySelectorAll(".chart__topbar-nav--item").forEach((el) => {
        el.classList.remove("active");
      });
      findDOMNode(e.target).classList.add("active"); 
  }

  componentDidMount() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then((res) => {
        const dataList = [];
        const storePrice = res.data.map(item => {
          dataList.push({ name : item.name, value: parseInt(item.price_usd) })
        });
        this.setState({
          data : dataList
        })
        console.log(this.state)
      })
  }
  render() {
    return (
      <div className="chart">
      <div className="chart__topbar">
          <div className="col-md-6">
          <h2 className="chart__topbar-heading">Etherum Charts</h2>
          <div className="chart__topbar-currency">
            <span className="chart__topbar-currency--icon"><FontAwesome name="dot-circle-o" /></span>
            <span className="chart__topbar-currency--text">ETH/usd</span>
          </div>
          </div>
          <div className="col-md-6">
          <ul className="chart__topbar-nav navbar-right" onClick={(e) => this.handleChartBarNav(e)}>
            <li className="chart__topbar-nav--item active">Year</li>
            <li className="chart__topbar-nav--item">Month</li>
            <li className="chart__topbar-nav--item">Week</li>
            <li className="chart__topbar-nav--item">Day</li> 
          </ul>
          </div>
      </div>
      
        <Col sm={12}>
        <ResponsiveContainer width={"100%"} height={500} >
        <LineChart 
          data={this.state.data}
          layout = "horizontal"
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false}/>
          <YAxis tickLine={false} axisLine={false}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" strokeWidth={3} dataKey="value" stroke="#225bf4" dot={{ stroke: '#225bf4', strokeWidth: 1, r: 5 }} />
        </LineChart>
          </ResponsiveContainer>
        </Col>
      </div>
    )
  }
}

