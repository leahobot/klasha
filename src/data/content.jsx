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

const iconSize = "text-[1.9rem]";

export const sidebarContent = [
	{
		title: "Main pages",
		links: [
			{
				icon: <RiDashboardLine className={iconSize} />,
				name: "Dashboard",
			},
			{
				icon: <BiWallet className={iconSize} />,
				name: "Balances",
			},
			{
				icon: <RiArrowUpDownLine className={iconSize} />,
				name: "Transactions",
			},
			{
				icon: <HiOutlineChartBar className={iconSize} />,
				name: "Analytics",
			},
			{
				icon: <TbSpeakerphone className={iconSize} />,
				name: "Marketing",
			},
			{
				icon: <HiArrowPath className={iconSize} />,
				name: "Exchange rates",
			},
		],
	},
	{
		title: "Accept Payments",
		links: [
			{
				icon: <FiShoppingCart className={iconSize} />,
				name: "Checkout",
			},
			{
				icon: <BiLink className={iconSize} />,
				name: "Payment Links",
			},
		],
	},
	{
		title: "Send Payments",
		links: [
			{
				icon: <RiArrowLeftRightFill className={iconSize} />,
				name: "Wire",
			},
		],
	},
];
