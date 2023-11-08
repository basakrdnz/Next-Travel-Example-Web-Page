import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex flex-col ">
      <div className="get-app flex flex-col md:flex-row md:max-h-[600px]">
        <div className="m-auto ">
          <h2 className="bold-40 text-white lg:bold-64 lg:max-w-[250px] xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on İOS and Android
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-10 whitespace-nowrap w-full">
            <Button
              type={"button"}
              title="App Store"
              variant="btn_white"
              icon="/apple.svg"
              full
            ></Button>
            <Button
              type={"button"}
              title="Play Store"
              variant="btn_dark_green_outline"
              icon="/android.svg"
              full
            ></Button>
          </div>
        </div>
        <div className="md:-mt-40 -mt-20">
          <Image
            src="/phones.png"
            alt="phone"
            height={870}
            width={550}
            className="h-auto"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
