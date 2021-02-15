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
    font-size: 6.4vw;
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
    /* font-size: 3.5vw; */
    line-height: 0.75;
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



  /* //? 1280 macBook 13inch*/
  @media (max-width: 1280px) {
    background-color: teal;
    /* .name {
      font-size: 5rem;
    }
    .lastAccent {
      font-size: 3rem;
      line-height: 0.55;
    }
    p {
      font-size: 1.6rem;
    } */
    code{
      font-size: 1.45rem;
    }
  }

  /*/ /* 975-1025 */
  @media (max-width: 950px) {
    background-color: white;
    /* .name {
      font-size: 4rem;
    }
    .lastAccent {
      font-size: 2.75rem;
      line-height: 0.45;
    }
    p {
      font-size: 1.4rem;
    } */
  }

  /*//* 768-800 */
  @media (max-width: 768px) {
    background-color: orange;
    /* .name {
      font-size: 3rem;
    }
    .lastAccent {
      font-size: 2.5rem;
      line-height: 0.25;
    }
    p {
      font-size: 1.2rem;
    } */
  }

  /*//* /<600 */
  @media (max-width: 600px) {
    background-color: red;
  }

  /* //*360 Samsung viewport portrail */
  @media (max-width: 360px){
    background-color: black;
  }
`;
export default StyledSideBar;
