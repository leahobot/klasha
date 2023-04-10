import React from "react";
import styles from "./Main.module.scss";
import { Button } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import data from "../../data/transactions.json";
import { GrSearch } from "react-icons/gr";
import { MdFilterList } from "react-icons/md";

const Transactions = () => {
	const { searchInput, setSearchInput } = useStateContext();

	const inputStyle =
		"py-[0.6rem] sm:py-[0.7rem] xl:py-[0.8rem] 2xl:py-[1.2rem] px-[1rem] 2xl:px-[2rem] border-[1px] border-solid border-[var(--gray-light-secondary)] hover:border-gray-300 focus:border-gray-400 outline-0 rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] bg-white";

	return (
		<section
			className={`${styles.transactions} rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] `}>
			<p
				className={`${styles["transactions-title"]} text-[1.7rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.5rem] px-[2rem] py-[1.5rem]`}>
				Transaction History
			</p>
			<div className="flex items-center justify-between px-[2rem] py-[0.6rem] border-b-[1px] border-solid border-[var(--gray-primary-light)]">
				<div className="relative">
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						placeholder="Search"
						className={inputStyle}
					/>
					<span>
						<GrSearch />
					</span>
				</div>

				<span className="flex items-center gap-[1rem]">
					<Button>
						Filter <MdFilterList />
					</Button>
					<Button>Export</Button>
				</span>
			</div>

			<div className="pt-[3rem] ">
				<table className="w-full">
					<thead className="text-left text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem] px-[3rem]">
						<tr>
							<th>Transaction ID</th>
							<th>Source</th>
							<th>Customer name</th>
							<th>Customer email</th>
							<th>Amount</th>
							<th>Request date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody className="text-left text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
						{data &&
							data.results.map((item) => (
								<tr
									key={item.id}
									className="py-[0.5rem]">
									<td>{item.id}</td>
									<td>{item.soource}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.amount}</td>
									<td></td>
									<td>{item.status}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Transactions;
