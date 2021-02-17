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
  ol{
    list-style-type: upper-roman;
    list-style-position: inside;
  }
  h1{
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
  }
  .containerNowTop {
    text-align: center;
    p {
      margin: 0.5%;
    }
    .inline {
      display: inline-block;
    }
    .icons {
      display: inline-block;
    }
  }
  p {
    font-size: 2rem;
  }
  ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      padding-left: 7px;
    }
    li {
      flex: 1 1 0;
      font-size: 1.5em;
      border-left: 4.5px solid ${(props) => props.theme.accent};
      margin: 15px 50px;
      padding: 0 0.5% 0.75% 0.5%;
    }
  }
  em {
    font-style: italic;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    ol p {
      margin: 0;
      font-size: 2rem;
    }
    ol li {
      margin: 15px 50px;
      font-size: 1.35em;
    }
  }
`;
export default StyledNow;
