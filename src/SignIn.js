import React from "react";
import { useForm } from "react-hook-form";
import logo from "./images/logo.PNG";

export default function SignIn() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  //   validateEmail(email){}
  //   handleChange(e){}
  return (
    <div className="form-container">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" /> */}
        <p className="logo-text">MERGE DEVELOPMENT</p>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>

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
          ref={register({
            required: true,
            maxLength: 17,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Password is required</p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}
