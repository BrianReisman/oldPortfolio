import styled from "styled-components";

const StyledNav = styled.nav`
  * {
    font-family: "Times New Roman", Times, serif;
    /* border: 2px solid purple; */
  }
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
        color: ${(props) => props.theme.backgroundColor};
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

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    ul a {
      font-size: 2.5vw;
      padding: 10px 1vw;
      margin: 10px 5px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    width: 25%;
    margin: 0;
    padding: 0;
      /* border: 1px solid blue; */
    *{
      /* border: 1px solid blue; */
    }
    ul {
    margin: 0 3vw 0 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    ul a {
      font-size: 1.6rem;
      margin: 5px;
      padding: 5px 5px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
      margin-right: 20px;
    ul {
    }

    border: 1px solid black;
    ul a {
      border: 1px solid black;
      width: 100%;
    }
  }
`;
export default StyledNav;
