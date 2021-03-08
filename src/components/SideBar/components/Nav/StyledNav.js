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
    * {
      /* border: 1px dotted blue; */
    }
    width: 50%;
    align-self: center;
    margin: 5px;
    padding: 0px;

    ul {
      height: 100%;
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      a {
        width: 100%;
        font-size: 1.6rem;
        margin: 5px;
        padding: 5px 5px;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    *{

    /* border: 1px solid black; */
    }
    width: 385px;
    height: 40px;
    /* margin-bottom: 10px; */
    ul {
    }

    ul a {
        font-size: 1.4rem;
        padding: 3px 3px;
      /* border: 1px solid black; */

    }
  }
`;
export default StyledNav;
