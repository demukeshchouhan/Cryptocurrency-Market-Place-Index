import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions";
import Main from "./main";

import { 
  Grid, Row, Col
} from "react-bootstrap";

class Home extends Component {
	componentDidMount() {
		this.props.toggleSidebar(!this.props.sidebar);
	}
  render() {
		return (
			<Grid fluid={true}>
          <Row>
            <Main />
          </Row>
      </Grid>
		)
  }
}

const stateProps = (state) => ({
  sidebar : state.sidebar.toggle_sidebar
});



export default connect(null, actions)(Home);