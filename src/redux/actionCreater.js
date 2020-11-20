import { NAV_LOC } from "./actionConstants";

export const takeToLocation = (location) => {
	console.log("your acrion type", NAV_LOC);
	console.log("action started notifing reducer ");
	console.log(location);
	return {
		type: NAV_LOC,
		payload: location
	};
};
