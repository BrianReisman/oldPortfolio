import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div>
      <h1>Hi from App.js</h1>
      <p>I'm a p tag!</p>
      <SideBar />
      <hr />


      <Route exact path="/">
        <SideBar />
      </Route>

      <Route path="/now" component={SideBar} />
      <Route 
        path="/work"
        render={(props) => {
          console.log(props)
          return <code>Code!</code>;
        }}
        />
    </div>
  );
};

export default App;

//* <Route> with render={} requires a return