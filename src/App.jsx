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
		userModal,
		setUserModal,
		languageModal,
		setLanguageModal,
		sidePanel,
		setSidePanel,
	} = useStateContext();

	const closeModals = () => {
		if (userModal) {
			setUserModal(false);
		}
		if (languageModal) {
			setLanguageModal(false);
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
					className="z-[12] fixed inset-0 w-full h-[100vh] bg-gradient-to-b from-pink-500 to-black opacity-60 lg:hidden"
				/>
			)}
		</div>
	);
}

export default App;
