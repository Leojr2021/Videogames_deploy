import React from "react";
import reactlogo from "./images/react.svg"
import reduxlogo from "./images/redux.svg"
import postgrelogo from "./images/postgresql.svg"
import sequelizelogo from "./images/sequelize.svg"
import expresslogo from "./images/express.svg"
import "./About.css"
import myphoto from "../../assets/myphoto.png"
import linkedin from "./images/linkedin.png"

function About() {
    return (
        <div className="about_page">
            <h1>Videogames Project</h1>
            <div className="about_photo">
                <div className="profilePhoto">
                    <img  src={myphoto} alt="Leo" />
                </div>
                <div className="about_photo_text">
                <p>This project use information and images from the {<a href="https://rawg.io/apidocs">RAWG</a>} API.</p>
                <p>Develop by Leo Meza for an individual project PI for Henry Bootcamp.</p>
                
                <p>Contact me 😉</p>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leomezamancilla/"><img className="linkedinLogo" src={linkedin} alt="linkedin" /></a>

                </div>

                
            </div>
            <h2>Technologies used in this project</h2>
            <div className="logos">
            <img className="img" src={sequelizelogo} alt="Sequelize logo"/>
                <img className="img" src={reactlogo} alt="React logo"/>
                <img className="img" src={reduxlogo} alt="Redux logo"/>
                
                <img className="img" src={postgrelogo} alt="Postgre logo"/>
                
                <img className="img" src={expresslogo} alt="Express logo"/>
            </div>
        </div>
    );
}


export default About;