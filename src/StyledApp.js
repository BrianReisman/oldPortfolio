import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    flex-direction: column;
    height: 100vh;
  }
`;
export default StyledApp;
