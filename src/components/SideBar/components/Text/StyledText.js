// import { AnimationType } from "framer-motion/types/render/VisualElement/utils/animation-state";
import styled from "styled-components";

const StyledText = styled.div`
  * {
    font-family: "Times New Roman", Times, serif;
    box-sizing: border-box;
    /* border: .2px solid purple; */
  }
  .welcome {
    padding: 4% 4% 4% 8%;
  }
  .lastAccent {
    font-size: 3.5rem;
    line-height: 0.75;
  }
  .accent,
  .lastAccent {
    color: ${(props) => props.theme.accent};
  }
  .name {
    font-size: 6.8rem;
  }
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .name {
      font-size: 6.8rem;
      font-size: 8vw;
    }
  }




  /* @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    .name {
      font-size: 7.75vw;
      display: inline;
      :before {
        content: " ";
      }
    }
    .text {
      font-size: 2.75vw;
      margin-top: 7px;
    }
    .lastAccent {
      font-size: 4rem;
      line-height: 1vw;
    } */

  }
`;
export default StyledText;
