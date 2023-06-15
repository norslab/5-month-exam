import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../../../../style/style.css"
 

export const Carousel2 = () => {
    return (
      <div className="container slide_container">
        <div className="slide__icons">
          <div>
            <a className='slide__icon' target='blank' href="https://www.breitling.com/">
              <img style={{ objectFit:"contain"}} src="https://brandongaille.com/wp-content/uploads/2013/07/Breitling-Company-Logo.jpg" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.patek.com/en/home">
              <img style={{ objectFit:"contain"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/watch-logo-explainer-longines-1-1625096293.jpg?resize=480:*" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.patek.com/en/home">
              <img style={{ objectFit:"contain"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/watch-logo-explainer-patek-philippe-1-1625096218.jpg?resize=480:*" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.rolex.com/">
              <img style={{ objectFit:"contain"}} src="https://imageio.forbes.com/blogs-images/arieladams/files/2014/07/rolex-forbes21.jpg?height=400&width=711&fit=bounds" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.rado.com/">
              <img style={{ objectFit:"contain"}} src="https://www.thelogocreative.co.uk/wp-content/uploads/rado-min.jpg" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.hamiltonwatch.com/">
              <img style={{ objectFit:"contain"}} src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Hamilton_Watch_Company_logo.png" alt="img" />
            </a>
          </div>
          <div>
            <a className='slide__icon' target='blank' href="https://www.tagheuer.com/">
              <img style={{ objectFit:"contain"}} src="https://www.thelogocreative.co.uk/wp-content/uploads/TAG-Heuer-logo-min.jpg" alt="img" />
            </a>
          </div>
        </div>
      </div>
    )
}

