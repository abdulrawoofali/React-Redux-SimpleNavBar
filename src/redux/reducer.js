import { NAV_LOC } from "./actionConstants";

const INIT_STATE = {
	location: "A"
};

export default (state = INIT_STATE, action) => {
	console.log("reached reducer....");
	switch (action.type) {
		case NAV_LOC: {
			console.log("dealing with your action");
			console.log(action.payload);
			return {
				...state,
				location: action.payload
			};
		}
		default:
			return state;
	}
};
