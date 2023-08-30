import React from "react";
import './FadedImage.css';

function FadedImage({ src, alt}) {
    return (
        <div className='image-container'>
            <img src={src} alt={alt} />
        </div>  
    );
}

export default FadedImage;