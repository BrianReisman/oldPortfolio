import styled from "styled-components";

const StyledNav = styled.div`
  a {
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
  .active {
    background-color: tomato;
    color: white;
  }
  :hover a.active {
    opacity: 1;
  }
`;
export default StyledNav;
