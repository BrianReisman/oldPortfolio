import styled from "styled-components";

const StyledContact = styled.div`
  .motion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; //! why not 100vh like other components in display?
    width: 100%;
    box-sizing: border-box;
    position: absolute; //*needed for framer motion
    padding-bottom: 15vh;
  }

  * {
    /* border: 1px solid tomato; */
  }

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
    outline: none;
    :focus {
      border: 0.5px solid #bbb;
    }
  }
  input {
    font-size: 1.15rem;
    /* height: 165px; */
    width: 250px;
  }
  textarea {
    font-size: 1.5rem;
    height: 165px;
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
      font-size: 1.5rem;
      height: 165px;
      width: 57vw;
    }
  }
`;
export default StyledContact;
