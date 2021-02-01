import styled from "styled-components";

const StyledNav = styled.div`
  /* border: 1px solid blue; */
  nav {
    /* border: 1px solid blue; */
  }
  nav ul {
    /* border: 1px solid blue; */
  }
  nav ul a {
    /* border: 1px solid blue; */
  }

  nav {
    margin: 8px;
    padding: 8px;
  /* padding: 5px */
  }
  nav ul {
    display: flex;
    justify-content: space-around;
  }
  a {
    font-size: 2rem;
    margin: 10px;
    padding: 10px 0;
    border-radius: 13px 0 13px 0;
    width: 100%;
    text-decoration: none;
    color: tomato;
    text-align: center;
    transition-duration: .15s;
    :hover {
      background-color: tomato;
      color: white;
    }
  }
  .active {
    background-color: tomato;
    color: white;
  }
`;
export default StyledNav;
