//
import React from "react";
import { Route } from "react-router-dom";
import './app.css'
//components
import StyledApp from './StyledApp';
import SideBar from "./components/SideBar/SideBar";
import Home from './components/Home/Home';

const App = () => {
  return (
    <StyledApp>
      <SideBar />
      <Home/>
    </StyledApp>
  );
};

export default App;

//* <Route> with render={} requires a return



//       {/* <Route exact path='/' component={Home}/> */}


//       {/* <h1>Hi from App.js</h1> */}
//       {/* <p>I'm a p tag!</p> */}
//       {/* <hr /> */}

// {/* 
//       <Route exact path="/">
//         <SideBar />
//       </Route>

//       <Route path="/now" component={SideBar} />
//       <Route 
//         path="/work"
//         render={(props) => {
//           console.log(props)
//           return <code>Code!</code>;
//         }}
//         /> */}
