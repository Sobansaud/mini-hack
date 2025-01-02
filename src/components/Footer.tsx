import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-primary/15 lg:px-20 sm:px-10 px-5 pt-10 pb-5">
      <Contact />
        <p className="mt-5 xs:text-nr text-sm sm:text-start text-center">Copyright &copy; 2023. Develop & Designed by Rizfan Herlaya</p>
    </div>
  );
};

export default Footer;

const Contact = () => {
  return (
    <div className="font-main flex flex-col gap-2 sm:text-start text-center">
      <h1 className="text-primary text-xl font-semibold capitalize">
        contacts
      </h1>
      <h2 className="lg:text-5xl xs:text-4xl text-3xl font-bold capitalize">get in touch</h2>
      <p>rizfanher@gmail.com</p>
      <ul className="flex gap-4 w-full sm:justify-start justify-center">
        {["LinkedIn", "GitHub", "Instagram"].map((val, ind) => (
          <li key={ind} className="">
            <Image src={`/${val}.png`} alt="logo" height={40} width={40} />
          </li>
        ))}
      </ul>
    </div>
  );
};