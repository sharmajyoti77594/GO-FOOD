import { useState } from 'react'
import './App.css'
import Home from './screens/Home'
import Button from 'react-bootstrap/Button';
import { Routes, Route } from "react-router";
import NavbarCustom from './components/NavbarCustom';
import About from './screens/About';

function App() {

  return (
    <>
      <NavbarCustom />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
