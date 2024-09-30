import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Fun Fact</h2>
          <p>
            Ini saya waktu adzan di Youtube Darul Quran 
            
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
          <iframe width="700" height="400" src="https://www.youtube.com/embed/v2Pdvmlt1BE?si=MbdI0QhNVkokvmOy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
