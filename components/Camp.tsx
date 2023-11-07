import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampPromps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampPromps) => {
  return (
    <div
      className={`flex h-[400px] md:h-[630px] flex-col min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat border-2 rounded-2xl p-10 justify-between`}
    >
      <div className="flex">
        <div className="rounded-full bg-green-50 p-6 h-min ">
          <Image src="/folded-map.svg" alt="map" width={28} height={28}></Image>
        </div>
        <div className="mt-3 px-4">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flex">
        <span className="flex overflow-hidden -space-x-4">
          {PEOPLE_URL.map((url) => (
            <Image
              src={url}
              alt="person"
              key={url}
              width={52}
              height={52}
              className="inline-block rounded-full h-10 w-10"
            ></Image>
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white m-1">{peopleJoined} </p>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="md:mx-20 mx-3 relative flex flex-col lg:mb-10 lg:py-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[440px] lg:h-[400px] xl:h-[640px] w-full items-start gap-8 overflow-x-auto justify-start">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        ></CampSite>
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        ></CampSite>
      </div>

      <div className="flex relative bg-green-50 m-5 h-60 max-w-lg p-5 flex-col rounded-3xl my-auto lg:-mt-40 lg:-right-80 ">
        <h2 className="regular-24 md:regular-32 capitalize text-white">
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h2>
        <p className="regular-14 mt-5 text-white">
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That's why we
          are here for those of you who want to start an adventure
        </p>
      </div>
    </section>
  );
};

export default Camp;
