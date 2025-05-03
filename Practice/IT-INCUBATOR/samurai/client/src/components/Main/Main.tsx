import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";

import { useQueryMe } from "../../hooks/api";
import { setProfile } from "../../redux/ProfileSlice.ts";
import { AuthForm } from "../Auth/AuthForm.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { Navbar } from "../Navbar/Navbar.tsx";
import c from "./Main.module.css";

const LazyProfile = lazy(() => import("../Profile/Profile"));
const LazyDialogs = lazy(() => import("../Dialogs/Dialogs"));
const LazyUsersView = lazy(() => import("../Users/UsersView.tsx"));


export const Main = () => {
		const dispatch = useDispatch();
		const queryUser = useQueryMe();
		if (queryUser.status === "success") {
				dispatch(setProfile(queryUser.data));
		}
		
		switch (queryUser.status) {
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