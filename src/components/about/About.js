// import React from "react";
// import "./about.css";
// import ME from "../../assests/me-about.jpg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
// const About = () => {
//   return (
//     <section id="about">
//       <h5>Get to Know</h5>
//       <h1>About Me</h1>
//       <div className="container about_container">
//         <div className="about_me">
//           <div className="about_me-image">
//             <img src={ME} alt="About Image" />
//           </div>
//         </div>
//         <div className="about_content">
//           <div className="about_cards">
//             <article className="about_card">
//               <FaAward className="about_icon" />
//               <h5>Experience</h5>
//               <small>3+ Years Working</small>
//             </article>
//             <article className="about_card">
//               <FiUsers className="about_icon" />
//               <h5>Clients</h5>
//               <small>200+Worldwide</small>
//             </article>
//             <article className="about_card">
//               <VscFolderLibrary className="about_icon" />
//               <h5>Project</h5>
//               <small>80+ Completed</small>
//             </article>
//           </div>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
//             aspernatur voluptatum perferendis doloribus, iure est quod
//             accusantium facilis, laboriosam, incidunt cupiditate quos neque
//             suscipit praesentium excepturi reprehenderit nostrum corporis.
//             Perferendis?
//           </p>
//           <a href="#contact" className="btn btn-primary">
//             Let's Talk
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import './about.css';
import ME from '../../assests/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { AiTwotoneFolderOpen } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2> 


    <div className="container about__container" >
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
        <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>

        <article className="about__card">
        <FaUser className='about__icon'/>
          <h5>Clients</h5>
          <small>300+ WorldWide</small>
        </article>

        <article className="about__card">
        <AiTwotoneFolderOpen className='about__icon'/>
          <h5>Projects</h5>
          <small>100+ Completed</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Itaque, error ea. Culpa fuga optio, sint sit cupiditate pos
      simus repellat, quidem dolores vero laudantium, labore accus
      amus in porro atque dolore autem!</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
