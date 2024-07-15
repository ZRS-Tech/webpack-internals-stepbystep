import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/style.css";
import keen from "../assets/images/keenInfo.png";
import { unitTests } from "../../tests/city.tests";
const App = () => {
	const data = ["pUne", "patna", "punjab", "jaipur", "delhi", "West Bengal"];
	const [filteredData, setFilteredData] = useState([]);
	const [query, setQuery] = useState("");
	useEffect(()=> {
		const x = CarringFn(5)(4)(6);
		console.log({CarringFn: x});
	}, []);
	const onSearchData = (value) => {
		setQuery(value);
		if (!!value) {
			const filtered = data.filter((item) =>
				item.toLowerCase().startsWith(value.toLowerCase())
			);
			setFilteredData(filtered);
		} else {
			setFilteredData([]);
		}
	};
	
	const CarringFn = x => x + 1;

	return (
		<>
			<input
				id="searchText"
				name="searchText"
				onChange={(e) => onSearchData(e.target.value)}
				value={query}
			/>
			<div>
				<ul>
					{filteredData.map((item) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</>
	);
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
