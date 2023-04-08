import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [sidePanel, setSidePanel] = useState(false);

	return (
		<StateContext.Provider value={{ sidePanel, setSidePanel }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
