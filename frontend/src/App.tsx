// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ImgContainerNavigationComponent from './components/container-preview/imgContainerNavigation.component'
import NavbarComponent from './components/Navbar/navbar.component'
import SidebarComponent from './components/Navbar/sidebar.component'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="relative">
    <NavbarComponent/>
    <SidebarComponent/>
    <ImgContainerNavigationComponent/>
    </div>
  )
}

export default App
