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
    box-sizing: border-box;
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
  ul{
    /* height: 20vh; */
  }
  p {
    font-size: 2.4rem;
  }
  ul{
    border: 1px dotted blue;
    /* height: 35%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1vw;
  }
  li {
    flex: 1 1 0;
    font-size: 1.5em;
    border-left: 4.5px solid tomato;
    margin: 15px 50px;
    padding-left: 1%;
    padding: 0 0.5% 0.75% 0.5%;


    /* overflow: hidden; */
    /* word-wrap: break-word; */
    /* line-height: 3em; */
    /* max-height: 2em; */
  }
  em {
    font-style: italic;
  }
  ul p {
    padding-left: 5px;
  }
`;
export default StyledNow;
