import React from "react";
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
          {/* <div> */}
            <div className="arrowDiv">
              <i className="arrow leftArrow"></i>
            </div>

            <div className="arrowDiv" onClick={rtArrow}>
              <i className="arrow rightArrow"></i>
            {/* </div> */}
          </div>
        </div>
      </motion.div>
    </StyledHome>
  );
};

export default Home;
