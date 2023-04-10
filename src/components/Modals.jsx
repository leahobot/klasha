import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { MdClose } from "react-icons/md";
import data from "../data/transactions.json";

const style =
	"absolute flex flex-col items-center p-[1.2rem] sm:p-[1.5rem] 2xl:p-[2rem] gap-[0.3rem] sm:gap-[0.6rem] 2xl:gap-[0.8rem] bg-white list-none shadow-[0_0_15px_rgba(0,0,0,0.08)] text-[1.2rem] sm:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.8rem] border-[1px] 2xl:border-[1.5px] border-solid border-[var(--header-border)] transition-all duration-400";

export const UserModal = () => {
	const { userModal } = useStateContext();

	return (
		<ul
			className={`${style} ${
				userModal ? "translate-x-0" : "translate-x-[200%]"
			} top-[150%] -left-[60%] w-[10rem] sm:w-[11rem] xl:w-[11.5rem] 2xl:w-[14rem]`}>
			<li className="font-semibold">John Doe</li>
			<li className="text-[1rem] sm:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.5rem]">
				Admin
			</li>
		</ul>
	);
};

export const LanguageModal = () => {
	const { languageModal, setLanguage } = useStateContext();

	const languageStyle =
		"hover:text-[var(--primary-color)] mb-[0.2rem] 2xl:mb-[0.4rem]";

	return (
		<ul
			className={`${style} ${
				languageModal ? "translate-x-0" : "translate-x-[200%]"
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

export const CurrencyModal = () => {
	const { setCurrency } = useStateContext();

	const listStyle =
		"hover:text-[var(--primary-color)] cursor-pointer font-semibold mb-[0.5rem]";
	return (
		<ul
			className={`${style} top-[110%] -left-[20%] w-[9rem] sm:w-[10rem] xl:w-[11rem] 2xl:w-[13rem] font-medium`}>
			<li
				className={listStyle}
				onClick={() => setCurrency("USD")}>
				USD
			</li>
			<li
				className={listStyle}
				onClick={() => setCurrency("NGA")}>
				NGN
			</li>
			<li
				className={listStyle}
				onClick={() => setCurrency("CFA")}>
				CFA
			</li>
			<li
				className={listStyle}
				onClick={() => setCurrency("EUR")}>
				EUR
			</li>
		</ul>
	);
};

export const FilterModal = ({ setFilterModal, setFilteredTransactions }) => {
	const { selectStatus, setSelectStatus, selectName, setSelectName } =
		useStateContext();

	const pending = data?.results.filter((item) => item.status === "pending");
	const successful = data?.results.filter(
		(item) => item.status === "successful",
	);

	const hanldeClearFilters = () => {
		setSelectName("");
		setSelectStatus("");
		setFilteredTransactions(data?.results);
	};

	const handleFilterStatus = (e, a, b) => {
		setSelectStatus(e.target.value);
		if (e.target.value === "pending") {
			setFilteredTransactions(a);
		}
		if (e.target.value === "successful") {
			setFilteredTransactions(b);
		}
	};

	const handleFilterName = (e, users) => {
		setSelectName(e.target.value);

		if (e.target.value === "asc") {
			const tempUsers = users.slice().sort((a, b) => {
				return a.name.localeCompare(b.name);
			}, 0);

			setFilteredTransactions(tempUsers);
		}

		if (e.target.value === "desc") {
			const tempUsers = users.slice().sort((a, b) => {
				return b.name.localeCompare(a.name);
			}, 0);

			setFilteredTransactions(tempUsers);
		}
	};

	const selectStyle =
		"p-[0.6rem] sm:p-[0.75rem] xl:p-[0.85rem] 2xl:p-[1.1rem] w-full rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10x] border-solid border-[1px] border-gray-300 outline-0 focus:border-gray-400 focus:border-[2px] mb-[1rem]";
	return (
		<div
			className={`${style} top-[120%] -left-[40%] w-[9rem] sm:w-[17rem] xl:w-[11rem] 2xl:w-[13rem] font-medium`}>
			<MdClose
				onClick={() => setFilterModal(false)}
				className="text-[1.4rem] xl:text-[1.5rem] 2xl:text-[2rem] self-end cursor-pointer text-gray-500 hover:scale-[1.4] transition-transform duration-300"
			/>
			<div>
				<label className="font-semibold">Filter By Status</label>
				<select
					value={selectStatus}
					onChange={(e) => handleFilterStatus(e, pending, successful)}
					className={selectStyle}>
					<option
						value=""
						disabled>
						Select
					</option>
					<option value="successful">Succesful</option>
					<option value="pending">Pending</option>
				</select>
			</div>
			<div>
				<label className="font-semibold">Filter By Name</label>
				<select
					value={selectName}
					onChange={(e) => handleFilterName(e, data?.results)}
					className={selectStyle}>
					<option
						value=""
						disabled>
						Select
					</option>
					<option value="asc">Ascending</option>
					<option value="desc">Desending</option>
				</select>
			</div>

			<p
				onClick={hanldeClearFilters}
				className="self-start font-semibold cursor-pointer hover:text-[var(--primary-color)]">
				Clear Filters
			</p>
		</div>
	);
};
