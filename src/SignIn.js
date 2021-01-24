import React from "react";
import { useForm } from "react-hook-form";
import logo from "./images/logo.PNG";

export default function SignIn() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="form-container">
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="Logo" />
        <h2 className="logo-text">MERGE DEVELOPMENT</h2>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>

        <div className="no-account">
          <p>Don't have an Xcellerate account? </p>
          <p className="blue-text"> Sign up now.</p>
        </div>

        <label>Email</label>
        <input
          name="email"
          ref={register({
            required: true,
            minLength: 4,
            pattern: /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Email is required</p>
        )}

        <label>Password</label>
        <input
          name="password"
          placeholder="Forgot your password?"
          ref={register({
            required: true,
            maxLength: 17,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Password is required</p>
        )}
        <button type="submit">Sign in </button>
      </form>
      <nav className="footer">
        <li>Contact</li>
        <li>Privacy</li>
        <li>Terms</li>
      </nav>
    </div>
  );
}
