import React from "react";
import { Sidebar, Main } from "./components";
import "./fonts/GeneralSans-Light.woff";
import "./fonts/GeneralSans-Regular.woff";
import "./fonts/GeneralSans-Medium.woff";
import "./fonts/GeneralSans-Semibold.woff";
import "./fonts/GeneralSans-Bold.woff";

function App() {
	return (
		<div className="w-full flex">
			<Sidebar />
			<Main />
		</div>
	);
}

export default App;
