// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFromPage";
// import * as sessionActions from './store/session'

// function App() {
//   return (
//     <>
//     <h1>Hello from Kelp</h1>
//       <h2>Find your perfect beach destination</h2>
//     <Switch>
//       <Route path="/login">
//         <LoginFormPage />
//       </Route>
//     </Switch>
//     </>
//   )
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import LoginFormPage from './components/LoginFromPage'
// import * as sessionActions from "./store/session";

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   return isLoaded && (
//     <>
//       <h1>Kelp</h1>
//       <h2>Find your perfect beach destination</h2>
//       <Switch>
//         <Route path="/login">
//           <LoginFormPage />
//         </Route>
//       </Switch>
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// // import LoginFormPage from "./components/LoginFormPage";
// import LoginFormPage from "./components/LoginFromPage"
// // import SignupFormPage from "./components/SignupFormPage";
// // import SignupFormPage from "./components/SignupFormPage";
// import SignupFormPage from "./components/SignupFormPage";
// import * as sessionActions from "./store/session";

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   return isLoaded && (
//     <>
//       <h1>Welcome to Coral</h1>
//         <h2>Find your perfect beach destination</h2>
//     <Switch>
//       <Route path="/login">
//         <LoginFormPage />
//       </Route>
//       <Route path="/signup">
//         <SignupFormPage />
//       </Route>
//     </Switch>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFromPage"
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
       <h1>Welcome to Kelp</h1>
         <h2>Find your perfect beach destination</h2>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
