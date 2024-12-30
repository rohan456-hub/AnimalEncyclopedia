import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./home/home";
import About from "./About/About";
import Navbar from "./Nav/Navigation";
import Collection from "./Collection/collection";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Collection" element={<Collection/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </div>
  );
}

export default App;