import React from "react";
import { connect } from "react-redux";
import { takeToLocation } from "../redux/actionCreater";

const NavBar = (props) => {
	const controlAction = (nav) => {
		//console.log(props.takeToLocation);
		props.takeToLocation(nav);
	};
	return (
		<div className="NavBAr">
			<button onClick={() => controlAction("ABOUT")}> About</button>
			<button onClick={() => controlAction("BOOKS")}>Books</button>
			<button onClick={() => controlAction("TOPIC")}> Topic</button>
		</div>
	);
};
const mapStateToProps = (store) => {
	//console.log(store.NavReducer);
	return {
		currentNavTab: store.NavReducer.location
	};
};
export default connect(mapStateToProps, { takeToLocation })(NavBar);
