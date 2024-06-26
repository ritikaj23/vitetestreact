import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Nav_bar/Navbar';
import Login from './Components/Login/Login';
function App() {

    return (
        /*<>
        <Landing_Page/>
        </>*/
       
        <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Landing_Page/>}></Route>
                <Route path='/login' element={<Login/>}/> 
            </Routes>
        </BrowserRouter>

    </div>

    
    );
}

export default App;