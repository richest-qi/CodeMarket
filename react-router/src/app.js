import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

export default function App(){
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/users"><Users/></Route>
      </Switch>
    </Router>
  );
}

function Home(){
  return <h2>Home</h2>;
}
function About(){
  return <h2>About</h2>;
}
function Users(){
  return <h2>Users</h2>;
}