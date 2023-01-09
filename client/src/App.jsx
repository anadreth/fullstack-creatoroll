import React from "react"
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import LoginPage from './pages/loginPage/loginPage';
import UserDashboard from './pages/userDashboard/userDashboard';
import CreateCharacter from './pages/createCharacter/createCharacter';
import CreateAdventure from "./pages/createAdventure/createAdventure";
import CreateInBetween from "./pages/createInBetween/createInBetween";

function App() {

const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/:userId" element={isAuth ? <UserDashboard /> : <Navigate to ="/login" />} />
          <Route path="/create-character" element={isAuth ? <CreateCharacter /> : <Navigate to ="/login" />} />
          <Route path="/create-adventure" element={isAuth ? <CreateAdventure /> : <Navigate to ="/login" />} />
          <Route path="/create-in-between" element={isAuth ? <CreateInBetween /> : <Navigate to ="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
