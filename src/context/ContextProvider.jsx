import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [sidePanel, setSidePanel] = useState(true);
	const [modal, setModal] = useState(false);
	const [languageBox, setLanguageBox] = useState(false);
	const [language, setLanguage] = useState("En");

	return (
		<StateContext.Provider
			value={{
				sidePanel,
				setSidePanel,
				modal,
				setModal,
				languageBox,
				setLanguageBox,
				language,
				setLanguage,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
