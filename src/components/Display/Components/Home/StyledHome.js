import styled from "styled-components";
import headshot from "../../../../assets/images/BrianReisman-compressed.jpg";

const StyledHome = styled.div`
  * {
    /* border: 1px solid blue; */
  }
  /* flex: 1 1 65%; */

  .motion {
    height: 100vh;
    width: 100%;
  }
  overflow-x: hidden;
  overflow-y: hidden;
  /* position: absolute; //*needed for framer motion */

  .photoContainer {
    background-image: url(${headshot});
    background-position: center center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* .arrow {
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
  } */
  /* .arrowDiv { */
  //*for both arrows, specifically div+:hover.
  /* border: 2px solid purple;
    padding: 15px;
    margin: 10px;
    :hover .rightArrow,
    :hover .leftArrow {
      border: solid ${(props) => props.theme.accent};
      border-width: 0 10px 10px 0;
    }
  } */

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .photoContainer {
      background-position: 25%;
    }
  }
  @media (max-width: 768px) {
    .photoContainer {
      background-position: center;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .motion {
      height: 80vh;
    }
    .photoContainer {
      background-size: cover;
      background-position: 50% 35%;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    .photoContainer {
      background-size: cover;
      /* background-position: center; */
    }

}

`;
export default StyledHome;
