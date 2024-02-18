import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Lottie from "react-lottie";
import NotFoundImage from "../animations/404-NotFound.json";

export default function NotFound() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-[60vh]">
      <Lottie options={lottieOptions} height={400} width={400} />
      </div>
      <div><Footer /></div>
    </>
  );
}
