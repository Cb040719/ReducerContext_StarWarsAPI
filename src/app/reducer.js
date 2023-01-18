import { GET } from "../utils/api";

export const actions = { GET_DATA: "GET_DATA" };

export const initialState = {
	swapiArray: [],
};

const swapiReducer = (state, action) => {
	switch (action.type) {
		case actions.GET_DATA:
			GET("https://akabab.github.io/starwars-api/api/", "all.json").then(
				(data) => state.swapiArray.push(...data)
			);
			return {
				...state,
				swapiArray: state.swapiArray,
			};
		default:
			return state;
	}
};

export default swapiReducer;
