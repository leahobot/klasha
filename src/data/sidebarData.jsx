import {
	RiDashboardLine,
	RiArrowUpDownLine,
	RiArrowLeftRightFill,
} from "react-icons/ri";
import { BiWallet, BiLink } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiArrowPath } from "react-icons/hi2";
import { TbSpeakerphone } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

const iconSize = "text-[1.9rem] xl:text-[2rem] 2xl:text-[2.4rem]";

export const data = [
	{
		title: "Main pages",
		links: [
			{
				icon: <RiDashboardLine className={iconSize} />,
				name: "Dashboard",
				url: "",
			},
			{
				icon: <BiWallet className={iconSize} />,
				name: "Balances",
				url: "balances",
			},
			{
				icon: <RiArrowUpDownLine className={iconSize} />,
				name: "Transactions",
				url: "transactions",
			},
			{
				icon: <HiOutlineChartBar className={iconSize} />,
				name: "Analytics",
				url: "analytics",
			},
			{
				icon: <TbSpeakerphone className={iconSize} />,
				name: "Marketing",
				url: "marketing",
			},
			{
				icon: <HiArrowPath className={iconSize} />,
				name: "Exchange rates",
				url: "rates",
			},
		],
	},
	{
		title: "Accept Payments",
		links: [
			{
				icon: <FiShoppingCart className={iconSize} />,
				name: "Checkout",
				url: "checkout",
			},
			{
				icon: <BiLink className={iconSize} />,
				name: "Payment Links",
				url: "payment-links",
			},
		],
	},
	{
		title: "Send Payments",
		links: [
			{
				icon: <RiArrowLeftRightFill className={iconSize} />,
				name: "Wire",
				url: "wire",
			},
		],
	},
];
