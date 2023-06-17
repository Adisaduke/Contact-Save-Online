import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Argo, Vulcan, NoPageFound, ThankYou } from "./pages";

import "./App.css";
// import "./assets/styles/main.css";

const App = () => {
	return (
		<Routes>
			<Route exact path="*" element={<NoPageFound />} />
			<Route exact path="/thank-you" element={<ThankYou />} />
			<Route exact path="/" element={<Home />} />
			<Route exact path="/argo" element={<Argo />} />
			<Route exact path="/vulcan" element={<Vulcan />} />
		</Routes>
	);
};

export default App;
