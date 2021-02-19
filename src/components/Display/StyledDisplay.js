import styled from "styled-components";

const StyledDisplay = styled.main`
  * {
    /* border: 1px solid tomato; */
  }
  box-sizing: border-box;

  flex: 1 1 65%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .top {
    position: fixed;
    top: 0;
  }

  main {
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    position: relative; //for framer-motion
    overflow-x: hidden;
    display: flex;
  }

  /* .arrows{
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
    padding: 15px;
    margin: 10px;
    :hover .rightArrow,
    :hover .leftArrow {
      border: solid tomato;
      border-width: 0 10px 10px 0;
    } */

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    height: 20vh;
  }
`;
export default StyledDisplay;
