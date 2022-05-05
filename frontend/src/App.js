import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFromPage"
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import AddNewBeachForm from "./components/AddNewBeachForm"
import BeachList from "./components/BeachList";
import ShowOneBeach from "./components/ShowOneBeach";
import * as sessionActions from "./store/session";

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
          <Route path="/beaches/new">
            <AddNewBeachForm />
          </Route>
          <Route path="/beaches">
            <BeachList />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
