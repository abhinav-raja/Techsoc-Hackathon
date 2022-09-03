import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import React from "react";
import AddComplaint from "./views/AddComplaint";
import Register from "./views/Register";
import ViewComplaints from "./views/ViewComplaints";
import Error from "./views/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addcomplaint">
          <AddComplaint />
        </Route>
        <Route path="/dashboard">
          <ViewComplaints />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
