import React from "react";
import prof from "./images/prof.jpeg";
import "../App.css";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={prof} alt="alexis-photo" className="my-photo" />

      {/* <p>Impact statement (something interesting so people wanna read it) </p>
      <p>Story of how you got into coding?</p>
      <p>
        What you do now, anything crazy cool for jobs, what's your experience
        like right now
      </p>
      <p>Future goals and aspirations </p>
      <p>
        People need to understand: who you are, what you do? and why what you do
        matter?
      </p> */}
      <p>Front end: HTML | CSS | Javascript | React | Redux</p>
      <p>Back end: Node | SQL | Python</p>
      <p>
        <a href="https://www.linkedin.com/in/alvillaraza/">LinkedIn</a> | <a href="https://github.com/alvillaraza">Github</a>
      </p>
      <p>
        I studied Full Stack Web Development through Lambda School where I
        learned plenty of hard and soft skills in a span of 9 months. I worked
        with groups to build multiple apps. It was a challenging journey, and I
        gave back by becoming a Team Lead at the school to help current students
        learn to code. My technical skills were solidified as a Team Lead by
        learning to read and debug multiple students’ codes. Seeing my students
        grow so fast has made me proud, and I am rooting for each and every one
        of them.
      </p>
      <p>
        I am currently looking for more experience in Web Development. With a
        passion in eco-solutions, I hope to, one day, use my development skills to provide
        a positive impact to mother nature.
      </p>
      <p>Interests: Outdoors | Aerial Arts | Travel | Cats</p>

    </div>
  );
}

export default AboutMe;
