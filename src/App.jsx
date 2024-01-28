import './App.css'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import {Navigate, Route, Routes} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {

  const [authUser] = useAuthState(auth);

  return (
    <PageLayout>
      <Routes>
        {/* If user is not logged in, send them back to login page */}
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
        {/* If page is NOT / or auth THEN call ProfilePage with this url code */}
        {/* Can visit this page even without login */}
        <Route path='/:username' element = {<ProfilePage/>} />
      </Routes>
    </PageLayout>
  )
}

export default App
