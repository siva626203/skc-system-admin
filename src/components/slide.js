
import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://admin.workforce.com/wp-content/uploads/sites/2/2018/12/AI-is-coming-%E2%80%94-and-HR-is-not-prepared.jpg",
  "https://learn.g2.com/hubfs/What_is_Information_Technology.jpg",
  "https://casrca.files.wordpress.com/2020/03/43ghfz4876anpn4rer8smgh23tmp.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const SlideShow = () => {
  return (
    <>
     <center> <h2 class="slide-head">Department Programs</h2> </center>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default SlideShow;
