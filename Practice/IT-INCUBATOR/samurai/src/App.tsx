import {Header} from "./Header/Header.tsx";
import {Navbar} from "./Navbar/Navbar.tsx";
import {Profile} from "./Profile/Profile.tsx";
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <main className='main'>
        <Navbar />
        <Profile />
      </main>
    </div>
  )
}

export default App
