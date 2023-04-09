import React from "react";
import { useStateContext } from "../context/ContextProvider";

const style =
	"absolute flex flex-col items-center p-[1.3rem] sm:p-[1.5rem] 2xl:p-[2rem] gap-[0.3rem] sm:gap-[0.6rem] 2xl:gap-[0.8rem] bg-white list-none shadow-[0_0_15px_rgba(0,0,0,0.08)] text-[1.3rem] sm:text-[1.4rem] xl:text-[1.45rem] 2xl:text-[1.9rem] border-[1px] 2xl:border-[1.5px] border-solid border-[var(--header-border)] transition-all duration-400";

export const UserModal = () => {
	const { modal } = useStateContext();

	return (
		<ul
			className={`${style} ${
				modal ? "translate-x-0" : "translate-x-[200%]"
			} top-[150%] -left-[60%] w-[10rem] sm:w-[11rem] xl:w-[11.5rem] 2xl:w-[14rem]`}>
			<li className="font-semibold">John Doe</li>
			<li className="text-[1.1rem] sm:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.5rem]">
				Admin
			</li>
		</ul>
	);
};

export const LanguageModal = () => {
	const { languageBox, setLanguage } = useStateContext();

	const languageStyle = "hover:text-[var(--primary-color)]";

	return (
		<ul
			className={`${style} ${
				languageBox ? "translate-x-0" : "translate-x-[200%]"
			} top-[200%] -right-[50%] w-[16rem] sm:w-[17rem] xl:w-[19rem] 2xl:w-[24rem]`}>
			<li className="font-medium mb-[0.5rem] 2xl:mb-[0.8rem]">
				Choose a Language
			</li>
			<li
				onClick={() => setLanguage("En")}
				className={languageStyle}>
				English
			</li>
			<li
				onClick={() => setLanguage("Fr")}
				className={languageStyle}>
				French
			</li>
		</ul>
	);
};