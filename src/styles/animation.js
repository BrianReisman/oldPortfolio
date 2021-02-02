export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.75,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.25,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "linear", //anticipate
  duration: 0.75,
};

export const pageStyle = {
  position: "absolute",
}