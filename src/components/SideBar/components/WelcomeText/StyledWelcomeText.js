import styled from "styled-components";

const StyledWelcomeText = styled.div`
  /* border: 1px solid blue; */
  .name {
    font-size: 4.5rem;
  }
  .accent,
  .lastAccent {
    color: tomato;
  }
  .lastAccent {
    font-size: 3.5rem;
    line-height: 0.25;
  }
  p {
    font-size: 1.2rem;
  }
  s {
    text-decoration-color: tomato;
  }
`;
export default StyledWelcomeText;
