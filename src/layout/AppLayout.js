import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Navbar/Header";

export default function AppLayout({ children, backgroundColor }) {
  return (
    <div>
      <Navbar backgroundColor={backgroundColor} />
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
}
