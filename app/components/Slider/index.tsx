"use client"
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import { images } from "./slider";

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const previousImage = () => {
    const newImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const goToNextImage = () => {
    const newImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const handleWatchNow = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <div  className="">
        <div  className="" style={{ backgroundImage: `url(${images[currentImageIndex].img})`, height: "900px", width: "auto", backgroundRepeat: "no-repeat",  backgroundSize: "cover" }}>
          <div className="backarrow absolute top-1/2 transform -translate-y-1/2 left-4">
            <IoIosArrowBack className="backarrowicon text-yellow-500 text-6xl mt-8 mr-4" onClick={previousImage} />
          </div>
          <div className="flex flex-col ml-20 justify-center text-white-500 h-full">
          <h1 className="h1 text-4xl">{images[currentImageIndex].title}</h1>
            <p className="status">
              <span>{images[currentImageIndex].status}</span>
            </p>

            <p >Rating: 8.0 <br /> <br />
              {images[currentImageIndex].description} <br /> <br />
            </p>

            <div className="buttons flex gap-4">
              <button 
                className="watchNowbtn bg-yellow-500 text-white text-2xl py-2 px-7 rounded-md rounded-xl" 
                onClick={handleWatchNow}> Watch Now
              </button>
              <button
                className="favourites text-white text-2xl py-2 px-7 rounded-md border border-yellow-500 border-3 rounded-2xl"
                 onClick={handleWatchNow}>Add to Favourites
              </button>
            </div>

          </div>

          <div className="right absolute top-1/2 transform -translate-y-1/2 right-4">
            <IoIosArrowForward className="forwardicon text-yellow-400 text-6xl  mt-8 mr-4" onClick={goToNextImage} />
          </div>

        </div>
      </div>
    </>
  );
};
export default Carousel;