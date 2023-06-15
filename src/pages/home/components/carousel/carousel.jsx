import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width:"1350px",
  height: '500px'
}
const slideImages = [
  {
    url: 'https://www.twgaze.co.uk/assets/carousel/_resampled/CroppedFocusedImageWzExMjgsNDYwLCI1MC01MCJd/IMG-6483.jpg'
  },
  {
    url: 'https://www.kddl.com/wp-content/themes/kddl/assets/images/slider/004.jpg'
    
  },
  {
    url: 'https://www.nizamwatch.com/wp-content/uploads/2022/09/Citizen_banner1.jpg'
    
  },
];
 
export const StaticCarousel = () => {
    return (
      <div className="container slide__container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, objectFit: "contain", 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

