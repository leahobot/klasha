import React from "react";

const Button = ({ handleOnClick, text, children }) => {
	return (
		<button
			onClick={handleOnClick}
			className="flex items-center font-medium border-[1px] border-solid border-[var(--black-primary)] rounded-[6px] bg-white gap-[1rem] text-[var(--black-primary)] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] active:translate-y-[2px] py-3 px-4">
			{children}
			{text}
		</button>
	);
};

export default Button;
