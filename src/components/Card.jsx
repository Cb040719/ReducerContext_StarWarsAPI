import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { swapiContext } from "../app/context";
import { actions } from "../app/reducer";

const Card = () => {
	const { state, dispatch } = useContext(swapiContext);
	const [display, setDisplay] = useState("");

	useEffect(() => {
		state.swapiArray = [];
		dispatch({ type: actions.GET_DATA });
	}, []);

	const getData = () => {
		console.log(state.swapiArray);
		setDisplay(
			state?.swapiArray.map((swapItem) => (
				<div className="bg-[#ffffffa0] w-full flex items-center rounded justify-between p-2">
					<h2 className="text-lg font-semibold">{swapItem.name}</h2>
					<img className="h-40 max-w-[220px]" src={swapItem.image} alt="img" />
				</div>
			))
		);
	};

	return (
		<div className=" rounded-lg">
			<nav className="text-white bg-[#383838] flex items-center p-4 justify-between">
				<h1 id="navTitle" className="text-4xl">
					SWAPI
				</h1>
				<button className="p-2 flex items-center underline" onClick={getData}>
					Get All Data
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
			</nav>
			<main className="flex flex-col gap-4 items-center py-5 md:grid md:grid-cols-3">
				{display}
			</main>
		</div>
	);
};

export default Card;
