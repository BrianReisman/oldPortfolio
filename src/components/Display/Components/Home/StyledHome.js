import styled from "styled-components";
import headshot from "../../../../assets/images/BrianReisman-compressed.jpg";

const StyledHome = styled.div`
  /* * {
    border: 1px solid blue;
  } */
  flex: 1 1 65%;

  .motion {
    height: 100vh;
    width: 100%;
  }
  overflow-x: hidden;
  overflow-y: hidden;
  /* position: absolute; //*needed for framer motion */

  .photoContainer {
    background-image: url(${headshot});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: flex-end;
    align-items: center;
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
  /* .rightArrow{
    transform: rotate(135deg);
    --webkit-transform: rotate(135deg);
  } */
  .rightArrow {
    transform: rotate(-45deg);
    --webkit-transform: rotate(-45deg);
  }
  .arrowDiv {
    //*for both arrows, specifically div+:hover.
    /* border: 2px solid purple; */
    padding: 15px;
    margin: 10px;
    :hover .rightArrow {
      border: solid tomato;
      border-width: 0 10px 10px 0;
    }
  }
`;
export default StyledHome;
