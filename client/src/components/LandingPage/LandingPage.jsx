import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"
import startIcon from "../../assets/PressStart.gif"


export default function LandingPage() {

  return (
    <div className="background">
      <div className="title" >
        <h2>Videogames Personal Project</h2>
        <Link to="/home">
          <div className="landing_start">
          <img src={startIcon} alt="StartIcon" />
          {/* <button type="submit">Start</button> */}
          </div>
        </Link>
      </div>
      
    </div>
  );
}


