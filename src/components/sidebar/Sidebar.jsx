import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import logo from "../../assets/logo.svg";
import { sidebarContent } from "../../data/content";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useStateContext } from "../../context/StateContext";
import { Button } from "../../components";

const Sidebar = () => {
	const { setSidePanel, sidePanel } = useStateContext();

	function routeLink(str) {
		return str.replace(" ", "-").toLowerCase();
	}

	const linkStyle =
		"flex items-center gap-3 py-3 text-[1.4rem] hover:text-[var(--primary-hover)]";

	const iconSize = "text-[1.8rem]";

	const activeLink = ({ isActive }) => {
		if (isActive) {
			return `${linkStyle} text-[var(--primary-color)] font-semibold`;
		} else {
			return `${linkStyle} text-[var(--black-primary)] font-medium`;
		}
	};

	return (
		<aside
			className={`${styles.sidebar} ${
				sidePanel ? "-translate-x-[100%]" : "translate-x-0"
			} gap-[20vh] xl:gap-0 xl:justify-between`}>
			<div>
				<div className="h-[2.3rem]">
					<img
						src={logo}
						alt="Klasha-logo"
						className="h-full object-cover"
					/>
				</div>

				<nav className="flex flex-col gap-[2rem] mt-[4.5rem]">
					{sidebarContent.map((item, index) => (
						<div key={index}>
							<p
								className={`${styles.title} text-[1.35rem] mb-2`}>
								{item.title}
							</p>
							{item.links.map((link, index) => (
								<div key={index}>
									<NavLink
										to={routeLink(link.name)}
										className={activeLink}>
										{link.icon}
										<p>{link.name}</p>
									</NavLink>
								</div>
							))}
						</div>
					))}
				</nav>
			</div>

			<div className="flex flex-col gap-[1.5rem] self-start text-[1.1rem]">
				<button className="bg-[var(--primary-color)] border-[var(--primary-color)] text-white gap-[1rem] rounded-full py-3 px-4">
					<FaRegQuestionCircle className={iconSize} />
					Support
				</button>
				<Button handleOnClick={() => setSidePanel(true)}>
					<IoIosArrowBack className={iconSize} />
					Hide Panel
				</Button>
			</div>
		</aside>
	);
};

export default Sidebar;
