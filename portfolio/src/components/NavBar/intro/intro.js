import React from 'react';
import "./intro.css";
import bg from "../../../assests/image.png";
const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
       <span className="hello">Hello,</span>
       <br />
       <span className="introText"></span>
    </div>
    <img src={bg} alt="Photo" className="bg" />
   </section>
  )
}

export default Intro