import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";

import { Navbar } from "../Navbar/Navbar.tsx";
import { Profile } from "../Profile/Profile.tsx";
import { Dialogs } from "../Dialogs/Dialogs.tsx";
import { UsersView } from "../Users/UsersView.tsx";
import { useQueryMe } from "../../hooks/api";
import { setProfile } from "../../redux/ProfileSlice.ts";
import c from "./Main.module.css";
import { AuthForm } from "../Auth/AuthForm.tsx";


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
											<Routes>
													<Route path={ "/" } element={ <Profile/> }/>
													<Route path={ "/dialogs" } element={ <Dialogs/> }/>
													<Route
														path={ "/dialogs/:chatId" } element={ <Dialogs/> }
													/>
													<Route path={ "/users" } element={ <UsersView/> }/>
													<Route
														path={ "/users/:page" } element={ <UsersView/> }
													/>
											</Routes>
									</section>
							</main>
						);
				case "error":
						return <AuthForm/>;
		}
};