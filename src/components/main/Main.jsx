import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import {
	Header,
	Anaytics,
	Balances,
	Checkout,
	Dashboard,
	Exchange,
	Marketing,
	Payment,
	Transactions,
	Wire,
} from "../../components";
import { useStateContext } from "../../context/ContextProvider";

const Main = () => {
	const { sidePanel } = useStateContext();

	return (
		<Fragment>
			<Header />
			<main
				className={`text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem] pt-[10rem] sm:pt-[15rem] pb-[6rem] xl:pt-[16rem] xl:pb-[7rem] 2xl:pt-[22rem] 2xl:pb-[12rem] h-full px-[3rem] xl:px-[4rem] 2xl:px-[6rem] overflow-auto ${
					sidePanel
						? "w-full lg:w-[80%] lg:ml-[20%]"
						: "w-full lg:ml-0"
				} transition-all duration-300} bg-white`}>
				<Routes>
					<Route
						index
						element={<Dashboard />}
					/>
					<Route
						path="balances"
						element={<Balances />}
					/>
					<Route
						path="analytics"
						element={<Anaytics />}
					/>
					<Route
						path="checkout"
						element={<Checkout />}
					/>
					<Route
						path="rates"
						element={<Exchange />}
					/>
					<Route
						path="marketing"
						element={<Marketing />}
					/>
					<Route
						path="payment-links"
						element={<Payment />}
					/>
					<Route
						path="transactions"
						element={<Transactions />}
					/>
					<Route
						path="wire"
						element={<Wire />}
					/>
				</Routes>
			</main>
		</Fragment>
	);
};

export default Main;
