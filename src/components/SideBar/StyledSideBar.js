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
  }
  p {
    font-size: 2rem;
    font-size: 2vw;
  }
  .lastAccent {
    font-size: 3.5rem;
    /* font-size: 3.5vw; */
    line-height: 0.75;
  }

  /* //* 1280
  @media (max-width: 1280px) {
    .name {
      font-size: 5rem;
    }
    .lastAccent {
      font-size: 3rem;
      line-height: 0.55;
    }
    p {
      font-size: 1.6rem;
    }
  }

  /*//* 975-1025 */
  /* @media (max-width: 950px) {
    .name {
      font-size: 4rem;
    }
    .lastAccent {
      font-size: 2.75rem;
      line-height: 0.45;
    }
    p {
      font-size: 1.4rem;
    }
  } */

  /*//* 768-800 */
  /* @media (max-width: 768px) {
    .name {
      font-size: 3rem;
    }
    .lastAccent {
      font-size: 2.5rem;
      line-height: 0.25;
    }
    p {
      font-size: 1.2rem;
    }
  } */

  /*//* /<600 */
  @media (max-width: 600px) {
    background-color: red;
  }
`;
export default StyledSideBar;
