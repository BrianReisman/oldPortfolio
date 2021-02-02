import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

//component;
import StyledHome from "./StyledHome";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../../../styles/animation";

const Home = (props) => {
  const history = useHistory();
  console.log(history.length);
  console.log(history.location.pathname);

  useEffect(() => {
    if (history.length <= 3) {
      setTimeout(() => {
        props.history.push("/now");
      }, 3000);
    }
  });
  //*without using useEffect I could try if(props.history.length > 1{...push()})

  const rtArrow = () => {
    history.push("/now");
  };

  return (
    <StyledHome>
      <motion.div
        style={pageStyle}
        className="motion"
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="photoContainer">
          {/* <div className="arrowDiv"> */}
          {/* <i className="arrow rightArrow"></i> */}
          {/* </div> */}

          {/* //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <div className="arrowDiv" onClick={rtArrow}>
            
            <i className="rightArrow arrow"></i>
          </div>
        </div>
      </motion.div>
    </StyledHome>
  );
};

export default Home;
