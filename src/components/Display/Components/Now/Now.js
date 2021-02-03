import React from "react";
import { motion } from "framer-motion";

//
import StyledNow from "./StyledNow";
import Icons from "../Icons/Icons";
import { pageVariants, pageTransition } from "../../../../styles/animation";

const Now = (props) => {
  return (
    <StyledNow>
      <motion.div
        className="motion"
        exit="out"
        animate="in"
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* <div className="containerNowTop">
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
            just learned that in ES6 there is dynamic importing...?!)
          </li>
          <li>
            Working on an awesome 9 person team building a job board for Jr.
            JavaScript developers
          </li>
          <li>Wireframing my first solo CRUD app</li>
          <p>
          Thanks Derek Sivers for the idea to have this page... and start
          programming... and live life on my terms.
        </p>
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
          <li>Reading Seth Godin's The Practice</li>
        </ul>
        <ul>
          <p>What's next:</p>
          <li>Introducing myself to stictly typed languages with Typescript</li>
          <li>Deepending my testing knowledge with Jest</li>
        </ul> */}

        <ul>
          <h1>7 Questions Answered In 7 Words (or less)</h1>
          <ul>
            <li>
              1. <strong>What are you doing now?</strong> Treating 6 month
              bootcamp like grad school
            </li>
            <li>
              2. What's next? Teaching myself TDD and finding an awesome job.
            </li>
            <li>
              3. Any side projects you're working onfor fun? My target >
              Wireframe. My progress > ReadyBudgetGo.com.
            </li>
            <li>
              4. Problem I'm stuck on: Recreating useState in vanilla
              JavaScript. <a github>help</a>!
            </li>
            <li>
              5. What are you looking for in your next role? Remote, kind
              (balanaced?) culture, that /facilitates/values/emphasis(zing) on
              learning/growing
            </li>
            <li>6. Why tech? Teamwork, making, constant learning,</li>
            <li>
              7. You started in theater?! Think JavaScript syntax is weird? Try
              Shakespeare.
            </li>
          </ul>
        </ul>
      </motion.div>
    </StyledNow>
  );
};

export default Now;

/*
SIX/SEVEN QUESTIONS ANSWERED IN 6/7 WORDS (or less)
?1. What are you doing now? Treating 6 month bootcamp like grad school
2. What's next? Learn testing + typescript + {{?finding an awesome job.?}} //* find an awesome job + teach myself TDD/Typescript
3. Any side projects going on for fun? What are you working on for fun? <a figma>Wireframe</a> = target. where it's at >>> ReadyBudgetGo.com.
4. Problem I'm stuck on: Recreating useState in vanilla JavaScript. <a github>help</a>!
5. What are you looking for in your next role? Remote, kind (balanaced?) culture, that /facilitates/values/emphasis(zing) on learning/growing
6. Why tech? Teamwork, making, constant learning, 
7. You started in theater?! From custom costumes to slinging code. //?Think JavaScript syntax is weird? Try Shakespeare.
*/
