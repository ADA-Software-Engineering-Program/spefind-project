import React, { useState } from "react"
import "./Chat.css"
// import Header from "../../Components/Navbar/Navbar";
import { BsFillCameraVideoFill, BsSearch, BsThreeDotsVertical } from "react-icons/bs"
import { BiBlock, BiCheckDouble, BiUserCircle } from "react-icons/bi"
import { FaPhoneAlt } from "react-icons/fa"
import { TbMessageCircle2Filled } from "react-icons/tb"
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai"
import User from "../../images/user.png"
import User2 from "../../images/user-2.png"
// import InputEmoji from "react-input-emoji";

import { Picker } from "emoji-mart"
// import "emoji-mart/css/emoji-mart.css";

const Chat = () => {
  // eslint-disable-next-line no-unused-vars
  const [showEmojis, setShowEmojis] = useState(false)
  return (
    <>
      {/* <Header /> */}
      <main className='chat'>
        {showEmojis && (
          <div>
            <Picker />
          </div>
        )}
        <section className='section-left'>
          <div className='user-header'>
            <div className='image-box'>
              <img src={User} alt='user-dp' />
            </div>
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className='user-search'>
            <form action=''>
              <input type='text' placeholder='Search' />
              <button type='button'>
                <BsSearch className='search-icon' />
              </button>
            </form>
          </div>
          <div className='user-box'>
            <div className='user activee'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>

            <div className='user'>
              <div className='image-box'>
                <img src={User} alt='user-dp' />
              </div>
              <div className='user-cont'>
                <div className='user-div'>
                  <p className='user-name'>Titilayo Chibuike</p>
                  <small>7:35pm</small>
                </div>
                <div className='user-boxes'>
                  <p className='user-text'>Hello. Can you please leuey heeej eejj ssh hsh</p>
                  <div>
                    <BiCheckDouble className='read-icon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-main'>
          <div className='chat-header'>
            <div className='image-box'>
              <img src={User} alt='user-dp' />
            </div>
            <div>
              <p>Titilayo Chibuike</p>
              <p>Online</p>
            </div>
          </div>

          <div className='chat-body'>
            <div className='chat-block'>
              <div className='user-message'>
                <p>Hello! I am in need of a speaker for my wedding!</p>
                <small className='timestamp'>Today, 8.58pm</small>
              </div>
              <div className='reply-message'>
                <p>Hello. Can you please provide more information</p>
                <small className='timestamp'>Today, 9:05pm</small>
              </div>

              <div className='reply-message'>
                <p>Hello. Can you please provide more information</p>
                <small className='timestamp'>Today, 9:05pm</small>
              </div>
              <div className='user-message'>
                <p>Hello! I am in need of a speaker for my wedding!</p>
                <small className='timestamp'>Today, 8.58pm</small>
              </div>

              <div className='reply-message'>
                <p>Hello. Can you please provide more information</p>
                <small className='timestamp'>Today, 9:05pm</small>
              </div>

              <div className='reply-message'>
                <p>Hello. Can you please provide more information</p>
                <small className='timestamp'>Today, 9:05pm</small>
              </div>
            </div>
          </div>

          <div className='chat-footer'>
            <form className='chat-form'>
              <input type='text' className='chat-input' />
              {/* <InputEmoji
                // value={text}
                // onChange={setText}
                cleanOnEnter
                // onEnter={handleOnEnter}
                placeholder="Type a message"
              /> */}
              {/* <button>
                {" "}
                onClick={() => setShowEmojis(!showEmojis)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button> */}
            </form>
          </div>
        </section>

        <section className='section-right'>
          <div className='image-box'>
            <img src={User2} alt='user-dp' />
          </div>
          <p className='user-name'>Titilayo Chibuike</p>
          <p className='user-info'>Entertainment and Media Speaker </p>
          <div className='settings'>
            <div className='settings-logo'>
              <BiUserCircle className='settings-icon' />
            </div>
            <div className='settings-detail'>Profile</div>
          </div>
          <div className='settings'>
            <div className='settings-logo'>
              <TbMessageCircle2Filled className='settings-icon' />
            </div>
            <div className='settings-detail'>Chat</div>
          </div>
          <div className='settings'>
            <div className='settings-logo'>
              <FaPhoneAlt className='settings-icon' />
            </div>
            <div className='settings-detail'>Voice Call</div>
          </div>
          <div className='settings'>
            <div className='settings-logo'>
              <BsFillCameraVideoFill className='settings-icon' />
            </div>
            <div className='settings-detail'>Video call</div>
          </div>
          <div className='options'>
            <div className='options-logo'>
              <AiOutlineHeart className='options-icon' />
            </div>
            <div className='options-detail'>Add to favorites</div>
          </div>
          <div className='options'>
            <div className='options-logo'>
              <AiOutlineHeart className='options-icon' />
            </div>
            <div className='options-detail'>Starred messages</div>
          </div>
          <div className='danger'>
            <div className='danger-logo'>
              <AiOutlineHeart className='danger-icon' />
            </div>
            <div className='danger-detail'>Report this contact</div>
          </div>
          <div className='danger'>
            <div className='danger-logo'>
              <BiBlock className='danger-icon' />
            </div>
            <div className='danger-detail'>Block this contact</div>
          </div>
          <div className='danger'>
            <div className='danger-logo'>
              <AiFillDelete className='danger-icon' />
            </div>
            <div className='danger-detail'>Delete this contact</div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Chat
