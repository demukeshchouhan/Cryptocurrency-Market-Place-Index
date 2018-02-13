import React, { Component, Fragment } from 'react';
import store from "../store";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Sidebar from "./sidebar";
import Loading from "./Loading";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Main from "./main";

const Home = Loadable({
	loader: () => import("./Home"),
	loading : Loading
});
const About = Loadable({
	loader: () => import("./About"),
	loading : Loading
});


class App extends Component {
	render() {
		return(
			<Provider store={store}>
					<Router>
						<Fragment>
							<Sidebar />
							<div className="main">
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
							</div>
						</Fragment>
					</Router>
			</Provider>
		)
	}
}

export default App;