import { BrowserRouter, Routes, Route } from "react-router";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header/Header.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { Dialogs } from "./components/Dialogs/Dialogs.tsx";
import { UsersView } from "./components/Users/UsersView.tsx";
import { useQueryUserGet } from "./hooks/api/useQueryUserGet.ts";
import { setProfile } from "./redux/ProfileSlice.ts";
import './App.css'

const App = () => {
	const dispatch = useDispatch();
	const { user, status } = useQueryUserGet(
		'ea397cb1-6282-4e0b-b319-585c348a590f')
	console.log(user)

	if (status === 'success') {
		dispatch(setProfile(user));
	}
	
	return (
		<BrowserRouter>
			<div className='app-container'>
				<Header/>
				<main className='main'>
					<section className='main__navbar'>
						<Navbar/>
					</section>
					<section className='main__pages-router'>
						<Routes>
							<Route path={ '/' } element={ <div>Главная страница</div> }/>
							<Route path={ '/profile' } element={ <Profile/> }/>
							<Route path={ '/dialogs' } element={ <Dialogs/> }/>
							<Route path={ '/dialogs/:chatId' } element={ <Dialogs/> }/>
							<Route path={ '/users' } element={ <UsersView/> }/>
						</Routes>
					</section>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App