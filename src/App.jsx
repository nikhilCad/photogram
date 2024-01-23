import './App.css'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import {HomePage} from './pages/HomePage/HomePage'
import {AuthPage} from './pages/AuthPage/AuthPage'
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/auth' element = {<AuthPage/>} />
      </Routes>
    </>
  )
}

export default App
