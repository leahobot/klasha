import React from "react";
import { Sidebar, Main } from "./components";
import { useStateContext } from "./context/ContextProvider";
import "./fonts/GeneralSans-Light.woff";
import "./fonts/GeneralSans-Regular.woff";
import "./fonts/GeneralSans-Medium.woff";
import "./fonts/GeneralSans-Semibold.woff";
import "./fonts/GeneralSans-Bold.woff";

function App() {
	const {
		modal,
		setModal,
		languageBox,
		setLanguageBox,
		sidePanel,
		setSidePanel,
	} = useStateContext();

	const closeModals = () => {
		if (modal) {
			setModal(false);
		}
		if (languageBox) {
			setLanguageBox(false);
		}
	};
	return (
		<div
			onClick={closeModals}
			className="w-full flex">
			<Sidebar />
			<Main />

			{sidePanel && (
				<div
					onClick={() => setSidePanel(false)}
					className="fixed inset-0 w-full h-[100vh] bg-[rgba(239,44,89,0.1)] lg:hidden"
				/>
			)}
		</div>
	);
}

export default App;
