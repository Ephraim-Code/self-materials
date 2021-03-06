import React from 'react';
import Developer from './Developer';
import { FcCheckmark } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';


const About = () => {
    return (
        <div className="about-content">
            <div className="developer-concern">
                <h2>About The Application And Developer </h2>
                <div className="developer-padding">
                    <Developer />
                </div>
            </div>
            <div className="about-article">
                <h3 className="paragraph">
                    This  is just  practical react  application for beginners and  intermediate  level , I created  this app to help you get started,
                    source  code for this application  can be found on my githud repository.
                    This React Application has no Backend functionality, but i promise to add it later
                </h3>

                <h4>What Technologies</h4>
                <ul className="list-article">
                    <li className="single-item">
                        <FcCheckmark className="icon-size" /> JSX
                    </li>
                    <li className="single-item">
                        <FcCheckmark className="icon-size" /> CSS, CSS Variable
                    </li>
                    <li className="single-item">
                        <FcCheckmark className="icon-size" /> JavaScript, JavaScript Framework React
                    </li>
                    <li className="single-item">
                        <FcCheckmark className="icon-size" /> Context API for State Management
                    </li>
                    <li className="single-item">
                        <FcCheckmark className="icon-size" /> React Router DOM for Routing
                    </li>

                </ul>
                <a href="https://github.com/Ephraim-Code/self-materials" target="_blank"><h3>Get The Code <FaGithub /></h3>  </a>
            </div>
        </div>
    )
}
export default About;