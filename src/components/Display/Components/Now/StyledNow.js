import styled from "styled-components";

const StyledNow = styled.div`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  position: absolute; //*needed for framer motion
  .motion {
    box-sizing: border-box;
    /* border: 1px solid blue; */
    height: 100vh;
    width: 100%;
  }

  * {
    /* border: 1px solid tomato; */
  }

  h1 {
    font-size: 2.4rem;
    /* font-weight: bold; */
    text-align: center;
  }
  .containerNowTop {
    text-align: center;
    p {
      margin: 0.5%;
      font-size: 2rem;
    }
    .inline,
    .icons {
      display: inline-block;
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: upper-roman;
    list-style-position: inside;
    p {
      /* border: 1px solid burlywood; */
      font-size: 1.7rem;
      margin: 0px 50px 0px 75px;
    }
    li {
      /* border: 1px solid blue; */
      font-size: 1.5em;
      border-left: 4.25px solid ${(props) => props.theme.accent};
      margin: 15px 50px;
      padding: 0.5% 0.5% 0.75% 0.5%;
      background-color: ${(props) => props.theme.highlight};
    }
  }
  em {
    font-style: italic;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    ol {
      p {
        /* border: 1px solid burlywood; */
        font-size: 1.4rem;
        margin: 0px 50px 0px 75px;
      }
      li {
        font-size: 1.4em;
        border-left: 4.25px solid ${(props) => props.theme.accent};
        margin: 15px 50px;
        padding: 0 0.5% 0.75% 0.5%;
        background-color: ${(props) => props.theme.highlight};
      }
    }
    h1 {
      font-size: 2rem;
    }
    .containerNowTop {
      p {
        margin: 0.5%;
        font-size: 1.75rem;
      }
    }
  }
`;
export default StyledNow;
