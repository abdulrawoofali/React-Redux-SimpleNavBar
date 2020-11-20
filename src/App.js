import React, { useState } from "react";
import "./styles.css";
import NavBar from "./components/navBar";
import About from "./components/about";
import Topic from "./components/topic";
import Books from "./components/books";
import { connect } from "react-redux";

const App = (props) => {
	console.log("updating state at app :", props.currentNavTab);
	//const [currentNavTab, setCurrentNavTab] = useState();

	function renderNavBar(nav) {
		console.log("handling nav bar clicks....");
		switch (nav) {
			case "BOOKS": {
				return <Books />;
			}
			case "ABOUT":
				return <About />;
			case "TOPIC":
				return <Topic />;
			default:
				return null;
		}
	}
	return (
		<div className="App">
			<NavBar />
			{renderNavBar(props.currentNavTab)}
		</div>
	);
};

const mapStateToProps = (store) => {
	//console.log(store.NavReducer);
	return {
		currentNavTab: store.NavReducer.location
	};
};

export default connect(mapStateToProps, null)(App);
