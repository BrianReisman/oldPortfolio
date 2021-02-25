// import { AnimationType } from "framer-motion/types/render/VisualElement/utils/animation-state";
import styled from "styled-components";

const StyledText = styled.div`
  * {
    font-family: "Times New Roman", Times, serif;
    box-sizing: border-box;
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

  code {
    font-family: monospace;
    font-size: 1.6rem;
    position: fixed;
    bottom: 0;
    width: 35%;
    padding: 0 1% 0.5% 1%;
    text-align: center;
    :before {
      content: ">";
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    code:before {
      content: "1";
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
    .name {
      font-size: 6.8rem;
      font-size: 8vw;
    }
    code {
      font-size: 1.5vw;
    }
    code:before {
      content: "2";
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    /* position: fixed; */
    /* top: 0; */

    width: 100%;
    .welcome {
      text-align: center;
      padding: 0;
    }
    .name {
      display: inline;
      font-size: 8vw;
      :after {
        content: " ";
      }
    }
    .text {
      font-size: 3vw;
    }
    .lastAccent {
      font-size: 4rem;
      line-height: 1vw;
    }
    code {
      display: none;
      :before {
        content: "3";
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    code:before {
      content: "4";
    }
    background-color: red;
  }
  @media (max-width: ${(props) => props.theme.breakpoints[5]}) {
    code:before {
      content: "5";
    }

    background-color: black;
  }
  @media (max-width: ${(props) => props.theme.breakpoints[6]}) {
    code:before {
      content: "6";
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints[7]}) {
    code:before {
      content: "7";
    }
  }
`;
export default StyledText;
