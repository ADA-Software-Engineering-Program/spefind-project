import React from "react";
import "./Chat.css";
import Header from "../../Components/Navbar/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiCheckDouble } from "react-icons/bi";
import User from "../../images/user.png";

const Chat = () => {
  return (
    <>
      <Header />
      <main className="chat">
        <section className="section-left">
          <div className="user-header">
            <div className="image-box">
              <img src={User} alt="user-dp" />
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="user-search">
            <form action="">
              <input type="text" placeholder="Search" />
            </form>
          </div>
          <div className="user-box">
            <div className="user activee">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
            <div className="user">
              <div className="image-box">
                <img src={User} alt="user-dp" />
              </div>
              <div>
                <div className="user-div">
                  <p className="user-name">Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <p className="user-text">
                  Hello. Can you please provide more...
                  <span>
                    <BiCheckDouble className="read-icon" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-main">Hello there</section>
        <section className="section-right">Testing</section>
      </main>
    </>
  );
};

export default Chat;
