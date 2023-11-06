import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen flex md:flex-row flex-col md:m-20 justify-between md:px-20 m-auto items-center md:items-start">
      <div className="hero-map flex md:my-20 -z-10"></div>
      <div className="flex flex-col md:w-2/5 w-80 gap-4">
        <div className="relative">
          <Image src="/camp.svg" alt="camp" width={50} height={40}></Image>
        </div>
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-5 md:w-2/3 text-gray-20">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="flex flex-col md:flex-row md:items-center mt-3 md:my-auto gap-3">
          <div className="flex">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  className=""
                ></Image>
              ))}
          </div>
          <div className="flex gap-4">
          <p className="bold-16 md:p-3">198k</p>
          <span className="md:my-auto">Excellent Reviews</span></div>
        </div>
        <div className="md:flex md:mr-48 mt-5">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
            icon=""
          ></Button>
          <Button
            type="button"
            title="How we work?"
            variant="btn_white_text"
            icon="/play.svg"
          ></Button>
        </div>
      </div>
      <div className="relative w-65 h-min flex-col mx-auto md:mr-80 flex p-7 rounded-3xl bg-green-90 md:m-12 text-lg md:right-4 ">
        <div className="flex justify-between">
          <p className="text-gray-50">Location</p>
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            className=""
          ></Image>
        </div>
        <p className=" text-white mb-5 text-xl font-bold">Aguas Calientes</p>
        <div className="flex justify-between gap-10">
          <div className="">
            <p className="text-gray-50">Distance</p>
            <p className="text-bold text-white text-xl font-bold">173.28 mi</p>
          </div>
          <div>
            <p className="text-gray-50">Elevation</p>
            <p className="text-bold text-white text-xl font-bold">2.040 km</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
