import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";

import { 
  BrowserRouter,
  Navigate, 
  Route, 
  Routes } from 'react-router-dom';
import ScrollToTop from "./functions/ScrollToTop";

import { 
  HomePage,
  About, 
  Contact, 
  CreateAdventure, 
  CreateCharacter, 
  CreateInBetween, 
  LoginPage, 
  UserDashboard 
} from './pages/index'



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
    <div className="App h-screen overflow-scroll scrollbar-rounded-lg scrollbar-thin scrollbar-corner-red scrollbar-track-light scrollbar-thumb-red scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <BrowserRouter>
          <ScrollToTop />
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
