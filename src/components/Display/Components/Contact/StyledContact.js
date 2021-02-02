import styled from "styled-components";

const StyledContact = styled.div`
  /* * {
    border: 1px solid tomato;
  } */
  .motion {
    height: 100vh;
  }
  overflow-x: hidden;
  overflow-y: hidden;



  height: 100%;
  width: 100%;
  p {
    font-size: 1.6rem;
  }
  a {
    color: tomato;
    text-decoration: none;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  textarea {
    margin: 10px;
    padding: 10px;
    /* border: 1px solid blue; */
    outline: none;
    :focus {
      border: 3px solid tomato;
    }
  }
  .topContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
    line-height: 35px;
  }
  .icons {
    display: inline-block;
  }
  .inline {
    display: inline;
  }
`;
export default StyledContact;
