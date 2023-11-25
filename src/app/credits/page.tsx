import Link from "next/link";
import React from "react";

const Credits = () => {
  return (
    <div className="grid place-items-center p-10 pt-16">
      <h1 className="w-full text-center text-2xl">Credits</h1>
      <p className="italic">
        iPhone 3D model: <br />
        This work is based on &quot;Apple iPhone 15 Pro Max Black&quot;
        (https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7)
        by polyman (https://sketchfab.com/Polyman_3D) licensed under CC-BY-4.0
        (http://creativecommons.org/licenses/by/4.0/)
      </p>
      <Link
        href="/"
        className=" bg-white text-black flex justify-center items-center p-5 rounded absolute top-2 left-2"
      >
        Back
      </Link>
    </div>
  );
};

export default Credits;
