import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Guests from './pages/guestsTable';

import NavBar from './sections/navbar';
import LandingPage from './pages/landingPage.jsx';
import RegistrationForm from './sections/registrationForm.js';
import RegisterSA from './pages/signUpSA';
import RegisterB8R from './pages/signupB8R';
import Login from './pages/login';
import FeedBack from "./pages/feedbackPage";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/seminarregistration' element={<RegistrationForm />} ></Route>
        <Route path='/signupsa' element={<RegisterSA />} ></Route>
        <Route path='/signupb8r' element={<RegisterB8R />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/feedback' element={<FeedBack />} ></Route>
        {/* <Route path='/guests' element={<Guests />} ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
