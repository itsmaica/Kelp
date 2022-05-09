import React, { useState } from 'react';
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import './LoginForm.css'
import login from "../../images/login.png"
import whiteLogo from "../../images/whiteLogo.png"

// const LoginFormPage() {
//     const dispatch = useDispatch();
//     const sessionUser = useSelector(state => state.session.user)
// }

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    if (sessionUser) return (
        <Redirect to="/" />
    )

    const demoUser = e => {
      e.preventDefault();

      const credential = "Demo-lition"
      const password = "password";

      return dispatch(sessionActions.login({ credential, password }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }

      if (sessionUser) {
        return null
      } else {
        return (
          <>
          <div id="login-header">
              <div id="logo-container">
                <h1 id="login-kelp">Kelp</h1>
                {/* <img id="white-log-login" src={whiteLogo}/> */}
              </div>
          </div>

          <div id="login-container">


            <div className='login-left' >
              <h1 id="login-h1">Login to Kelp</h1>

              <form
            onSubmit={demoUser}
            className="demo-login-l"
          >
            <button id="demo-button-l">
              Demo User
            </button>
          </form>

              <form className="login-form" onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <label>
                <input
                className='login-input'
                  type="text"
                  placeholder='Email'
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                className='login-input'
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <button id="login-button" className="login-input" type="submit">Log In</button>
            </form>
            </div>

            <div className="login-right">
              <div className="login-circle-img">
                  <img id="login-vector" src={login}/>
              </div>
            </div>

          </div>


          </>
        );

      }


}

export default LoginFormPage;
