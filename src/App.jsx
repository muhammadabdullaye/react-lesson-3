import './App.css'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router'
import Home from './componets/Home'
import About from './componets/About'
import Shop from './componets/Shop'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/about' element={ <About /> } ></Route>
        <Route path='/shop' element={ <Shop /> } ></Route>
      </Routes>

      <br />
      <hr />
      <h1>Footer</h1>
    </>
  )
}

export default App
