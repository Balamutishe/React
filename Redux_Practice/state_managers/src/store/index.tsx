import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import countReducer from "./countSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		count: countReducer,
	},
});

export default store;
