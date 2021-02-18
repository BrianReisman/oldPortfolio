import styled from "styled-components";

const StyledNow = styled.div`
  .motion {
    position: absolute; //*needed for framer motion
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    /* border: 1px solid blue; */
    height: 100vh;
    width: 100%;
    padding: 25px 0;
  }

  * {
    /* border: 1px solid tomato; */
  }
span{
  font-size: 1.24rem;
}
  h1 {
    font-size: 2.4rem;
    /* font-weight: bold; */
    text-align: center;
  }
  .containerNowTop {
    text-align: center;
    width: 100%;
    /* margin-bottom: 2vh; */
    /* position: fixed; */
    /* bottom: 0; */
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
      font-size: 1.5rem;
      margin: 0px 0px 0px 50px;
    }
    li {
      /* border: 1px solid blue; */
      width: 70%;
      font-style: italic;
      font-weight: lighter;
      font-size: 1.7rem;
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
    ol {
      p {
      }
    }
    h1 {
      font-size: 2rem;
    }
    .containerNowTop {
      p {
        /* margin: 0.5%;
        font-size: 1.75rem; */
      }
    }
  }
`;
export default StyledNow;
