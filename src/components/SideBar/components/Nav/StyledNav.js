import styled from "styled-components";

const StyledNav = styled.nav`
  /* * {
    border: 2px solid purple;
  } */
  margin: 8px;
  padding: 8px;
  ul {
    display: flex;
    justify-content: space-around;
    a {
      font-size: 2rem;
      margin: 10px;
      padding: 10px 0;
      border-radius: 13px 0 13px 0;
      width: 100%;
      text-decoration: none;
      color: ${(props) => props.theme.accent};
      text-align: center;
      transition-duration: 0.172s;
      :hover {
        background-color: ${(props) => props.theme.accent};
        opacity: 0.7;
        color: ${props => props.theme.backgroundColor};
        &.active {
          opacity: 1;
        }
      }
    }
    .active {
      background-color: ${(props) => props.theme.accent};
      color: white;
    }
  }


  /* //* 1280 macBook 13inch*/
  @media (max-width: 1280px) { //!Teal
    ul a {
      font-size: 1.75rem;
      padding: 10px 1vw;
      margin: 10px 5px;
    }
  }

  /*//* 1024 */
  @media (max-width: 1024px) { //!seagreen
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

  /*//* 768 --- TOP */
  @media (max-width: 768px) { //!Orange
    ul a {
      width: 75%;
    }
  }

  /*//* 600 */
  @media (max-width: 600px) { //!red
  }

  /* //*360 Samsung viewport portrail */
  @media (max-width: 360px) { //!black
  }

`;
export default StyledNav;
