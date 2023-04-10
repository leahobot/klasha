import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [sidePanel, setSidePanel] = useState(true);
	const [userModal, setUserModal] = useState(false);
	const [languageModal, setLanguageModal] = useState(false);
	const [language, setLanguage] = useState("En");
	const [currency, setCurrency] = useState("USD");
	const [searchInput, setSearchInput] = useState("");

	return (
		<StateContext.Provider
			value={{
				sidePanel,
				setSidePanel,
				userModal,
				setUserModal,
				languageModal,
				setLanguageModal,
				language,
				setLanguage,
				currency,
				setCurrency,
				searchInput,
				setSearchInput,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
