import styled from "styled-components";

const StyledNow = styled.div`
  .motion {
    height: 100vh;
    width: 100%;
    /* border: 1px solid tomato; */
  }
position: absolute; //*needed for framer motion

  * {
    /* border: 1px solid tomato; */
  }
  /* padding: 5px; */
  height: 100vh;
  width: 100%;
  .icons {
    display: inline-block;
  }
  .inline {
    display: inline-block;
  }
  p {
    font-size: 2.4rem;
  }
  li {
    font-size: 1.6rem;
    border-left: 4.5px solid tomato;
    margin: 15px 50px;
    /* padding-left: 1%; */
    padding: 0.75% 0.5% 0.75% 0.5%;
  }
  .containerNowTop {
    text-align: center;
  }
  .containerNowTop p {
    margin: 0.5%;
  }
  em {
    font-style: italic;
  }
  ul p {
    padding-left: 5px;
  }
`;
export default StyledNow;
