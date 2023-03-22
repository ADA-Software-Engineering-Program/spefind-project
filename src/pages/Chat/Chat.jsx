import React from "react";
import "./Chat.css";
import Header from "../../Components/Navbar/Navbar";

const Chat = () => {
  return (
    <>
      <Header />
      <main className="chat">
        <section className="section-left">Hey</section>
        <section className="section-main">Hello there</section>
        <section className="section-right">Testing</section>
      </main>
    </>
  );
};

export default Chat;
