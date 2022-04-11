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
            <div className="container_Notfound">
                <div className="grid_container">
                <div className="text_grid">
                <h1>oops... </h1>
                <h1>nothing to see here 😓 </h1>
                </div>
                <img className="notfound" src={gif_error} alt="Link caido"/>
                </div>
            </div>
            }
        </div>
    );
};