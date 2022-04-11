import React from "react";
import "./Loading.css";
// import loading_gif from "../../assets/loading.gif"
import loading_gif2 from "../../assets/loading2.gif"
export default function loading () {
    return (
        <div className="loading_container">
            
            <h1>Cargando...  </h1>
            <img className="loading" src={loading_gif2} alt="Link caido"/>
        </div>
    );
};

