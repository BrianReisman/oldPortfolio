import styled from "styled-components";

const StyledWelcomeText = styled.div`
  /* border: 1px solid blue; */
  padding: 4% 4% 4% 8%;
  .name {
    font-size: 7rem;
  }
  .accent,
  .lastAccent {
    color: tomato;
  }
  .lastAccent {
    font-size: 3.5rem;
    line-height: 0.75;
  }
  p {
    font-size: 2rem;
  }
  s {
    text-decoration-color: tomato;
  }
  a {
    text-decoration: none;
    color: tomato;
  }
`;
export default StyledWelcomeText;
