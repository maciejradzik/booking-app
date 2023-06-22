import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Apartmentspage from "./pages/apartmentspage.jsx";
import Contactpage from "./pages/contactpage.jsx";
import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import MainPage from "./pages/mainpage.jsx";
import AboutUs from "./pages/aboutus";
import Navbar from "./components/navbar";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<MainPage/>} />
                        <Route path='contact' element={<Contactpage></Contactpage>} />
                        <Route path='apartments' element={<Apartmentspage />} />
                        <Route path='aboutus' element={<AboutUs />} />
                    </Routes>
                </HashRouter>
            </LocalizationProvider>
        </>
        )
}

export default App;
