import React from "react";

//
import StyledNow from "./StyledNow";
import Icons from "../Icons/Icons";

const Now = (props) => {
  return (
    <StyledNow>
      <div className="containerNowTop">
        <p className='inline'>Interested in what I've done? 👉</p>
        <span className="icons">
          <Icons />
        </span>
        <p>
          {" "}
          Here's what I'm <em>doing</em>. 👇
        </p>
      </div>

      <ul>
        <li>
          Finishing up my studies at a 6 month web dev and computer science
          program
        </li>
        <li>
          📘 Reading JavaScript: The Definitive Guide (currently on page 272,
          and just learned that in ES6 there is dynamic importing...?!)
        </li>
        {/* <li>Spending too much money adding to my 🍵tea tea library.</li> */}
        <li>
          30 hours into a 40 hours course reinforcing React (including
          functional + class based components, custom hooks, async Redux)
        </li>
        <li>
          Working on an awesome 9 person team building a job board for Jr.
          JavaScript developers
        </li>
        {/* <p>
          Thanks Derek Sivers for the idea to have this page... and start
          programming... and live life on my terms.
        </p> */}
      </ul>
      <ul>
        <p>Code is great but here are some other things I love:</p>
        <li>Theater</li>
        <li>Days off while traveling</li>
        <li>Muji Pens</li>
        <li>
          Day dreaming about when I can travel next, and fantasizing what a week
          (...or two 😀😍) would look like{" "}
          <a
            href="https://www.booking.com/hotel/ge/kazbegi-view.html"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          and{" "}
          <a
            href="https://www.alpacaexpeditions.com/inca-trail-expedition-5d4n/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </li>
        {/* <li>Reading Seth Godin's The Practice</li> */}
      </ul>

      <p>Here's what's next</p>
      <ul>
        <li>Typescript</li>
        <li>Testing</li>
        <li>PHP >>> For wordpress</li>
      </ul>
    </StyledNow>
  );
};

export default Now;
