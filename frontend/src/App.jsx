import React from 'react'
import "./App.css"
import { Outlet } from 'react-router-dom'
import NavBar from './pages/NavBar'
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    
    </>
    
  )
}

export default App
