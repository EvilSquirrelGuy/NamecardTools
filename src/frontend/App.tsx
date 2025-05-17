import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Profile from "@frontend/pages/Profile";
import Home from "@frontend/pages/Home";

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path='/about' element={<h1>About</h1>} /> */}
        <Route path='/profile/:uid' element={<Profile />} />
      </Routes>
    </>
  )
}