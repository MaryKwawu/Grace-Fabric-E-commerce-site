import { useContext } from "react";
//import { UserContext } from "../context/UserContext";
//import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Collections.css";

const slideImage = [
  "collections/my.jpg",
  "collections/yk.jpg",
  "collections/fp.jpg",
  "collections/fl.jpg",
  "collections/oo.jpg",
  "collections/pk.jpg",
  "collections/fk.jpg",
];

const Collections = () => {
  const [images, setImages] = useState([
    "ff.jpg",
    "fz.jpg",
    "ad.jpg",
    "aa.jpg",
    "ab.jpg",
    "az.jpg",
    "bb.jpg",
    "bc.jpg",
    "bd.jpg",
    "be.jpg",
    "bz.jpg",
    "bg.jpg",
    "bh.jpg",
    "bi.jpg",
    "bk.jpg",
    "bl.jpg",
    "bn.jpg",
    "bm.jpg",
    "bo.jpg",
    "ca.jpg",
    "cb.jpg",
    "cc.jpg",
    "cd.jpg",
    "ce.jpg",
    "cf.jpg",
    "cg.jpg",
    "ci.jpg",
    "ch.jpg",
    "cj.jpg",
    "ck.jpg",
    "cl.jpg",
    "cn.jpg",
    "cm.jpg",
    "co.jpg",
    "cq.jpg",
    "cr.jpg",
    "cs.jpg",
    "cv.jpg",
    "cw.jpg",
    "cx.jpg",
  ]);
  console.log(images);
  return (
    <>
      <div
        className=" fabricwall container1 mx-auto"
        style={{ backgroundImage: `url("/africa/wl.jpg") ` }}
      >
        <div className="py-10 mx-96">
          <Slide easing="ease ">
            {/* <div className=""> */}
            <div className="each-slide h-64">
              <div
                style={{ backgroundImage: `url("collections/fk.jpg")` }}
                className=""
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/collections/pk.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/collections/oo.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/collections/fl.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/colllections/fp.jpg")` }}
                className="h-40 object-center"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/collections/my.jpg")` }}
                className="h-40"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url("/collections/yk.jpg")` }}
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
                src={`/collections/${currentImage}`}
                className="inline-block w-full  h-full"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Collections;
