import styled from "styled-components";

const StyledContact = styled.div`
  /* * {
  } */
 

  .motion {
    /* background-color: red; */
    height: 90vh; //! why can't this be 100vh like other display components?
    width: 100%;
  }
  position: absolute; //*needed for framer motion

  /* border: 1px solid tomato; */
  height: 100vh;
  width: 100%;
  box-sizing: border-box;


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
