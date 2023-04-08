import React from "react";
import { Header } from "../../components";
import { useStateContext } from "../../context/StateContext";

const Main = () => {
	const { sidePanel } = useStateContext();

	return (
		<div
			className={`${
				sidePanel ? "ml-0 w-full" : "ml-[20%] w-[80%]"
			} transition-all duration-300`}>
			<Header />
			<main className="mt-[6rem] h-[8rem] bg-blue-100">Contents</main>
		</div>
	);
};

export default Main;
