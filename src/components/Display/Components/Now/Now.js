import React from "react";
import { motion } from "framer-motion";

//
import StyledNow from "./StyledNow";
import Icons from "../Icons/Icons";
import { pageVariants, pageTransition } from "../../../../animation/animation";

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

        <h1>7 questions <span>because who has time for <em>21?!</em></span><br/> answered in 7 words (or less)</h1>
        {/* <h1>7 Questions Answered In 7 Words (or less)</h1> */}

        <ol>
          <li>
            <strong>What are you doing now?</strong>
          </li>
          <p>Treating 6 month bootcamp like grad school</p>
          <li>Why tech?</li>
          {/* <li>What are you looking forward to in the tech industry?</li> */}
          <p>
                Teamwork, constant learning, making things, solving problems
              </p>
          {/* <p>Solving problems by constant learning, teamwork, + creating</p> */}
          <li>So, what's next?</li>
          <p>Finding awesome job + Learning TypeScript, TDD, + PHP.</p>
          {/* <li>
                3. Any side projects you're working onfor fun? My target >
                Wireframe. My progress > ReadyBudgetGo.com.
              </li> */}
          {/* <li>
            4. Problem I'm stuck on: Recreating useState in vanilla JavaScript.{" "}
            <a github>help</a>!
          </li> */}

          <li>What are you looking for in your next role and company?</li>
          <p>Growth mindest, learning opportunities, ______, and remote.</p>

          
          <li>Aside from programming, what else do you enjoy?</li>
          <p>Theater, travel, tea, alliteration, and Muji pens</p>
          <li>Any travel in particular on your mind?</li>
          <p>
            Thank you for asking! Fantasizing about{" "}
            <a href="#">
              <em>this</em>...
            </a>
          </p>
          <li>You started in theater?!</li>
          <p>You think closures are heady? Try Shakespeare.</p>
          {/* <p>Think closures can be ____? Try Shakespeare.</p> */}
          {/* <p>Thrown by generator functions? Try Shakespeare.</p> */}
        </ol>

        <div className="containerNowTop">
          <p className="inline">
            Interested in what I've <>done</>? 👉
          </p>
          <Icons />
          {/* <p> */} {/* Here's what I'm <em>doing</em>. 👇 */}
          {/* Here's a bit about me in 7 questions answered in 7 words (or less) */}
          {/* 👇 */}
          {/* </p> */}
          {/* {/* <button onClick={props.modalClickHandler}>show modal</button> */}
        </div>
      </motion.div>
    </StyledNow>

    /* <ul>
          <li>
            Finishing up my studies at a 6 month full-time full stack web
            developement program that I'm treating like grad school.
          </li>
          <li>
            Reading JavaScript: The Definitive Guide (currently on page 276, and
            just started learning about the Map class. Array? Object? What{" "}
            <em>are</em> you?!)
          </li> */

    /* <li>
            Working on an awesome 9 person team building a job board for Jr.
            JavaScript developers
          </li> */
    /* <li>
            Wireframing my first solo CRUD app! A travel budget calculator Link
            coming soon...
          </li> */
    /* <p>
          Thanks Derek Sivers for the idea to have this page... and start
          programming... and live life on my terms.
        </p> */
    /* <li>Reading Seth Godin's The Practice</li> */

    /*  */
    /* </ul>
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
            
          </li>
          <li>Tea (especially with toasted rice or black pepper)</li>
          <li>Muji Pens</li>
        </ul>
        <ul>
          <p>What's next:</p>
          <li>Introducing myself to stictly typed languages with Typescript</li>
          <li>Deepening my testing knowledge with Jest</li>
          <li>Building on my backend stack with Next.js</li>
        </ul> */

    /* <ul>
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
            </li>*/
    /* </ul>  */
    /* </ul> */
  );
};

export default Now;

/*
SEVEN[SHORT]  QUESTIONS ANSWERED IN 7 WORDS (or less)
?1. What are you doing now? Treating 6 month bootcamp like grad school
?2. What's next? find awesome job + teach myself TDD + Typescript
?2. What's next? find awesome job + learning TDD, Typescript, PHP.
3. Any side projects going on for fun? What are you working on for fun? <a figma>Wireframe</a> = target. where it's at >>> ReadyBudgetGo.com.
?4. What are you currently stumped on/about? Recreating useState in vanilla JavaScript. <a github>help</a>!
5. What are you looking for in your next role? Remote, kind (balanaced?) culture, that /facilitates/values/emphasis(zing) on learning/growing
?6. Why tech? Teamwork, constant learning, making things [that work/with purpose/to help/], solving problems.
?7. You started in theater?!/You're background is acting in theater?//how does your background in theater Think JavaScript syntax is weird/confusing? Try Shakespeare.
Closures?Hoisting?Redux?Aswitch statement?/itorators/generators?
*/
