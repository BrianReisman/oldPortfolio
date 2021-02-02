import styled from "styled-components";

const StyledDisplay = styled.div`
  /* border: 1px solid tomato; */
  main {
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    position: relative; //for framer-motion
    top: 0;
  }
  flex: 1 1 65%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .top {
    position: fixed;
    top: 0;
  }
`;
export default StyledDisplay;
