import title_logo from './images/download.png';
import Avtar from './images/avtar.png'
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function Home() {
  useEffect(() => {
    const app = document.getElementById('app');



    const typewriter = new Typewriter(app, {
      loop: true
    });

    typewriter
      .typeString('<span style="color: rgba(222,130,235,.911);">MERN Stack Developer</span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span style="color: rgba(222,130,235,.911);">Open Source Contribution </span> ')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span style="color: rgba(222,130,235,.911);">Python Developer </span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span ><strong style="color: rgba(222,130,235,.911);">Software Developer</strong></span>')
      .pauseFor(2500)
      .start();

    // Cleanup the typewriter instance when the component unmounts
    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div className="container">
      <div className="row mt-5 p-3 vh-100">
        <div className="home-header col-md-7">

          <h3>Hi There! </h3>
          <h1>I'M <strong className='title-name'> NURSID ANSARI </strong></h1>
          <div id="app"></div>
        </div>

        <div className="col-md-5">
          <img className='title_logo' src={title_logo} alt="" />
        </div>
      </div>

      <div className="row mt-5 vh-100 p-3">
        <div className="col-md-8 mx-auto">
          <div className="about-yourself ">
            <h1>LET ME <strong className='title-name'>INTRODUCE </strong> MYSELF</h1>
            <div id="introduction">
              As a passionate Full Stack Software Developer, I bring hands-on experience in developing web applications using <strong className='title-name'>JavaScript, React.js, Node.js,  </strong> and various other cutting-edge libraries and frameworks.
            </div>
            <div className="learn-skills">
            I am fluent in classics like <strong className='title-name'> Javascript</strong> and <strong className='title-name'>  Python. </strong>
My field of Interest's are building new <strong className='title-name'>  Web Technologies </strong> and <strong className='title-name'>  Products </strong>and also in areas <strong className='title-name'> Data Science.</strong>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="mx-auto avtar-logo">
          <img src={Avtar} alt=""  /></div>
        </div>
      </div>

    </div>
  )
}
export default Home;
