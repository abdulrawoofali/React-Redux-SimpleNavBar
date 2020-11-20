import React from "react";
import { connect } from "react-redux";

const Topic = (props) => {
	return <>your current NAV is :{props.currentNavTab} Topic</>;
};

const mapStateToProps = (store) => {
	//console.log(store.NavReducer);
	return {
		currentNavTab: store.NavReducer.location
	};
};

export default connect(mapStateToProps, null)(Topic);
