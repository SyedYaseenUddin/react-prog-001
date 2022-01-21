import React from "react";
import "./style.css";
import { Switch, Route } from 'react-router-dom';
import About from "./About"

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>



      <Switch>
          <Route exact path="/" component={About}></Route>
      </Switch>
    </div>
    
  );
}
