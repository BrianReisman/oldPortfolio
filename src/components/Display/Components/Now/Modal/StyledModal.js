import styled from "styled-components";

const StyledModal = styled.div`
  background-color: blue;
  border: 1px solid tomato;
  box-sizing: border-box;
  z-index: 1;

  width: 100%;
  height: 100%;
  .modalOff {
    display: none;
  }
  .modalOn {
    display: block;
  }
`;
export default StyledModal;
