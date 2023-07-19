import { useState } from "react";
import { Login, Signup, Home, Hotel, Room, Rooms } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Navbar />
      <div className="navTop"></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/hotel" element={<Hotel />} />
        <Route exact path="rooms/:hotelId" element={<Rooms />} />
        <Route exact path="room" element={<Room />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
