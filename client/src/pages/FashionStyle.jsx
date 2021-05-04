import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./FashionStyle.css";

const FashionStyle = () => {
  const [images, setImages] = useState([
    "ga.jpg",
    "gd.jpg",
    "ge.jpg",
    "gg.jpg",
    "gh.jpg",
    "gi.jpg",
    "go.jpg",
    "gs.jpg",
    "gt.jpg",
    "gw.jpg",
    "gy.jpg",
    "mb.jpg",
    "mc.jpg",
    "mg.jpg",
    "mk.jpg",
    "ml.png",
    "mm.jpg",
    "mn.jpg",
    "ms.jpg",
    "mv.jpg",
    "mx.jpg",
    "mz.jpg",
    "wm.jpg",
    "xa.jpg",
    "xb.jpg",
    "xd.jpg",
    "xf.jpg",
    "xh.jpg",
    "xi.jpg",
    "xk.jpg",
    "xl.jpg ",
    "xm.jpg",
    "xn.jpg",
    "xq.jpg",
    "xr.jpg",
    "xs.jpg",
    "xu.jpg",
    "xv.jpg",
    "xw.jpg",
    "xy.jpg",
    "xt.jpg",
    "xz.jpg",
    "zc.jpg",
  ]);
  console.log(images);

  return (
    <>
      <div className="grid grid-cols-6 gap-4 py-6 px-10">
        {images.map((currentImage) => (
          <div className="h-64 rounded-3xl overflow-hidden">
            <img
              src={`/model/${currentImage}`}
              className="inline-block w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <h1>Fashion Style</h1>
    </>
  );
};

export default FashionStyle;
