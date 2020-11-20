import React from "react";

import { connect } from "react-redux";

const Books = (props) => {
	return <>your current NAV is :{props.currentNavTab}books</>;
};

const mapStateToProps = (store) => {
	//console.log(store.NavReducer);
	return {
		currentNavTab: store.NavReducer.location
	};
};

export default connect(mapStateToProps, null)(Books);
