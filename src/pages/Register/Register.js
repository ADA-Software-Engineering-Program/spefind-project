/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/footerLogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

import useInput from "./useInput";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const { googleSignIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    try {
      await googleSignIn();
      toast.success(
        "Registration Successful, Please complete your registration",
        {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: "",
        }
      );
      navigate("/create-profile");
    } catch (error) {
      return null;
    }
  };
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    value: emailInputvalue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.match(mailFormat));
  const {
    value: passwordInputValue,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 6 && value.trim() !== "");

  const {
    value: confirmPasswordInputValue,
    isValid: enteredconfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      value.length >= 6 &&
      value.trim().match(passwordInputValue)
  );

  let formIsValid = false;

  if (
    emailInputvalue &&
    passwordInputValue &&
    confirmPasswordInputValue === passwordInputValue
  ) {
    formIsValid = true;
  }

  const signUpSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!formIsValid) {
        return;
      }

      if (
        !emailInputvalue &&
        !passwordInputValue &&
        !confirmPasswordInputValue
      ) {
        return;
      }

      const saveUserData = await fetch(
        "https://spefind-server.onrender.com/api/auth/speaker/signup",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInputvalue,
            password: passwordInputValue,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(saveUserData);
      setLoading(true);

      const data = await saveUserData.json();
      console.log(data);

      if (saveUserData.ok) {
        setLoading(false);
        toast.success(`${data.message}, " Please complete your registration"`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: "",
        });
        navigate("/create-profile");
      }

      if (!saveUserData.ok) {
        setLoading(false);
        toast.error(`${data.message},`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px" },
          className: "",
        });
        throw new Error();
      }
      if (!saveUserData.ok) {
        setLoading(false);
        throw new Error();
      }
      resetEmailInput();
      resetPasswordInput();
      resetConfirmPasswordInput();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="Bg-img">
        <img src={Logo} alt="Logo" className="regLogo" />
        <form className="JoinForm" onSubmit={signUpSubmitHandler}>
          <div className="ovalBG"></div>
          <div>
            <label className="labelForm">E-mail Address</label>
            <input
              type="email"
              name="email"
              className={
                emailInputHasError
                  ? `${styles.invalidInput} regInput mb-0`
                  : "regInput mb-0"
              }
              placeholder="Email address"
              value={emailInputvalue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && !enteredEmailIsValid && (
              <p className={styles.errorText}>Please enter a valid email !</p>
            )}
          </div>

          <div>
            <label className="labelForm">Password</label>
            <input
              type="password"
              label="Create password"
              name="password"
              required
              className={
                passwordInputHasError
                  ? `${styles.invalidInput} regInput mb-0`
                  : "regInput mb-0"
              }
              placeholder="Password"
              value={passwordInputValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputHasError && !enteredPasswordIsValid && (
              <p className={styles.errorText}>
                Password must be greater than 6 characters !
              </p>
            )}
          </div>

          <div>
            <label className="labelForm">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className={
                confirmPasswordInputHasError
                  ? `${styles.invalidInput} regInput mb-0`
                  : "regInput mb-0"
              }
              name="confirmPassword"
              value={confirmPasswordInputValue}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
            />
            {confirmPasswordInputHasError && !enteredconfirmPasswordIsValid && (
              <p className={styles.errorText}>Passwords do not match !</p>
            )}
          </div>

          <button
            className=" btn btnSign-up"
            type="submit"
            disabled={!formIsValid}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
          <p className="or">OR</p>

          <div className="regIcon">
            <FcGoogle
              className="regSocial"
              onClick={handleGoogleSignUp}
              style={{ cursor: "pointer" }}
            />
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

export default Register;
