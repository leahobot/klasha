import React from "react";
import {
	AreaChart,
	Area,
	// XAxis,
	// YAxis,
	// CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianAxis,
	CartesianGrid,
} from "recharts";

export const MiniChart = ({ data }) => {
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<p className="font-semibold text-[1.2rem] sm:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.8rem]">
					₦{payload[0].value}
				</p>
			);
		}

		return null;
	};
	return (
		<div className="absolute inset-0 w-full h-full flex items-center justify-center">
			<div className="w-[85%] h-[50%]">
				<ResponsiveContainer
					width="100%"
					height="100%">
					<AreaChart
						data={data}
						margin={0}>
						<defs>
							<linearGradient
								id="color"
								x1="0"
								y1="0"
								x2="0"
								y2="1">
								<stop
									offset="0%"
									stopColor="#ef2c5a"
									stopOpacity={0.5}
								/>
								<stop
									offset="100%"
									stopColor="#ef2c5a"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<Tooltip content={<CustomTooltip />} />
						<Area
							type="monotone"
							dataKey="amount"
							stroke="#ef2c5a"
							fillOpacity={0.4}
							fill="url(#color)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export const MainChart = ({ data }) => {
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<p className="text-[var(--black-primary)] font-semibold text-[1.3rem] sm:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[2rem]">
					₦{payload[0].value}
				</p>
			);
		}

		return null;
	};
	return (
		<div className="absolute bottom-[8%] w-[95%] h-[80%] ">
			<ResponsiveContainer
				width="100%"
				height="100%">
				<AreaChart
					data={data}
					margin={{ top: 0, left: 0, bottom: 0, right: 20 }}>
					<defs>
						<linearGradient
							id="color"
							x1="0"
							y1="0"
							x2="0"
							y2="1">
							<stop
								offset="0%"
								stopColor="#ef2c5a"
								stopOpacity={0.5}
							/>
							<stop
								offset="100%"
								stopColor="#ef2c5a"
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<Tooltip
						content={<CustomTooltip />}
						cursor={{
							stroke: "#000000",
						}}
					/>
					<CartesianGrid
						vertical={false}
						opacity={0.5}
					/>
					<XAxis
						dataKey="date"
						axisLine={false}
						tick={{ fill: "#0a0a0a" }}
						tickLine={false}
						dy={10}
					/>
					<YAxis
						domain={[1000, "dataMax + 1000"]}
						allowDataOverflow={true}
						tick={{ fill: "#0a0a0a" }}
						tickLine={false}
						allowDecimals={false}
						axisLine={false}
						dx={-7}
					/>
					<Area
						type="monotone"
						dataKey="amount"
						stroke="#ef2c5a"
						fillOpacity={0.4}
						fill="url(#color)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};
