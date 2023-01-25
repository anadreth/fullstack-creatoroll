import React from "react"
import {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import LoginPage from './pages/loginPage/loginPage';
import UserDashboard from './pages/userDashboard/userDashboard';
import CreateCharacter from './pages/createCharacter/createCharacter';
import CreateAdventure from "./pages/createAdventure/createAdventure";
import CreateInBetween from "./pages/createInBetween/createInBetween";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
const [isLoading, setLoading] = useState(true);
const isAuth = Boolean(useSelector((state) => state.token));

function someRequest() {
  return new Promise(resolve => setTimeout(() => resolve(), 2500));
} 

useEffect(() => {
  someRequest().then(() => {
    const loaderElement = document.querySelector(".loader-container");
    if (loaderElement) {
      loaderElement.remove();
      setLoading(!isLoading);
    }
  });
});

if (isLoading) {
  return null;
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documents" element={<About />} />
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
