import React from "react";

const Button = ({ handleOnClick, text, children }) => {
	return (
		<button
			onClick={handleOnClick}
			className="flex items-center font-semibold border-[1px] border-solid border-[var(--black-primary)] rounded-[6px] bg-white gap-[0.5rem] sm:gap-[1rem] 2xl:gap-[1.3rem] text-[var(--black-primary)] hover:shadow-[0_0_15px_rgba(0,0,0,0.15)] active:translate-y-[2px] py-[0.6rem] sm:py-[0.75rem] xl:py-[0.8rem] 2xl:py-[1rem] px-[0.7rem] sm:px-[1rem] xl:px-[1.2rem] 2xl:px-[1.6rem] text-[1rem] sm:text-[1.1rem] xl:text-[1.15rem] 2xl:text-[1.6rem]">
			{children}
			{text}
		</button>
	);
};

export default Button;
