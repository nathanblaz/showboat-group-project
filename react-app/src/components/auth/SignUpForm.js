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
  const [avatar, setAvatar] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();

    setImageLoading(true);

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, avatar));
      setImageLoading(false)
    } else {
      // error handling
    }

  };

  useEffect(async () => {
    console.log(avatar, "before Effect")
    setAvatar();
    console.log(avatar, "after Effect")
  }, [dispatch, setAvatar])

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

  const updateAvatar = (e) => {
    setAvatar(e.target.files[0]);
    console.log(avatar, "++++++++++++++++++++++++++")
    console.log(e.target.files, "list ==========")
    console.log(e.target.files[0], "what goes in avatar")
    console.log(e.target.value, "what literally in in avatar")
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div>
        <label>Upload Avatar</label>
        <input type="file" id="avatar" name="avatar"
          accept="image/*"
          onClick={updateAvatar}
          // value={avatar}
          ></input>
      </div>
      <button type="submit">Sign Up</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  );
};

export default SignUpForm;
