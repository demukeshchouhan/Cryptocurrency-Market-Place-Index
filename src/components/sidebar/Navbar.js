import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
	return (
	  <div className="sidebar__navbar">
		<ul className="sidebar__navbar-wrapper">
			<li>
				<NavLink exact activeClassName="active" to="/" >
				<FontAwesome className="sidebar__navbar-icon" name="home" />
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="active" to="/about" >
				<FontAwesome className="sidebar__navbar-icon"  name="user" />
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="active" to="/a" >
				<FontAwesome className="sidebar__navbar-icon" name="envelope" />
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="active" to="/b" >
				<FontAwesome className="sidebar__navbar-icon" name="tasks" />
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="active" to="/c" >
				<FontAwesome className="sidebar__navbar-icon" name="file" />
				</NavLink>
			</li>
			<li>
				<NavLink exact activeClassName="active" to="/d" >
				<FontAwesome className="sidebar__navbar-icon" name="circle" />
				</NavLink>
			</li>

			<li>
				<NavLink exact activeClassName="active" to="/e" >
				<FontAwesome className="sidebar__navbar-icon" name="link" />
				</NavLink>
			</li>
		</ul>
	  </div>
	)
  }
}
