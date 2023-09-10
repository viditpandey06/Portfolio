import React from 'react';
import "./intro.css";
import bg from "../../../assests/image.png";
import btnImg from "../../../assests/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
       <span className="hello">Hello,</span>
       <span className="introText">I'm <span className="introName">Vidit</span><br />Software Developer </span>
        <p className="introPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, totam. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire"className='btn.Img' /> Hire Me</button></Link>
    </div>
    <img src={bg} alt="Photo" className="bg" />
   </section>
  )
}

export default Intro