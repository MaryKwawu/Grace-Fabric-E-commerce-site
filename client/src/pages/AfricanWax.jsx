import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./AfricanWax.css";

const slideImage = [
  "africa/wt.jpg",
  "africa/ws.jpg",
  "africa/w.jpg",
  "africa/wy.jpg",
  "africa/ww.jpg",
  "africa/wd.jpg",
];

const AfricanWax = () => {
  const images = [
    "wl.jpg",
    "wo.jpg",
    "wr.jpg",
    "wt.jpg",
    "ww.jpg",
    "wy.jpg",
    "wd.jpg",
    "wj.jpg",
    "wt.jpg",
    "ww.jpg",
    "wj.jpg",
    "wp.jpg",
    "ws.jpg",
    "wq.jpg",
    "w.jpg",
  ];
  console.log(images);

  return (
    <>
      <div
        className=" fabricwall container1 mx-auto"
        style={{ backgroundImage: `url("/africa/wt.jpg") ` }}
      >
        <div className="py-10 mx-96">
          <Slide easing="ease ">
            {/* <div className=""> */}
            {/* <div className="each-slide h-64">
              <div
                style={{ backgroundImage: `url("africa/wt.jpg")` }}
                className=""
              ></div>
            </div> */}
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/africa/ws.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/africa/w.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/africa/wy.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/africa/wl.jpg")` }}
                className="h-40 object-center"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/africa/ww.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/africa/wd.jpg")` }}
                className="h-40"
              ></div>
            </div>
            {/* </div> */}
          </Slide>
        </div>
      </div>

      <section className="">
        <div className="wax">
          {images.map((image, i) => (
            <div key={"image" + i} className="w-1/3 h-96 rounded-3xl">
              <img
                src={`/africa/${image}`}
                className="wax 
            p-6  overflow-hidden w-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default AfricanWax;
