// The browser will need to be refreshed since it in injected into the app in index.js which is only rendered once.

// keys are CSS properties
// values are values for those properties

export const theme = {
  accent: "tomato",
  backgroundColor: "antiquewhite",
  breakpoints: {
    1: "1440px" /* 1440 - desktop */,
    2: "1280px" /* 1280 - laptop */,
    3: "1024px" /* 1024 - tablet landscape */,
    4: "768px" /* 768  - tablet vertical/mobile landscape*/,
    5: "425px" /* 425 -Mobile Large, stack*/,
    6: "375px" /* 375 -Mobile Med, stack*/,
    7: "320px" /* 320 -Mobile Small, stack*/,
  },
};

// TWO ways to use
//background-color: ${props => props.theme.bkgcolor};
//border: 10px solid ${({theme}) => theme.text};
