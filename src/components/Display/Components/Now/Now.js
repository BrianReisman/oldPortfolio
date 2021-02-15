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
            Finishing up my studies at a 6 month full-time full stack web
            developement program that I'm treating like grad school.
          </li>
          <li>
            Reading JavaScript: The Definitive Guide (currently on page 276, and
            just started learning about the Map class. Array? Object? What <em>are</em> you?!)
          </li>
          {/* <li>
            Working on an awesome 9 person team building a job board for Jr.
            JavaScript developers
          </li> */}
          <li>
            Wireframing my first solo CRUD app! A travel budget calculator Link
            coming soon...
          </li>
          {/* <p>
          Thanks Derek Sivers for the idea to have this page... and start
          programming... and live life on my terms.
        </p> */}
          {/* <li>Reading Seth Godin's The Practice</li> */}
        </ul>
        <ul>
          <p>Code is great but here are some other things I love:</p>
          <li>Theater</li>
          <li>
            Travel + Days off while traveling (Frantasizing about{" "}
            <a
              href="https://www.alpacaexpeditions.com/inca-trail-expedition-5d4n/"
              target="_blank"
              rel="noreferrer"
            >
              <em>this</em>
            </a>
            !)
          </li>
          <li>Tea (especially with toasted rice or black pepper)</li>
          <li>Muji Pens</li>
        </ul>
        <ul>
          <p>What's next:</p>
          <li>Introducing myself to stictly typed languages with Typescript</li>
          <li>Deepening my testing knowledge with Jest</li>
          <li>Building on my backend stack with Next.js</li>
        </ul>

        {/* <ul>
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
          </ul> */}
        {/* </ul> */}
      </motion.div>
    </StyledNow>
  );
};

export default Now;

/*
SEVEN[SHORT]  QUESTIONS ANSWERED IN 7 WORDS (or less)
?1. What are you doing now? Treating 6 month bootcamp like grad school
?2. What's next? find awesome job + teach myself TDD + Typescript
3. Any side projects going on for fun? What are you working on for fun? <a figma>Wireframe</a> = target. where it's at >>> ReadyBudgetGo.com.
?4. What are you currently stumped on/about? Recreating useState in vanilla JavaScript. <a github>help</a>!
5. What are you looking for in your next role? Remote, kind (balanaced?) culture, that /facilitates/values/emphasis(zing) on learning/growing
?6. Why tech? Teamwork, constant learning, making things [that work/with purpose/to help/]. 
?7. You started in theater?!/You're background is acting in theater?//how does your background in theater Think JavaScript syntax is weird/confusing? Try Shakespeare.
Closures?Hoisting?Redux?Aswitch statement?/itorators/generators?
*/
