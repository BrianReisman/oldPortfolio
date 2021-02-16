import styled from "styled-components";

const StyledProjects = styled.div`
  * {
    /* border: 1px dotted red; */
  }

  
  :hover {
    h2 {
      color: tomato;
    }
  }

  box-sizing: border-box;
  width: 50%;
  border: 1px solid #eee;
  box-shadow: 1px 1px 3px;
  padding: 5px;
  margin: 10px;
  img {
    width: 80%;
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
    display: block;
    text-align: center;
  }
  .imgRow .img {
    /* flex: 1; */
  }
  .imgRow .textDiv {
    /* flex: 1; */
  }
`;
export default StyledProjects;
