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

  .name {
    font-size: 6.8rem;
  }
  code {
    font-size: 1.6rem;
    position: fixed;
    bottom: 0;
    width: 35%;
    padding: 0 1% 0.5% 1%;
    text-align: center;
    :before {
      content: ">";
    }
  }
  p {
    font-size: 2vw;
  }
  .accent,
  .lastAccent {
    color: ${(props) => props.theme.accent};
  }
  .lastAccent {
    font-size: 3.5rem;
    line-height: 0.75;
  }

  /* WELCOME TEXT */
  s {
    text-decoration-color: ${(props) => props.theme.accent};
  }
  p a {
    text-decoration: none;
    color: ${(props) => props.theme.accent};
  }
  .welcome {
    padding: 4% 4% 4% 8%;
  }

  /* Media Queries */

  //1440+ antiquwhite.
  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    background-color: red;
    code:before {
      content: "1";
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    code:before {
      content: "2";
    }
    background-color: lightgoldenrodyellow;
  }
  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    code:before {
      content: "3";
    }
    background-color: antiquewhite;
  }
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    code:before {
      content: "4";
    }
    background-color: black;
  }
  @media (max-width: ${(props) => props.theme.breakpoints[5]}) {
    code:before {
      content: "5";
    }
    background-color: black;
  }
  /* @media (max-width: ${(props) => props.theme.breakpoints[6]}) {
    background-color: white;
  } */

  /* //* 1280 macBook 13inch*/
  @media (max-width: 1280px) {
    //!Teal
    .name {
      font-size: 6.8rem;
      font-size: 8vw;
    }
    code {
      font-size: 1.45rem;
    }
    ul a {
      font-size: 1.75rem;
      padding: 10px 1vw;
      margin: 10px 5px;
    }
  }

  /*//*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1024 */
  @media (max-width: 1024px) {
    .lastAccent {
      font-size: 4rem;
      line-height: 1vw;
    }

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
      width: 50%;
    }

    * {
      border: 2px solid gold;
    }
    width: 100%;
    height: 20vh;
    flex-direction: row;
    justify-content: space-between;
    .name {
      font-size: 5rem;
      display: inline;
      :before {
        content: " ";
      }
    }
    .welcome {
      padding: 2% 2% 2% 2%;
      margin: 0 0 2% 0;
    }
  }

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
