import styled from "styled-components";

const StyledDisplay = styled.div`
  /* border: 1px solid tomato; */
  main {
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    position: relative; //for framer-motion
    overflow-x: hidden;
    /* overflow-y: hidden; */
    display: flex;
  }

  .arrows{
    border: 1px solid blue;
    z-index: 1;
    display: flex;
    justify-content: space-between;
  }
  .arrow {
    border: solid black;
    border-width: 0 10px 10px 0;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    /* border: 1px dotted green; */
    height: 40px;
    width: 40px;
  }
  .leftArrow {
    transform: rotate(135deg);
    --webkit-transform: rotate(135deg);
  }
  .rightArrow {
    transform: rotate(-45deg);
    --webkit-transform: rotate(-45deg);
  }
  .arrowDiv {
    //*for both arrows, specifically div+:hover.
    /* border: 2px solid purple; */
    padding: 15px;
    margin: 10px;
    :hover .rightArrow,
    :hover .leftArrow {
      border: solid tomato;
      border-width: 0 10px 10px 0;
    }
  }

  flex: 1 1 65%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .top {
    position: fixed;
    top: 0;
  }
`;
export default StyledDisplay;
