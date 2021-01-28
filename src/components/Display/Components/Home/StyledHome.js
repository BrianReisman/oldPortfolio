import styled from "styled-components";
import headshot from "../../../../assets/images/BrianReismanlgcropped.jpg";

const StyledHome = styled.div`
  /* border: 1px solid blue; */
  flex: 1 1 65%;

  .photoContainer {
    background-image: url(${headshot});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export default StyledHome;
