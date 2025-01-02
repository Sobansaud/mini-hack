import Image from "next/image";
import React from "react";

const iconImages: string[] = [
  "/html.png",
  "/css.png",
  "/bootstrap.png",
  "/tailwind.png",
  "/php.png",
  "/laravel.png",
];

const Skills = () => {
  return (
    <main className="w-full bg-primary/15 flex flex-col md:gap-5 gap-3 md:py-16 py-8 items-center">
      <h1 className="text-primary text-2xl font-semibold">Skills</h1>
      <h1 className="lg:text-5xl xs:text-4xl text-3xl font-bold">What I am capable of?</h1>
      <ul className="flex md:gap-5 gap-3 items-center md:mt-0 xs:mt-5 mt-3">
        {iconImages.map((val, ind) => (
          <li key={ind} className="sm:h-20 xs:h-14 h-10 sm:w-20 xs:w-14 w-10 relative">
            <Image src={val} alt="icon" objectFit="contain" fill={true} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Skills;