import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";

import { Header } from "./components/Header/Header.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { Dialogs } from "./components/Dialogs/Dialogs.tsx";
import { UsersView } from "./components/Users/UsersView.tsx";
import store from "./redux";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient.ts";

const App = () => {
		return (
			<QueryClientProvider client={ queryClient }>
					<ReactQueryDevtools initialIsOpen={ true }></ReactQueryDevtools>
					<Provider store={ store }>
							<BrowserRouter>
									<div className="app-container">
											<Header/>
											<main className="main">
													<section className="main__navbar">
															<Navbar/>
													</section>
													<section className="main__pages-router">
															<Routes>
																	<Route path={ "/" } element={ <Profile/> }/>
																	<Route path={ "/dialogs" } element={ <Dialogs/> }/>
																	<Route path={ "/dialogs/:chatId" } element={ <Dialogs/> }/>
																	<Route path={ "/users" } element={ <UsersView/> }/>
															</Routes>
													</section>
											</main>
									</div>
							</BrowserRouter>
					</Provider>
			</QueryClientProvider>
		
		
		);
};

export default App;