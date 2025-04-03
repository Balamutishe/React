import { BrowserRouter, Routes, Route } from "react-router";

import { Header } from "./components/Header/Header.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { Dialogs } from "./components/Dialogs/Dialogs.tsx";

import './App.css'

const App = () => {
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
							<Route path={ '/' } element={ <Profile authState={ false }/> }/>
							<Route
								path={ '/user' }
								element={ <Profile authState={ true }/> }
							/>
							<Route path={ '/dialogs' } element={ <Dialogs/> }/>
							<Route path={ '/dialogs/:chatId' } element={ <Dialogs/> }/>
						</Routes>
					</section>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App