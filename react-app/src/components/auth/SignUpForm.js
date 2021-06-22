import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));

    } else {
      console.log("Error")
      // error handling
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card">
      <form onSubmit={onSignUp}>
        <div>
          {/* {errors.map((error) => (
            <div>{error}</div>
          ))} */}
        </div>
        <div className="form-input-container">
          {/* <div> */}
            <label>User Name</label>
            <input className="form-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={updateUsername}
              value={username}
            ></input>
          {/* </div> */}
          {/* <div> */}
            <label>Email</label>
            <input className="form-input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            ></input>
          {/* </div> */}
          {/* <div> */}
            <label>Password</label>
            <input className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          {/* </div> */}
          {/* <div> */}
            <label>Confirm Password</label>
            <input className="form-input"
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          {/* </div> */}
        </div>
        <button id="loginBtn" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
