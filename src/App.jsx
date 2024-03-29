import { Outlet } from 'react-router-dom'
import './App.css'
import MenuAppBar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <MenuAppBar/>
      <Outlet/>
    </div>
  )
}

export default App
