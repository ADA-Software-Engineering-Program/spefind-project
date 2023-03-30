import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "../src/Components/Aboutpage/About";
import Explore from "./pages/Explore/Explore";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import SignIn from "../src/Components/SignIn/SignIn";
import SignUp from "../src/Components/SignUp/SignUp";
import Register from "./pages/Register/Register";
import EventRegister from "./pages/Register/EventRegister";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import SpeakerProfile from "./pages/SpeakerProfile/SpeakerProfile";
import Bookme from "./pages/BookMe/Bookme.jsx";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/event-register" element={<EventRegister />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/speaker-profile" element={<SpeakerProfile />} />
      <Route path="/book-me" element={<Bookme />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
