import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "./images/logo.PNG";

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");

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
              required: !disabled,
              minLength: 4,
              pattern: /^\S+@\S+$/i,
            })}
            onChange={(e) => setValue({ value: e.target.value })}
            style={{
              border: errors.email ? "1px solid red" : "",
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
              required: !disabled,
              maxLength: 17,
              minLength: 6,
            })}
            onChange={(e) => setValue({ value: e.target.value })}
            style={{
              border: errors.password ? "1px solid red" : "",
            }}
            type="text"
          />

          <button
            type="submit"
            disabled={!value}
            style={{
              background: disabled ? "#c6d0e0" : "",
            }}
          >
            Sign in{" "}
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
