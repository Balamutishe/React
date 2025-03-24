import { Header } from "./components/Header/Header.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
// import { Profile } from "./components/Profile/Profile.tsx";
import { Dialogs } from "./components/Dialogs/Dialogs.tsx";
import './App.css'

const App = () => {
	return (
			<div className='app-container'>
				<Header/>
				<main className='main'>
					<Navbar/>
					{/*<Profile/>*/ }
					<section className='main__pages-router'>
						<Dialogs/>
					</section>
				</main>
			</div>
	)
}

export default App
