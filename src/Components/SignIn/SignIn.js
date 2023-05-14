import React, { useState, useContext } from "react";
import "./SignIn.css";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MdToggleOff } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

import AppLayout from "../../layout/AppLayout";

// import  AuthContext  from "../../contexts/auth-context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { logIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    // logIn(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     toast.success('Login Successful, Welcome',  {
    //       duration: 4000,
    //       position: 'top-center',

    //       // Styling
    //       style: {fontSize: '13px'},
    //       className: '',
    //     })
    //     navigate("/explore");
    //     // console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
    try {
      setLoading(true);
      const response = await fetch(
        "https://spefind-server.onrender.com/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        sessionStorage.setItem("token", data.token);
        // Redirect to home page or dashboard
        toast.success(`${data.message},`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: "",
        });
        setLoading(false);
      }
      if (!response) {
        setLoading(false);
        throw new Error();
      }
      if (!response.ok) {
        setLoading(false);

        throw new Error();
      }
      if (data.data.userRole === "speaker") {
        window.location.href = "/dashboard";
      }
      if (data.data.userRole === "organizer") {
        window.location.href = "/explore";
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast.error(`Please cross check your details and try again`, {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: "",
      });
    }
  };
  return (
    <AppLayout>
      <div>
        <h1 className="miss mt-5 mt-md-4">We missed you!</h1>

        <form className="SignInForm">
          <label htmlFor="email" className="logLabel">
            Email Address
          </label>
          <br />
          <input
            id="email"
            name="email"
            className="inputForm"
            type="email"
            autoComplete="username"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label htmlFor="password" className="logLabel">
            Password
          </label>
          <br />
          <input
            id="password"
            className="inputForm"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type here"
          />
          <br />
          <div className="forgot">
            <div className="d-flex">
              <MdToggleOff className="toggle" />
              <input type="checkbox" className="check" />
              <p>Keep logged in</p>
            </div>
            <p className="fw-semibold">Forgot Password? </p>
          </div>

          <button
            className="btn btnSign"
            onClick={onSubmit}
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Submit"}
          </button>
        </form>
        <p className="new">
          New here? <a href="/register"> Sign up</a>{" "}
        </p>
      </div>
    </AppLayout>
  );
};

export default SignIn;
