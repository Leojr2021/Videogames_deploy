import React from "react";
import { Link } from "react-router-dom";
import "./Verification.css";

export const Verification = () => {




  return (
    <div className="verification_container">
      <h1>Juego creado!</h1>
      <Link to="/home">
      <button className="button_verification" type="submit">
        Ok
      </button>
      </Link>
    </div>
  );
};
