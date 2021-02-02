import styled from "styled-components";

const StyledProjects = styled.div`
  .motion {
    height: 100vh;
    width: 100%;
  }
  position: absolute; //*needed for framer motion
  /*//! overflow-x: hidden;
  overflow-y: hidden; */

  height: 100vh;
  width: 100%;
  /* background-color: black; */
  /* border: 3px solid tomato; */
  .projectRows {
    display: flex;
    justify-content: center;
  }
  .projectRows {
    display: flex;
  }
  h2 {
    font-size: 2.4rem;
  }
  .grid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export default StyledProjects;
