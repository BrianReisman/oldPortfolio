import styled from "styled-components";

const StyledContact = styled.div`
display: flex;
align-items: center;
  .motion {
    /* background-color: red; */
    height: 75vh; //! why not 100vh like other components in display?
    width: 100%;
  }
  position: absolute; //*needed for framer motion

  * {
    /* border: 1px solid tomato; */
  }

  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  p {
    font-size: ${(props) => props.theme.fonts.text};
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
      border: 1px solid tomato;
    }
  }
  textarea {
    height: 135px;
    width: 750px;
  }
  form {
    /* margin-top: 15vh; */
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
  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    textarea {
      height: 150px;
      width: 600px;
    }
  }
`;
export default StyledContact;
