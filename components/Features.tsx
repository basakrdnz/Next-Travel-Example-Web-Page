import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

type FeatureItems = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItems = ({ title, icon, description }: FeatureItems) => {
  return (
    <li>
      <div className="rounded-full flex-col items-start">
        <Image
          src={icon}
          alt="map"
          width={68}
          height={68}
          className="rounded-full bg-green-50 p-4"
        ></Image>
        <h1 className="font-bold text-2xl my-5">{title}</h1>
        <p className="text-md text-gray-50">{description} </p>
      </div>
    </li>
  );
};

const Features = () => {
  return (
    <section className="bg-no-repeat p-5 m-20 flex justify-between">
      <div className="hidden md:flex rotate-12 mt-20 min-w-[300px] h-max mx-10">
        <Image src="/phone.png" alt="phone" height={500} width={1000} className="flex-shrink-0"></Image>
      </div>
      <div>
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute -mt-8 p-2 -mx-2"
        ></Image>
        <h1 className="text-5xl font-bold">Our Features</h1>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {FEATURES.map((feature) => (
            <FeatureItems
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
