import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Lace.css";

const slideImage = [
  "lace/jn.jpg",
  "lace/jd.jpg",
  "lace/jl.jpg",
  "lace/ji.jpg",
  "lace/jc.jpg",
  "lace/jk.jpg",
  "collections/jp.jpg",
];

const Lace = () => {
  const images = [
    "jd.jpg",
    "sv.jpg",
    "jd.jpg",
    "jc.jpg",
    "jb.jpg",
    "je.jpg",
    "jg.jpg",
    "ji.jpg",
    "jk.jpg",
    "jl.jpg",
    "jk.jpg",
    "jn.jpg",
    "jo.jpg",
    "jp.jpg",
    "jq.jpg",
    "jm.jpg",
    "jj.jpg",
    "ja.jpg",
  ];
  console.log(images);
  return (
    <>
      <div
        className=" fabricwall container1 mx-auto"
        style={{ backgroundImage: `url("/lace/sv.jpg") ` }}
      >
        <div className="py-10 mx-96">
          <Slide easing="ease ">
            {/* <div className=""> */}
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/jd.jpg")` }}
                className="h-40 rounded-full overflow-hidden "
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/jc.jpg")` }}
                className="h-40 rounded-full overflow-hidden"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/jl.jpg")` }}
                className="h-40 rounded-full overflow-hidden"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/jn.jpg")` }}
                className="h-40 object-center"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/jk.jpg")` }}
                className="h-40 rounded-full"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/jp.jpg")` }}
                className="h-40 rounded-full overflow-hidden"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/lace/ji.jpg")` }}
                className="h-40 rounded-full overflow-hidden"
              ></div>
            </div>
            {/* </div> */}
          </Slide>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 py-5 my-6 bg-purple-300">
        {images.map((currentImage, i) => (
          <>
            <div className="h-60 rounded-3xl overflow-hidden">
              <img
                key={"image" + i}
                src={`/lace/${currentImage}`}
                className="inline-block w-full  h-full"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Lace;
