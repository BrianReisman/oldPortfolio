import styled from "styled-components";
import headshot from "../../../../assets/images/BrianReismanlgcropped.jpg";

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

  .photoContainer {
    background-image: url(${headshot});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* :after{
      content: '➡';
    } */
  }
  .arrow {
    border: solid black;
    border-width: 0 10px 10px 0;
    display: inline-block;
    padding: 10px;
    margin: 10px;
  }
  /* .rightArrow{
    transform: rotate(135deg);
    --webkit-transform: rotate(135deg);
  } */
  .leftArrow {
    transform: rotate(-45deg);
    --webkit-transform: rotate(-45deg);
  }
  .arrowDiv {
    //*for both arrows, specifically div+:hover.
    /* border: 2px solid purple; */
    padding: 15px;
    margin: 10px;
    :hover .leftArrow {
      border: solid red;
      border-width: 0 10px 10px 0;
    }
  }
`;
export default StyledHome;
