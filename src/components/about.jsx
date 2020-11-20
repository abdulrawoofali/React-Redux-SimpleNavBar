import React from "react";

import { connect } from "react-redux";

const About = (props) => {
	console.log(`updating state at :`, props.currentNavTab);
	return <>your current NAV is :{props.currentNavTab}About</>;
};

const mapStateToProps = (store) => {
	//console.log(store.NavReducer);
	return {
		currentNavTab: store.NavReducer.location
	};
};

export default connect(mapStateToProps, null)(About);
