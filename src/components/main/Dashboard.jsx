import React, { useState } from "react";
import { Link } from "react-router-dom";
// import XLSX from "sheetjs-style";
// import * as FileSaver from "file-saver";
import { useStateContext } from "../../context/ContextProvider";
import styles from "./Main.module.scss";
import data from "../../data/dashboardData.json";
import { Button } from "../../components";
import { HiArrowDown } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { CurrencyModal } from "../Modals";
import { MiniChart, MainChart } from "./Chart";

const Dashboard = () => {
	const [selectValue, setSelectValue] = useState("");
	const [currencyModal, setCurrencyModal] = useState(false);
	const [days, setDays] = useState(7);
	const { currency } = useStateContext();

	const handleDownload = async (period, file) => {
		// const fileType =
		// 	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
		// const fileExtension = ".xlsx";
		// const data = period === 7 ? file.weekly_results : file.monthly_results;
		// const ws = XLSX.utils.json_to_sheet(data);
		// const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
		// const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		// const excelData = new Blob([excelBuffer], { type: fileType });
		// FileSaver.saveAs(excelData, "report" + fileExtension);
	};

	const closeModals = () => {
		if (currencyModal) {
			setCurrencyModal(false);
		}
	};

	const boxStyle =
		"relative flex flex-col justify-between mb-[1.5rem] sm:mb-[2rem] lg:mb-0 h-[15rem] sm:h-[19rem] xl:h-[20rem] 2xl:h-[28rem] w-[47%] sm:w-[47%] lg:w-[23.5%] border-[1px] border-solid border-[var(--black-base)] rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] text-[1.2rem] sm:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.8rem] font-medium p-[1.5rem] sm:p-[2rem] xl:p-[2.2rem] 2xl:p-[3rem]";

	const salesBox =
		"h-[21rem] sm:h-[24rem] xl:h-[25rem] 2xl:h-[34rem] border-[1px] border-solid rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px]";

	const dateStyle =
		"font-semibold cursor-pointer transition-transform duration-200 active:scale-[1.1]";

	const iconSize =
		"text-[1.2rem] sm:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[2.8rem]";
	return (
		<section
			onClick={closeModals}
			className={styles.dashboard}>
			<div className="flex flex-col gap-[1rem] sm:gap-[2rem] 2xl:gap-[2.4rem]">
				<p
					className={`${styles["dashboard-title"]} text-[1.7rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.5rem]`}>
					Sales Overview
				</p>
				<div className="w-full sm:self-center lg:self-start sm:w-[60%] lg:w-full flex flex-wrap items-center justify-between">
					{data.summary?.length > 0
						? data.summary.map((item, index) => (
								<div
									key={index}
									className={`${boxStyle} ${
										!item.has_bg
											? "bg-white text-[var(--black-base)]"
											: "bg-[var(--black-base)] text-white"
									}`}>
									{item.sales && (
										<MiniChart data={item.sales} />
									)}

									{item.period && <p>{item.period}</p>}
									<span>
										<p>{item.duration}</p>
										<p
											className={`${styles.amount} text-[1.7rem] sm:text-[1.9rem] xl:text-[2rem] 2xl:text-[2.8rem] mt-[0.5rem] 2xl:mt-[0.8rem]`}>
											₦{item.amount}
										</p>
									</span>
								</div>
						  ))
						: null}
				</div>
			</div>

			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-[4rem] sm:mt-[5rem] xl:mt-[5.5rem] 2xl:mt-[8rem] w-full text-[1.2rem] sm:text-[1.3rem] xl:text-[1.35rem] 2xl:text-[1.8rem]">
				<div className="w-full sm:w-[67%] mb-[2rem] sm:mb-0">
					<div className="flex justify-between sm:justify-start sm:gap-[2rem] lg:gap-0 lg:justify-between items-center text-[var(--black-primary)] mb-[0.3rem] 2xl:mb-[0.6rem]">
						<p
							className={`${styles["dashboard-title"]} text-[1.7rem] sm:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2.5rem]`}>
							Sales
						</p>

						<span className="h-[2rem] sm:h-[2.5rem] xl:h-[2.6rem] 2xl:h-[3.5rem] w-[1px] bg-[var(--gray-light-primary)]" />

						<p
							onClick={() => setDays(7)}
							className={`${dateStyle} ${
								days === 7 ? "text-[var(--primary-color)]" : ""
							}`}>
							7 days
						</p>
						<p
							onClick={() => setDays(30)}
							className={`${dateStyle} ${
								days === 30 ? "text-[var(--primary-color)]" : ""
							}`}>
							30 days
						</p>

						<span
							onClick={() => setCurrencyModal(true)}
							className="relative z-[1]">
							<Button>
								{currency}
								<IoIosArrowDown className={iconSize} />
							</Button>
							{currencyModal && <CurrencyModal />}
						</span>

						<select
							value={selectValue}
							onChange={(e) => setSelectValue(e.target.value)}
							className="hidden lg:block p-[0.6rem] sm:p-[0.75rem] xl:p-[0.85rem] 2xl:p-[1.1rem] w-[33%] rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10x]">
							<option value="">Email</option>
							<option value="pdf">Download PDF</option>
							<option value="excel">Download Excel</option>
							<option value="csv">Download CSV</option>
						</select>

						<Button
							handleOnClick={() => handleDownload(days, data)}>
							<HiArrowDown className={iconSize} />
							Download Report
						</Button>
					</div>

					<div
						className={`${salesBox} relative bg-white border-[var(--black-primary)]`}>
						<MainChart
							data={
								days === 30
									? data.monthly_results
									: data.weekly_results
							}
						/>
					</div>
				</div>

				<div
					className={`${salesBox} w-full sm:w-[30%] text-white bg-[var(--primary-color)] border-[var(--primary-color)] overflow-hidden`}>
					<div
						className={`${styles.lines} p-[1.5rem] lg:p-[2.5rem] 2xl:p-[3rem]`}>
						<p className="text-[1.8rem] sm:text-[1.9rem] xl:text-[2rem] 2xl:text-[2.8rem]">
							KlashaWire - send <br />
							money to businesses <br />
							globally from Africa
						</p>

						<Link
							to="wire"
							className="self-start bg-[var(--black-primary)] py-[1rem] sm:py-[1.1rem] xl:py-[1.2rem] 2xl:py-[1.5rem] px-[1.6rem] sm:px-[2rem] xl:px-[2.2rem] 2xl:px-[3rem] rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] transition-transform duration-500 hover:scale-110">
							Send a Wire
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
