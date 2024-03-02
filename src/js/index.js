import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/style.css";
import keen from "../assets/images/keenInfo.png";
const App = () => {
	return (
		<div>
			ZRS Tech
			<img src={keen} alt="keen" />
		</div>
	);
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
