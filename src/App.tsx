import { useState } from 'react'
import Homepage from './Pages/Homepage'
import './App.css'
import Aboutpage from './Pages/Aboutpage'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />


    </>
  )
}

export default App
