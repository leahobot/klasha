import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Button } from "../components";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { UserModal, LanguageModal } from "./Modals";

const Header = () => {
	const { setSidePanel, sidePanel, language, setLanguageBox, setModal } =
		useStateContext();

	const iconSize =
		"text-[1.3rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[3rem] text-[var(--black-primary)]";
	const style =
		"relative flex items-center cursor-pointer gap-[0.3rem] sm:gap-[0.4rem] xl:gap-[0.5rem] 2xl:gap-[0.8rem] active:translate-y-[2px]";
	return (
		<header
			className={`flex items-center justify-between fixed inset-0 h-[6rem] xl:h-[7rem] 2xl:h-[9rem] border-b-[1px] 2xl:border-b-[1.5px] border-solid border-[var(--header-border)] px-[4rem] xl:px-[4.5rem] 2xl:px-[5.5rem] transition-all duration-300 ${
				sidePanel ? "w-full lg:w-[80%] lg:ml-[20%]" : "w-full lg:ml-0"
			}`}>
			<div>
				{!sidePanel && (
					<Button handleOnClick={() => setSidePanel(true)}>
						Open Panel
						<IoIosArrowForward className={iconSize} />
					</Button>
				)}
			</div>

			<div className="flex items-center gap-[1.5rem] sm:gap-[2rem] xl:gap-[2.2rem] 2xl:gap-[3rem]">
				<div
					className={style}
					onClick={() => setModal(true)}>
					<HiOutlineUserCircle className="text-[2.7rem] sm:text-[3rem] xl:text-[3.3rem] 2xl:text-[4.3rem]" />
					<IoIosArrowDown className={iconSize} />
					<UserModal />
				</div>
				<div
					className={style}
					onClick={() => setLanguageBox(true)}>
					<p className="text-[var(--black-primary)] font-semibold text-[1.2rem] sm:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.9rem]">
						{language}
					</p>
					<IoIosArrowDown className={iconSize} />
					<LanguageModal />
				</div>
			</div>
		</header>
	);
};

export default Header;
