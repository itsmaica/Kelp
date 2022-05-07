import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFromPage"
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import AddNewBeachForm from "./components/AddNewBeachForm"
import BeachList from "./components/BeachList";
import ShowOneBeach from "./components/ShowOneBeach";
import HomePage from "./components/HomePage"
import UserProfile from "./components/UserProfile";
import CreateReviewForm from "./components/CreateReviewForm"
import BeachListTemp from "./components/BeachListTemp";
import * as sessionActions from "./store/session";

// trying index.css for App - might need to make home page its own component

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/beaches">
            <BeachList />
          </Route>
          <Route path="/beaches/new">
            <AddNewBeachForm />
          </Route>
          <Route exact path="/:userId/beaches">
            <UserProfile />
          </Route>
          <Route exact path="/beaches/:beachId/reviews/new">
            <CreateReviewForm />
          </Route>
          <Route exact path="/beaches/:beachId">
            <ShowOneBeach />
          </Route>

          <Route exact path="/test">
            {/* <BeachListTemp /> */}
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
