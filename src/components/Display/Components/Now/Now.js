import React from "react";
import { motion } from "framer-motion";

//
import StyledNow from "./StyledNow";
import Icons from "../Icons/Icons";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../../../styles/animation";

const Now = (props) => {
  return (
    <StyledNow>
      <motion.div
        style={pageStyle}
        className="motion"
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="containerNowTop">
          <p className="inline">Interested in what I've done? 👉</p>
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
            Finishing up my studies at a 6 month web dev program that I treated
            like grad school.
          </li>
          <li>
            Reading JavaScript: The Definitive Guide (currently on page 272, and
            just learned that in ES6 there is dynamic importing...?!) 30 hours
            into a 40 hours course reinforcing React (including functional +
            class based components, custom hooks, async Redux)
          </li>
          <li>
            Working on an awesome 9 person team building a job board for Jr.
            JavaScript developers
          </li>
          <li>Wireframing my first solo CRUD app</li>
          {/* <p>
          Thanks Derek Sivers for the idea to have this page... and start
          programming... and live life on my terms.
        </p> */}
        </ul>
        <ul>
          <p>Code is great but here are some other things I love:</p>
          <li>Theater</li>
          <li>Any tea with toasted rice</li>
          <li>Days off while traveling</li>
          <li>Muji Pens</li>
          <li>
            Fantasizing about what a week (...or 2) would be like{" "}
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

        <ul>
          <p>What's next:</p>
          <li>Introducing myself to stictly typed languages with Typescript</li>
          <li>Deepending my testing knowledge with Jest</li>
        </ul>
      </motion.div>
    </StyledNow>
  );
};

export default Now;

/*
SIX QUESTIONS ANSWERED IN 6 WORDS (or less)
1. What's next? Learn testing + typescript + {{?finding awesome job.?}}
2. Any side projects going on for fun? What are you working on for fun? <a figma>Wireframe</a> = target. where it's at >>> ReadyBudgetGo.com.
3. Problem I'm stuck on. Recreating useState in vanilla JavaScript. <a github>help</a>!
4. What are you looking for in your next role? Remote, kind (balanaced?) culture, that /facilitates/values/emphasis(zing) on learning/growing
5. Why tech? Teamwork, making, constant learning, 
6. You started in theater?! From custom costumes to slinging code. // Think JavaScript is weird syntax? Try Shakespeare. // Confused by JavaScript? Try Shakespeare.
*/
