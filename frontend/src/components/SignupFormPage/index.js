import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demoUser = e => {
    e.preventDefault();

    const credential = "Demo-lition"
    const password = "password";

    return dispatch(sessionActions.login({ credential, password }));
  };

  return (
    <>
         <div id="login-header">
              <div id="logo-container">
                <h1 id="login-kelp">Kelp</h1>
                {/* <img id="white-log-login" src={whiteLogo}/> */}
              </div>
          </div>
        <div className="signup-section">




          <div id="sign-up-container">
            <h3 id="text">Sign up for Kelp</h3>
            <p id='connect'>Connect with awesome places</p>
            <form
              onSubmit={demoUser}
              className="demo-login-s"
            >
              <button
                id="demo-button"
              >
                Continue as Demo User
              </button>
            </form>

          <form className="signup-form" onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>

              <input
                type="text"
                value={email}
                placeholder="Email"
                className="s-input"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>

              <input
                type="text"
                value={username}
                className="s-input"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>

              <input
                className="s-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>

              <input
                className="s-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <button
              id="signup-button"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          </div>


        </div>


        </>
  );
}

export default SignupFormPage;
