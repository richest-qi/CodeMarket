import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Route,
  Switch,
  useParams,
  useLocation
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
                
            </ul>
            <Redirect from="/" 
                    to={{
                        pathname:"/home",
                        state:{
                            from:"/"
                        },
                        a:{
                            b:"hellow world"
                        }
                    }}/>
            <Route path="/about"><About/></Route>
            <Route path="/users"><Users/></Route>
            <Route path="/home"><Home/></Route>
        </Router>
    );
}



function About(){
    return <div>About</div>
}

function Users(){
    return <div>Users</div>
}

function Home(){
    const location = useLocation();
    console.log(location);
    return <div>Home</div>
}