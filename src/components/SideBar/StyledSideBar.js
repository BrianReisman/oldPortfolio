import styled from "styled-components";

const StyledSideBar = styled.div`
  * {
    /* border: 1px solid ${(props) => props.theme.accent}; */
  }
  background-color: ${(props) => props.theme.backgroundColor};
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  p {
    font-size: 2vw;
  }

  /* WELCOME TEXT */
  s {
    text-decoration-color: ${(props) => props.theme.accent};
  }
  p a {
    text-decoration: none;
    color: ${(props) => props.theme.accent};
  }

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    * {
    }
    width: 100%;
    height: 20vh;
  }

  /* //!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
justify-content: space-space-around;
    height: 20vh;

}
  /*//*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1024 */



  @media (max-width: 768px) {
    //!Orange
    ul a {
      width: 75%;
    }
    code {
      font-size: 1.25rem;
    }
  }
`;
export default StyledSideBar;
