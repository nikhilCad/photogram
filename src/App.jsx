import './App.css'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/auth' element = {<AuthPage/>} />
      </Routes>
    </PageLayout>
  )
}

export default App
