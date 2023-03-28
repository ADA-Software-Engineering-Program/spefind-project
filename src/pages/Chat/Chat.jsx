import React from "react";
import "./Chat.css";
import Header from "../../Components/Navbar/Navbar";
import { BsFillCameraVideoFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiBlock, BiCheckDouble, BiUserCircle } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import User from "../../images/user.png";
import User2 from "../../images/user-2.png";

const Chat = () => {
  return (
    <>
      {/* <Header /> */}
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

        <section className="section-main"><div className="chat-header"></div></section>

        <section className="section-right">
          <div className="image-box">
            <img src={User2} alt="user-dp" />
          </div>
          <p className="user-name">Titilayo Chibuike</p>
          <p className="user-info">Entertainment and Media Speaker </p>
          <div className="settings">
            <div className="settings-logo">
              <BiUserCircle className="settings-icon" />
            </div>
            <div className="settings-detail">Profile</div>
          </div>
          <div className="settings">
            <div className="settings-logo">
              <TbMessageCircle2Filled className="settings-icon" />
            </div>
            <div className="settings-detail">Chat</div>
          </div>
          <div className="settings">
            <div className="settings-logo">
              <FaPhoneAlt className="settings-icon" />
            </div>
            <div className="settings-detail">Voice Call</div>
          </div>
          <div className="settings">
            <div className="settings-logo">
              <BsFillCameraVideoFill className="settings-icon" />
            </div>
            <div className="settings-detail">Video call</div>
          </div>
          <div className="options">
            <div className="options-logo">
              <AiOutlineHeart className="options-icon" />
            </div>
            <div className="options-detail">Add to favorites</div>
          </div>
          <div className="options">
            <div className="options-logo">
              <AiOutlineHeart className="options-icon" />
            </div>
            <div className="options-detail">Starred messages</div>
          </div>
          <div className="danger">
            <div className="danger-logo">
              <AiOutlineHeart className="danger-icon" />
            </div>
            <div className="danger-detail">Report this contact</div>
          </div>
          <div className="danger">
            <div className="danger-logo">
              <BiBlock className="danger-icon" />
            </div>
            <div className="danger-detail">Block this contact</div>
          </div>
          <div className="danger">
            <div className="danger-logo">
              <AiFillDelete className="danger-icon" />
            </div>
            <div className="danger-detail">Delete this contact</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Chat;
