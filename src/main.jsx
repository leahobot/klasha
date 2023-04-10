import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<ContextProvider>
				<App />
			</ContextProvider>
		</HashRouter>
	</React.StrictMode>,
);
