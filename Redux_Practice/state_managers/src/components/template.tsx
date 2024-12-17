// src/App.tsx
//
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./features/theme/themeSlice";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";

const App: React.FC = () => {
	const theme = useSelector((state: any) => state.theme);
	const dispatch = useDispatch();

	const handleToggleTheme = () => {
		dispatch(toggleTheme());
	};

	return (
		<div className={`app ${theme}`}>
			<Header theme={theme} toggleTheme={handleToggleTheme} />
			<Content theme={theme} />
			<Footer theme={theme} />
		</div>
	);
};

export default App;
