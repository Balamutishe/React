import { Header } from "./components/Header/Header.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { UserPage } from "./pages/UserPage/UserPage.tsx";
import { DialogsPage } from "./pages/DialogsPage/DialogsPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
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
                                <Route path={ '/' } element={ <UserPage/> }/>
                                <Route path={ '/dialogs' } element={ <DialogsPage/> }/>
                            </Routes>
                        </section>
                    </main>
                </div>
            </BrowserRouter>
    )
}

export default App
