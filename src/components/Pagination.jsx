import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ users, currentPage, setCurrentPage, usersPerPage }) => {
	//Limit page numbers shown
	let pageNumberLimit = 5;
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	const pageNumbers = [];
	const totalUsers = users.length;
	const totalPages = Math.ceil(totalUsers / usersPerPage);

	//Get Current Users

	//Paginate
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	//Go to next Page
	const paginateNext = () => {
		setCurrentPage(currentPage + 1);

		//Show next set of page numbers
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	//Go to prev page
	const paginatePrev = () => {
		setCurrentPage(currentPage - 1);

		//Show prev set of page numbers
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	const PaginatelistClassName =
		"py-[0.2rem] px-[0.8rem] sm:py-[0.4rem] xl:py-[0.5rem] 2xl:py-[1rem] sm:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.6rem] rounded-full font-semibold";
	const iconBtn =
		"outline-0 border-0 bg-white text-[var(--gray-base-primary)]  hover:text-[var(--gray-base-secondary)] disabled:text-gray-200";

	return (
		<footer className="flex justify-end px-[3rem] my-[1.5rem] xl:my-[1.7rem] 2xl:my-[2.5rem] text-[1.2rem] sm:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.9rem]">
			<div className="flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 cursor-pointer border-solid border-[1px] border-[var(--gray-light-primary)] px-[1rem] py-[0.4rem] rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px]">
				{pageNumbers.length > 1 && (
					<button
						onClick={paginatePrev}
						className={iconBtn}
						disabled={
							currentPage === pageNumbers[0] ? true : false
						}>
						<IoIosArrowBack className="text-[1.2rem] sm:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[2rem]" />
					</button>
				)}
				<ul className="flex items-center gap-5">
					{pageNumbers.map((num) => {
						if (
							num < maxPageNumberLimit + 1 &&
							num > minPageNumberLimit
						) {
							return (
								<li
									key={num}
									className={`${PaginatelistClassName} ${
										currentPage === num
											? "bg-[var(--gray-primary-light)] text-[var(----black-primary)]"
											: "{PaginatelistClassName} text-[var(--gray-base-primary)] hover:text-[var(--gray-base-secondary)]"
									}`}
									onClick={() => paginate(num)}>
									{num}
								</li>
							);
						}
						return null;
					})}
				</ul>
				{pageNumbers.length > 1 && (
					<button
						onClick={paginateNext}
						className={iconBtn}
						disabled={
							currentPage === pageNumbers[pageNumbers.length - 1]
								? true
								: false
						}>
						<IoIosArrowForward className="text-[1.2rem] sm:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[2rem]" />
					</button>
				)}
			</div>
		</footer>
	);
};

export default Pagination;
