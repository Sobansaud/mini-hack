import Image from "next/image";
import React from "react";

interface CardType {
  image: string;
  heading: string;
  paragraph: string;
  extra: string;
}
const cardData: CardType[] = [
  {
    image: "/project-01.png",
    heading: "Portfolio Website Design",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    extra: "Figma",
  },
  {
    image: "/project-02.png",
    heading: "LitterCycle Exchange",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    extra: "Live View",
  },
  {
    image: "/project-03.png",
    heading: "Edubix",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    extra: "Live View",
  },
  {
    image: "/project-04.png",
    heading: "PPDB SMK Telesandi Bekasi",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    extra: "Live view",
  },
  {
    image: "/project-04.png",
    heading: "PPDB SMK Telesandi Bekasi",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    extra: "Live view",
  },
  {
    image: "/project-04.png",
    heading: "PPDB SMK Telesandi Bekasi",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    extra: "Live view",
  },
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center font-main py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-primary text-xl font-semibold capitalize">projets</h1>
        <h2 className="lg:text-5xl xs:text-4xl text-3xl font-bold">What I have made?</h2>
      </div>
      <Cards />
    </div>
  );
};

export default Projects;

const Cards = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-evenly font-main xs:px-2 px-5">
      {cardData.map((val, ind) => (
        <div key={ind} className="h-[300px] w-[360px] rounded-2xl lg:my-8 md:my-5 my-3 shadow-cardShadow">
          <div className="h-[65%] w-full relative">
            <Image src={val.image} alt="pic" fill={true} layout="cover" />
          </div>
          <div className="px-4 py-3 flex flex-col gap-1">
            <h2 className="md:text-xl text-nr font-semibold">{val.heading}</h2>
            <p className="md:text-sm text-[12px]">{val.paragraph}</p>
            <p className="md:text-sm text-[12px] text-primary">{val.extra}</p>
          </div>
        </div>
      ))}
    </div>
  );
};