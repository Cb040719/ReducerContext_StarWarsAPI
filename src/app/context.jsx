import { createContext, useReducer } from "react";
import swapiReducer, { initialState } from "./reducer";

export let swapiContext = createContext({});

export default function Provider({ children }) {
	const [state, dispatch] = useReducer(swapiReducer, initialState);

	const values = {
		state,
		dispatch,
	};

	return (
		<>
			<swapiContext.Provider value={values}>{children}</swapiContext.Provider>
		</>
	);
}
