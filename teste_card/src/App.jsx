import { useState } from 'react'
import './App.css'
import Yugioh from './Yu-Gi-OhLogo.webp'


function Card(){
  return(
    <>
    <img src={Yugioh} alt="Yu-Gi-Oh Logo" />
    </>
  )
}

function App() {
  return(
    <Card/>
  )
}

export default App
