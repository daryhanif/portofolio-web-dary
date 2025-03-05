// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from './components/container-preview'
import NavbarComponent from './components/Navbar/navbar.component'
import SidebarComponent from './components/Navbar/sidebar.component'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="relative">
    <NavbarComponent/>
    <SidebarComponent/>
    <MainContainer/>
    </div>
  )
}

export default App
