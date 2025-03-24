import { Header } from "./components/Header/Header.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { Dialogs } from "./components/Dialogs/Dialogs.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

const App = () => {
	return (
			<BrowserRouter>
				<div className='app-container'>
					<Header/>
					<main className='main'>
						<Navbar/>
						<section className='main__pages-router'>
							<Routes>
								<Route path={ '/' } element={ <Profile/> }/>
								<Route path={ '/messages' } element={ <Dialogs/> }/>
							</Routes>
						</section>
					</main>
				</div>
			</BrowserRouter>
	)
}

export default App
