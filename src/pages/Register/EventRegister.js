import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Logo from "../../images/footerLogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

// import toast from "react-hot-toast";
// import { useFormik } from "formik";
// import { useAuth } from "../../contexts/AuthContext";

function EventRegister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { signup, googleSignIn } = useAuth();
  // const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    // setLoading(true);

    // await signup(values.email, values.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     // console.log(user);
    //     setLoading(false);
    //     toast.success(
    //       "Registration Successful, Please complete your registration",
    //       {
    //         duration: 4000,
    //         position: "top-center",

    //         // Styling
    //         style: { fontSize: "13px" },
    //         className: "",
    //       }
    //     );
    //     navigate("/create-profile");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     toast.error(errorCode);
    //     setLoading(false);
    //   });

    values.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="Bg-img">
        <img src={Logo} alt="Logo" className="regLogo" />
        <form className="JoinForm">
          <div className="ovalBG"></div>
          <div className="NameCard">
            <div className="me-3 mt-1">
              <label className="labell">First Name</label>
              <br />
              <input
                type="text"
                placeholder="First Name"
                className="regInput1"
              />
            </div>

            <div className="mt-1">
              <label className="labell">Last Name</label>
              <br />
              <input
                type="text"
                placeholder="Last Name"
                className="regInput1"
              />
            </div>
          </div>
          <label className="labelForm">E-mail Address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="regInput"
            placeholder="Email address"
          />

          <label className="labelForm">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="regInput"
            placeholder="Password"
          />

          <label className="labelForm">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="regInput"
          />

          <button className=" btn btnSign-up" onClick={onSubmit} type="submit">
            Sign up
          </button>
          <p className="or">OR</p>

          <div className="regIcon">
            <FcGoogle className="regSocial" />
            <FaFacebookF className="regSocial text-primary" />
            <FaTwitter className="regSocial text-primary" />
          </div>
          <p className="acct">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default EventRegister;
