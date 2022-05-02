import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFromPage";

function App() {
  return (
    <>
    <h1>Hello from Kelp</h1>
      <h2>Find your perfect Beach</h2>
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
    </>
  )
}

export default App;
