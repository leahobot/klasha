import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import { Button, Pagination } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import data from "../../data/transactions.json";
import { GrSearch } from "react-icons/gr";
import { MdFilterList } from "react-icons/md";
import { FilterModal } from "../Modals";

const Transactions = () => {
	const { searchInput, setSearchInput } = useStateContext();
	const [filterModal, setFilterModal] = useState(false);
	const [filteredTransactions, setFilteredTransactions] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const transactions = data ? data.results : [];
	let transactionsPerPage = 5;

	const indexOfLastTransaction = currentPage * transactionsPerPage;
	const indexOfFirstTransaction =
		indexOfLastTransaction - transactionsPerPage;
	const currentTransactions = filteredTransactions.slice(
		indexOfFirstTransaction,
		indexOfLastTransaction,
	);

	useEffect(() => {
		const tempTransactions = transactions
			? transactions.filter(
					(item) =>
						item.source
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						item.amount
							.toString()
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						item.name
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						item.email
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						item.id
							.toLowerCase()
							.includes(searchInput.toLowerCase()) ||
						item.status
							.toLowerCase()
							.includes(searchInput.toLowerCase()),
			  )
			: [];

		setFilteredTransactions(tempTransactions);

		// eslint-disable-next-line
	}, [searchInput, transactions]);

	const inputStyle =
		"py-[0.6rem] sm:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[1.2rem] pl-[1rem] pr-[5rem] 2xl:pr-[8rem] 2xl:pl-[2rem] border-[1px] border-solid border-[var(--gray-light-secondary)] hover:border-gray-300 focus:border-gray-400 outline-0 rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] bg-white w-full";

	const iconSize =
		"text-[1.4rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[3rem]";

	const tableStyle = "py-[1.5rem]";

	const formatDate = (str) => {
		const date = new Date(str).toLocaleDateString().replaceAll("/", ".");
		return date;
	};

	const capitalizeText = (str) => {
		const firstLetter = str[0].toUpperCase();
		const capitalizedText = str.replace(str[0], firstLetter);
		return capitalizedText;
	};

	return (
		<section
			className={`${styles.transactions} rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.02)]`}>
			<p
				className={`${styles["transactions-title"]} text-[1.7rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.5rem] px-[2rem] py-[1.5rem]`}>
				Transaction History
			</p>
			<div className="flex items-center justify-between px-[2rem] py-[0.6rem] border-b-[1px] border-solid border-[var(--gray-primary-light)]">
				<div className="relative w-[20rem]">
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="Search"
						className={inputStyle}
					/>
					<span className="absolute top-[30%] right-[8%]">
						<GrSearch className={iconSize} />
					</span>
				</div>

				<span className="relative flex items-center gap-[1rem]">
					<Button
						handleOnClick={() => setFilterModal((prev) => !prev)}>
						Filter <MdFilterList className={iconSize} />
					</Button>
					<Button>Export</Button>
					{filterModal && (
						<FilterModal
							setFilterModal={setFilterModal}
							setFilteredTransactions={setFilteredTransactions}
						/>
					)}
				</span>
			</div>

			<div className="pt-[3rem] ">
				<table className="w-full">
					<thead className="text-left text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
						<tr>
							<th className={`${tableStyle} pl-[3rem]`}>
								Transaction ID
							</th>
							<th className={tableStyle}>Source</th>
							<th className={tableStyle}>Customer name</th>
							<th className={tableStyle}>Customer email</th>
							<th className={tableStyle}>Amount</th>
							<th className={tableStyle}>Request date</th>
							<th className={`${tableStyle} pr-[2rem]`}>
								Status
							</th>
						</tr>
					</thead>
					<tbody className="text-left text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.9rem]">
						{currentTransactions &&
							currentTransactions.map((item) => (
								<tr key={item.id}>
									<td className={`${tableStyle} pl-[3rem]`}>
										{item.id}
									</td>
									<td className={tableStyle}>
										{item.source}
									</td>
									<td className={tableStyle}>{item.name}</td>
									<td className={tableStyle}>{item.email}</td>
									<td className={tableStyle}>
										₦ {item.amount.toFixed(2)}
									</td>
									<td className={tableStyle}>
										{formatDate(item.request_date)}
									</td>
									<td className={`${tableStyle} pr-[2rem]`}>
										{capitalizeText(item.status)}
									</td>
								</tr>
							))}
					</tbody>
				</table>

				<Pagination
					users={filteredTransactions}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					usersPerPage={transactionsPerPage}
				/>
			</div>
		</section>
	);
};

export default Transactions;
