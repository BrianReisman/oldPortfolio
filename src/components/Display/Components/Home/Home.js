import React, { useEffect } from "react";
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
      <div className="photoContainer"></div>
    </StyledHome>
  );
};

export default Home;
