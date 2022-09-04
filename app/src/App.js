import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import React from "react";
import AddComplaint from "./views/AddComplaint";
import Register from "./views/Register";
import Error from "./views/Error";
import Dashboard from "./views/Dashboard";
import ComplaintDetails from "./views/ComplaintDetails";

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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/complaints/:id">
          <ComplaintDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
