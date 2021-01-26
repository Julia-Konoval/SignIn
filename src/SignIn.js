import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "./images/logo.PNG";

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const onSubmit = (data) => console.log(data);

  return (
    <div className="form-container">
      <div className="form-wrap">
        <div className="logo-container">
          <img className="logo-img" src={logo} alt="Logo" />
          <h2 className="logo-text">MERGE DEVELOPMENT</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>

          <div className="no-account">
            <p>Don't have an Xcellerate account? </p>
            <p className="blue-text"> Sign up now.</p>
          </div>

          <label>Email {errors.email && <span>Invalid Email</span>}</label>
          <input
            name="email"
            ref={register({
              required: true,
              minLength: 4,
              pattern: /^\S+@\S+$/i,
            })}
            onChange={(e) => setEmailText(e.target.value)}
            style={{
              border: errors.email
                ? "1px solid red"
                : emailText.length > 5
                ? "1px solid green"
                : "",
            }}
            type="text"
          />

          <label>
            Password {errors.password && <span>Invalid format too short</span>}
          </label>
          <input
            name="password"
            placeholder="Forgot your password?"
            ref={register({
              required: true,
              maxLength: 17,
              minLength: 6,
            })}
            onChange={(e) => setPasswordText(e.target.value)}
            style={{
              border: errors.password
                ? "1px solid red"
                : passwordText.length > 5
                ? "1px solid green"
                : "",
            }}
            type="text"
          />

          <button
            type="submit"
            disabled={
              errors.email ||
              errors.password ||
              passwordText.length < 1 ||
              emailText.length < 1
                ? true
                : false
            }
          >
            Sign in
          </button>
        </form>
        <nav className="footer">
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms</li>
        </nav>
      </div>
    </div>
  );
}
