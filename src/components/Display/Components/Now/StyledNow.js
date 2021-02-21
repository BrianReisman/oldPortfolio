import styled from "styled-components";

const StyledNow = styled.div`
  .motion {
    position: absolute; //*needed for framer motion
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: 25px 0;
  }

  * {
    /* border: 1px solid tomato; */
  }
  .NowTop p {
    margin-top: 1vh;
    text-align: center;
    font-size: 1.2rem;
  }

  span {
    font-size: 1.24rem;
  }
  h2 {
    font-size: 2.4rem;
    text-align: center;
  }
  .containerNowTop {
    text-align: center;
    width: 100%;
    p {
      margin: 0.5%;
      font-size: 2rem;
    }
    .inline {
      display: inline-block;
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-position: inside;
    p {
      margin: 0px 0px 0px 50px;
      font-style: italic;
      font-size: 1.7rem;
    }
    li {
      font-size: 1.4rem;
      /* border: 1px solid blue; */
      width: 70%;
      border-left: 3px solid ${(props) => props.theme.accent};
      /* border-left: 15px solid salmon; */
      /* border-top: 15px solid tomato; */
      margin: 15px 50px;
      padding: 0.75% 0 0.25% 1vw;
      /* background-color: ${(props) => props.theme.highlight}; */
    }
  }
  em {
    font-style: italic;
  }
  .link {
    color: ${(props) => props.theme.accent};
  }
  a {
    text-decoration: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    ol {
      p {
        font-size: 1.4rem;
        /* margin: 0px 50px 0px 75px; */
      }
      li {
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    * {
      box-sizing: border-box;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {

    .motion {
      height: 80vh;
    }
    * {
      line-height: 12px;
      /* border: 1px solid blue; */
    }
    ol {

      p {
        font-size: 1rem;
      }
    }
    .NowTop h2,
    .NowTop p {
      line-height: 20px;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
export default StyledNow;
