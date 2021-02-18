// import { AnimationType } from "framer-motion/types/render/VisualElement/utils/animation-state";
import styled from "styled-components";

const StyledText = styled.div`
  .welcome{
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
`;
export default StyledText;
