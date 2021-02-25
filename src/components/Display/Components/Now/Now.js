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
        <div className="NowTop">
          <h2>7 questions* answered in 7 words (or less)</h2>
          <p>
            *because who has time for <em>21?!</em>
          </p>
        </div>
        <ol>
          <li>
            <strong>What are you doing now?</strong>
          </li>
          <p>Treating 6 month bootcamp like grad school.</p>
          <li>Why tech?</li>
          <p>Teamwork, constant learning, making things, solving problems.</p>
          <li>So, what's next?</li>
          <p>Finding awesome job + Learning TypeScript, TDD, PHP.</p>
          {/* <li>
                3. Any side projects you're working onfor fun? My target >
                Wireframe. My progress > ReadyBudgetGo.com.
              </li> */}
          {/* <li>
            4. Problem I'm stuck on: Recreating useState in vanilla JavaScript.{" "}
            <a github>help</a>!
          </li> */}

          <li>What's important to you in a job?</li>
          <p>Good people, product, and process + remote compatible.</p>

          <li>Aside from programming, what else do you enjoy?</li>
          <p>Theater, travel, tea, alliteration, and Muji pens.</p>
          <li>Any travel in particular on your mind?</li>
          <p>
            Thank you for asking! Fantasizing about{" "}
            <a
              href="https://www.alpacaexpeditions.com/inca-trail-expedition-5d4n/"
              target="_blank"
              rel="noreferrer"
            >
              <em className="link">this...</em>
            </a>
          </p>
          <li>Your background is in theater?!</li>
          <p>You think closures are heady? Try Shakespeare.</p>
          {/* <p>Think closures can be ____? Try Shakespeare.</p> */}
          {/* <p>Thrown by generator functions? Try Shakespeare.</p> */}
        </ol>
        <div className="whatIveDone">
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
  );
};

export default Now;
