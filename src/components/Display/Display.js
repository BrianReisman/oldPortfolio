import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//
import StyledDisplay from "./StyledDisplay";
import Home from "./Components/Home/Home";
import Now from "./Components/Now/Now";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

const Display = (props) => {
  const location = useLocation();
  const history = useHistory(); //*possible put arrows in display vs each component?
  console.log(history.location.pathname);

  return (
    <StyledDisplay>
      {/* <h1>static h1 on {history.location.pathname}</h1> */}

      <main>
        <AnimatePresence>
          {/* <div className='arrows'>
            <div className="arrowDiv">
              <i className="arrow leftArrow"></i>
            </div>

            <div className="arrowDiv">
              <i className="arrow rightArrow"></i>
            </div>
          </div> */}
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/now" component={Now} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          {/* <div className='arrows'> */}
          {/* <div className="arrowDiv">
              <i className="arrow leftArrow"></i>
            </div> */}

          {/* <div className="arrowDiv"> */}
          {/* <i className="arrow rightArrow"></i> */}
          {/* </div> */}
          {/* </div> */}
        </AnimatePresence>
      </main>
    </StyledDisplay>
  );
};

export default Display;
