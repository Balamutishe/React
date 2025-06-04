import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { queryClient } from "./api/queryClient.ts";

import { Header } from "./components/Header/Header.tsx";
import { Main } from "./components/Main/Main.tsx";
import store from "./redux";
import "./App.css";

const App = () => {
		return (
			<QueryClientProvider client={ queryClient }>
					<ReactQueryDevtools initialIsOpen={ true }></ReactQueryDevtools>
					<Provider store={ store }>
							<BrowserRouter>
									<div className="app-container">
											<Header/>
											<Main/>
									</div>
							</BrowserRouter>
					</Provider>
			</QueryClientProvider>
		);
};

export default App;