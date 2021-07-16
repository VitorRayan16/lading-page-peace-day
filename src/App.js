import React from "react";
import logo from "./logo.svg";
import Topbar from "./UI/topbar/topbar";
import { COLORS } from "./constants";
import LandingPage from "./landingPage/landingPage";

function App() {
	return (
		<div style={{ background: COLORS.white, height: "100vh" }}>
			<Topbar />
			<LandingPage />
		</div>
	);
}

export default App;
