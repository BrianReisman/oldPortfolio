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



/* //!MOVING ELSEWHERE TO ACTUAL BREAKPOInTS */
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    code:before {
      content: "4";
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[5]}) {
    code:before {
      content: "5";
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[6]}) {
    code: before {
      content: "6";
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[7]}) {
    code: before {
      content: "7";
    }
  }

  /*//*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1024 */
  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    * {
    }
    width: 100%;
    height: 20vh;
    flex-direction: row;
    justify-content: space-between;

    nav ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    ul a {
      font-size: 1.6rem;
      margin: 5px;
      padding: 5px 5px;
      border-radius: 13px 0 13px 0;
      width: 100%;
    }
  }

  /* //!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

  /*//* 768 --- TOP */
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
