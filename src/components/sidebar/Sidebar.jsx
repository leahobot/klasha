import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import logo from "../../assets/logo.svg";
import { data } from "../../data/sidebarData";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useStateContext } from "../../context/ContextProvider";
import { Button } from "../../components";

const Sidebar = () => {
	const { setSidePanel, sidePanel } = useStateContext();

	const linkStyle =
		"flex items-center gap-3 xl:gap-4 2xl:gap-5 py-[0.7rem] sm:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1.3rem] text-[1.3rem] sm:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.9rem] hover:text-[var(--primary-hover)]";

	const iconSize =
		"text-[1.4rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[3rem]";

	const activeLink = ({ isActive }) => {
		if (isActive) {
			return `${linkStyle} text-[var(--primary-color)] font-semibold`;
		} else {
			return `${linkStyle} text-[var(--black-primary)] font-medium`;
		}
	};

	const closeSidePanel = () => {
		if (window.innerWidth <= 900) {
			setSidePanel(false);
		}
	};

	return (
		<aside
			className={`${styles.sidebar} ${
				sidePanel ? "translate-x-0" : "-translate-x-[100%]"
			} w-[55%] sm:w-[40%] lg:w-[20%] justify-between lg:gap-[15vh] xl:gap-0 xl:justify-between py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem] px-[3rem] sm:px-[4rem] xl:px-[4.5rem] 2xl:px-[5.5rem] z-[2]`}>
			<div>
				<Link to="">
					<img
						onClick={closeSidePanel}
						src={logo}
						alt="Klasha-logo"
						className="h-[2rem] sm:h-[2.3rem] xl:h-[2.5rem] 2xl:h-[3.5rem] object-cover"
					/>
				</Link>

				<nav className="flex flex-col gap-[2rem] 2xl:gap-[3rem] mt-[4.5rem] xl:mt-[4.7rem] 2xl:mt-[6.5rem]">
					{data.map((item, index) => (
						<div key={index}>
							<p
								className={`${styles.title} text-[1.25rem] sm:text-[1.35rem] xl:text-[1.45rem] 2xl:text-[1.85rem] mb-[0.5rem] xl:mb-[0.6rem] 2xl:mb-[1rem]`}>
								{item.title}
							</p>
							{item.links.map((link, index) => (
								<div key={index}>
									<NavLink
										to={link.url}
										className={activeLink}>
										{link.icon}
										<p onClick={closeSidePanel}>
											{link.name}
										</p>
									</NavLink>
								</div>
							))}
						</div>
					))}
				</nav>
			</div>

			<div className="flex flex-col gap-[1.5rem] xl:[gap-[1.7rem] 2xl:gap-[2.5rem] self-start">
				<button
					onClick={closeSidePanel}
					className="gap-[0.7rem] sm:gap-[1rem] 2xl:gap-[1.5rem] py-[0.8rem] xl:py-[1rem] 2xl:py-[1.1rem] px-[1rem] xl:px-[1.2rem] 2xl:px-[1.6rem] rounded-full text-[1rem] sm:text-[1.1rem] xl:text-[1.15rem] 2xl:text-[1.6rem]"
					id={styles.button}>
					<FaRegQuestionCircle className={iconSize} />
					Support
				</button>
				<div className="hidden lg:block">
					<Button handleOnClick={() => setSidePanel(false)}>
						<IoIosArrowBack className={iconSize} />
						Hide Panel
					</Button>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
