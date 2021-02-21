import styled from "styled-components";

const StyledProjects = styled.div`
  .motion {
    height: 100vh;
    width: 100%;
  position: absolute; //*needed for framer motion
  }
  /*//! overflow-x: hidden;
  overflow-y: hidden; */

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

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .motion {
      height: 80vh;
    }
    /* background-color: red; */
  }
`;
export default StyledProjects;
