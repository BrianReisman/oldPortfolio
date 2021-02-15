import styled from "styled-components";

const StyledSideBar = styled.div`
  * {
    /* border: 1px solid tomato; */
  }
  background-color: antiquewhite;

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
  }
  p {
    font-size: 2rem;
    font-size: 2vw;
  }
  .accent,
  .lastAccent {
    color: tomato;
  }
  .lastAccent {
    font-size: 3.5rem;
    line-height: 0.75;
  }

  /* WELCOME TEXT */
  s {
    text-decoration-color: tomato;
  }
  p a {
    text-decoration: none;
    color: tomato;
  }
  .welcome {
    padding: 4% 4% 4% 8%;
  }

  /* NAV */
  nav {
    margin: 8px;
    padding: 8px;
  }
  nav ul {
    display: flex;
    justify-content: space-around;
  }
  ul a {
    font-size: 2rem;
    margin: 10px;
    padding: 10px 0;
    border-radius: 13px 0 13px 0;
    width: 100%;
    text-decoration: none;
    color: tomato;
    text-align: center;
    transition-duration: 0.172s;
    :hover {
      background-color: tomato;
      color: white;
      opacity: 0.75;
    }
  }
  ul .active {
    background-color: tomato;
    color: white;
  }
  :hover ul a.active {
    opacity: 1;
  }

  /* Media Queries */
  /* Media Queries */
  /* Media Queries */
  /* Media Queries */
  /* Media Queries */
  /* Media Queries */
  /* Media Queries */
  /* Media Queries */
  /* Media Queries */

  @media (max-width: 1280px) {
    background-color: white;
  }
  @media (max-width: 1025px) {
    background-color: antiquewhite;
  }
  @media (max-width: 768px) {
    background-color: white;
  }
  @media (max-width: 600px) {
    background-color: antiquewhite;
  }
  @media (max-width: 360px) {
    background-color: white;
  }

  /* //* 1280 macBook 13inch*/
  @media (max-width: 1280px) { //!Teal
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

  /*//* 1025 */
  @media (max-width: 1025px) { //!seagreen
    .lastAccent {
      font-size: 4rem;
      line-height: 1vw;
    }

    nav ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* nav item text smaller */
    ul a {
      font-size: 1.6rem;
      margin: 5px;
      padding: 5px 5px;
      border-radius: 13px 0 13px 0;
      width: 50%;
    }
  }

  /*//* 768 */
  @media (max-width: 768px) { //!Orange
    ul a {
      width: 75%;
    }
    code {
      font-size: 1.25rem;
    }

  }

  /*//* 600 */
  @media (max-width: 600px) { //!red
  }

  /* //*360 Samsung viewport portrail */
  @media (max-width: 360px) { //!black
  }
`;
export default StyledSideBar;
