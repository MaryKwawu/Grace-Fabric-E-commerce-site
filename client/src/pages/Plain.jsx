//import { useContext } from "react";
//import { UserContext } from "../context/UserContext";
//import { NavLink } from "react-router-dom";

import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Plain.css";

const slideImage = [
  "plain/sa.jpg",
  "plain/ds.jpg",
  "plain/zg.jpg",
  "plain/zd.jpg",
  "plain/zc .jpg",
  "plain/dn.jpg",
  "plain/dc.jpg",
];

const Plain = () => {
  const images = [
    "da.jpg",
    "db.jpg",
    "df.jpg",
    "dm.jpg",
    "ds.jpg",
    "dx.jpg",
    "dz.jpg",
    "sa.jpg",
    "si.jpg",
    "sw.jpg",
    "sz.jpg",
    "za.jpg",
    "zb.jpg",
    "zd.jpg",
    "zf.jpg",
    "zg.jpg",
    "zi.jpg",
    "zj.jpg",
    "zm.jpg",
    "zt.jpg",
    "dn.jpg",
    "dc.jpg",
    "dc.jpg",
    "zo.jpg",
    "dv.jpg",
    "zc.jpg",
  ];
  console.log(images);

  return (
    <>
      <div
        className=" fabricwall container1 mx-auto"
        style={{ backgroundImage: `url("/plain/zj.jpg") ` }}
      >
        <div className="py-10 mx-96">
          <Slide easing="ease ">
            {/* <div className=""> */}
            <div className="each-slide h-64">
              <div
                style={{ backgroundImage: `url("plain/sa.jpg")` }}
                className=""
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/ds.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/zg.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/zd.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/dn.jpg")` }}
                className="h-40 object-center"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/dc.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/dn.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/dn.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/dn.jpg")` }}
                className="h-40"
              ></div>
            </div>

            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/plain/zc.jpg")` }}
                className="h-40"
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
                src={`/plain/${currentImage}`}
                className="inline-block w-full  h-full"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Plain;
