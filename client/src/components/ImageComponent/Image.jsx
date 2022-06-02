import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placehoder from "../../assets/placeholder.png";

const Image = ({src,alt}) =>{
    return(
        	<LazyLoadImage
					alt={alt}
					height='100%'
					src={src} // use normal <img> attributes as props
					width='100%'
					effect="blur"
					placeholder={placehoder}
					/>
    )
}
export default Image;