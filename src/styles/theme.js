// The browser will need to be refreshed since it in injected into the app in index.js which is only rendered once.

// keys are CSS properties
// values are values for those properties

export const theme = {
  accent: 'tomato',

/* 1440 - desktop */
/*//? 1280 - laptop */
/* 1024 - tablet landscape */
/* 768  - tablet vertical/mobile landscape*/
/* 425 -Mobile Large, stack*/
/* 375 -Mobile Med, stack*/
/* 320 -Mobile Small, stack*/
  breakpoints: {
    1: '1440px',
    2: '1280px',
    3: '1024px',
    4: '768px',
    5: '425px',
    6: '375px',
    7: '320px',

  }

};


// TWO ways to use
//background-color: ${props => props.theme.bkgcolor};
//border: 10px solid ${({theme}) => theme.text};
