import React from "react";
import gif_error from '../../assets/404.gif'
import notfound_image from '../../assets/image_notfound.png'
import "./Notfound.css"


export default function NotFound ({image}) {
    return (

        
              
         <div className="notfound_images">
            {image === "noimage" ?
            <img className = "img" src={notfound_image} alt="Link caido"/>
            : 
            <div>
                <h1>No hay nada para mostrar 😓 </h1>
                <img className="notfound" src={gif_error} alt="Link caido"/>
            </div>
            }
        </div>
    );
};