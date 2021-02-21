import styled from "styled-components";

const StyledContact = styled.div`
  .motion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
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
    * {
    }
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 1%; */
    line-height: 3vw;
  }
  .blueMic {
    color: blue;
  }
  .centerText {
    line-height: 3vw;
    /* border: 2px dotted turquoise; */
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
    .motion {
      height: 80vh;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    textarea {
      font-size: 1.2rem;
      height: 165px;
      width: 80vw;
    }
    input {
      font-size: 1rem;
      /* height: 165px; */
      width: 250px;
    }
    .topContainer {
      line-height: 4vw;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    textarea {
      height: 165px;
      width: 80vw;
    }
    input {
      /* height: 165px; */
      width: 250px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    background-color: red;
  }
`;
export default StyledContact;
