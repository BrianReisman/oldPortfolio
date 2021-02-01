import React from "react";
import StyledHome from "./StyledHome";

const Home = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.history.push("/work");
  //   }, 3000);
  // }, []);
  //*without using useEffect I could try if(props.history.length > 1{...push()})

  return (
    <StyledHome>
      <div className="photoContainer">
        {/* <div className="arrowDiv"> */}
        {/* <i className="arrow rightArrow"></i> */}
        {/* </div> */}
        <div className="arrowDiv">
          <i className="leftArrow arrow"></i>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
