import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useStateContext } from "../context/StateContext";
import { Button } from "../components";

const Header = () => {
	const { setSidePanel, sidePanel } = useStateContext();

	const iconSize = "text-[1.8rem]";
	return (
		<header className="fixed insex-0 h-[6rem] bg-red-100 w-full">
			{sidePanel && (
				<Button handleOnClick={() => setSidePanel(false)}>
					<IoIosArrowBack className={iconSize} /> Open Panel
				</Button>
			)}
		</header>
	);
};

export default Header;
