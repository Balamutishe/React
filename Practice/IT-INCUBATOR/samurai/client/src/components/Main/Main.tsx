import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import { useQueryMe } from "../../hooks/api";
import { AuthForm } from "../Auth/AuthForm.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { Navbar } from "../Navbar/Navbar.tsx";
import c from "./Main.module.css";

const LazyProfile = lazy(
	() => import("../../pages/ProfilePage/ProfilePage.tsx"));
const LazyDialogs = lazy(
	() => import("../../pages/DialogsPage/DialogsPage.tsx"));
const LazyUsersView = lazy(() => import("../../pages/UsersPage/UsersPage.tsx"));

export const Main = () => {
		const queryUser = useQueryMe();
		
		switch (queryUser.status) {
				case "pending":
						return <Loader/>;
				case "success":
						return (
							<main className={ c.main }>
									<section className={ c.navbar }>
											<Navbar/>
									</section>
									<section className={ c.routes }>
											<Suspense fallback={ <Loader/> }>
													<Routes>
															<Route path={ "/" } element={ <LazyProfile/> }/>
															<Route
																path={ "/dialogs" } element={ <LazyDialogs/> }
															/>
															<Route
																path={ "/dialogs/:chatId" }
																element={ <LazyDialogs/> }
															/>
															<Route
																path={ "/dialogs/:chatId/:page" }
																element={ <LazyDialogs/> }
															/>
															<Route
																path={ "/users" } element={ <LazyUsersView/> }
															/>
															<Route
																path={ "/users/:page" }
																element={ <LazyUsersView/> }
															/>
													</Routes>
											</Suspense>
									</section>
							</main>
						);
				case "error":
						return <AuthForm/>;
		}
};