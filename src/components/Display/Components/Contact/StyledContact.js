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

  .topContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3vw;
    p {
      font-size: ${(props) => props.theme.fonts.text};
    }
    .blueMic {
      color: blue;
    }
    .centerText {
      line-height: 3vw;
    }
    .icons {
      display: inline-block;
    }
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
  .inline {
    display: inline;
  }

  code {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    textarea {
      font-size: 1.5rem;
      height: 165px;
      width: 57vw;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .motion {
      height: 80vh;
    }

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
    code {
      display: block;
      position: fixed;
      bottom: 0;
      text-align: center;
      margin: 10px;
    }

    .topContainer {
      line-height: 30px;
      p {
        font-size: 1.5rem;
      }
      .centerText {
        line-height: 30px;
      }
      .icons {
        display: inline-block;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    textarea {
      height: 165px;
      width: 80vw;
    }
    input {
      width: 250px;
    }
    button {
      width: 50%;
    }
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    background-color: red;
  }
`;
export default StyledContact;
