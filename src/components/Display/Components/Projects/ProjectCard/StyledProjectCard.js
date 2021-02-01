import styled from "styled-components";

const StyledProjects = styled.div`
  /* :hover {
    h2 {
      color: tomato;
    }
  } */

  box-sizing: border-box;
  /* height: 40vh; */
  width: 50%;
  border: 1px solid #eee;
  box-shadow: 2px 3px 10px;
  padding: 5px;
  * {
    /* border: 1px dotted red; */
  }
  img {
    width: 100%;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 5px;
    transition-duration: .1s;
  }
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.6rem;
    margin: 0 5px;
  }

  .imgRow {
    display: flex;
  }
  .imgRow .img {
    flex: 1;
  }
  .imgRow .textDiv {
    flex: 1;
  }
`;
export default StyledProjects;
