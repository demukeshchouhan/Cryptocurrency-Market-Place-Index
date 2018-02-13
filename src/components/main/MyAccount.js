import React, { Component } from 'react';
import { findDOMNode } from "react-dom";
import FontAwesome from "react-fontawesome";
import PropTypes from 'prop-types';

import { 
  Grid, Row, Col, Image, Button
} from "react-bootstrap";

import OwlCarousel from "react-owl-carousel";
// OwlCarousel.defaultProps = {
//   navClass : '["myaccount__filter-next", "myaccount__filter-prev"]'
// }
console.dir(OwlCarousel)

export default class MyAccount extends Component {

  handleCarouselNext(e) {
    console.log(this.carouselEl);
    this.carouselEl.next();
  }

  handleCarouselPrev(e) {
    this.carouselEl.prev();
  }
  render() {
    return (
      <div className="myaccount">
        <div className="myaccount__filter-bar">
          <div className="row">
          <div className="col-sm-6">
            <span className="myaccount__filter-header">My accounts</span>
            <span className="myaccount__filter-icon"><FontAwesome name="search" /></span>
            <span className="myaccount__filter-icon"><FontAwesome name="sort" /></span>
          </div>
          <div className="col-sm-6 ">
          <span className="pull-right">
            <span 
              className="myaccount__filter-icon myaccount__filter-prev"
              onClick={(e) => this.handleCarouselPrev(e)}
              ><FontAwesome name="chevron-left" /></span>
            <span className="myaccount__filter-text">02</span>
            <span className="myaccount__filter-icon-2"><FontAwesome name="minus" /></span>
            <span className="myaccount__filter-text">04</span>
            <span 
              className="myaccount__filter-icon myaccount__filter-next"
              onClick={(e) => this.handleCarouselNext(e)}
              ><FontAwesome name="chevron-right" /></span>
            </span> 
          </div>
          </div>
          </div>

          <div className="row">
            <div className="myaccount-carousel">
            <OwlCarousel 
              className = "owl-theme"
              items= {3}
              lazyLoad= {true}
              margin= {10}
              nav = {false}
              dots = { false}
              ref = {(e) => this.carouselEl = e}

              >
                <div className="myaccount-carousel-item ">1</div>
                <div className="myaccount-carousel-item ">2</div>
                <div className="myaccount-carousel-item ">3</div>
                <div className="myaccount-carousel-item ">4</div>
                <div className="myaccount-carousel-item ">5</div>
            </OwlCarousel>
            </div>
          </div>
        
      </div>
    )
  }
}






