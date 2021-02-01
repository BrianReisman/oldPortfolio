import styled from "styled-components";

const StyledNow = styled.div`
  /* border: 1px solid tomato; */
  padding: 5px;
  height: 100%;
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
    border-left: 4px solid tomato;
    margin: 15px 50px;
    /* padding-left: 1%; */
    padding: .75% .5% .75% .5%;
  }
  .containerNowTop {
    text-align: center;
  }
  .containerNowTop p {
    margin: 0.5%;
  }
  em{
    font-style: italic;
  }
  ul p {
    padding-left: 5px;
  }
`;
export default StyledNow;
