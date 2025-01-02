import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full flex md:flex-row flex-col-reverse items-center lg:px-20 sm:px-10 px-5 bg-primary/15 overflow-hidden">
      <Leftection />
      <RightSection />
    </main>
  );
};

export default Hero;

const Leftection = () => {
  return (
    <section className="md:w-1/2 w-full flex flex-col justify-center md:items-start items-center lg:gap-5 gap-3 md:py-36 py-0 md:pb-36 pb-5">
      <h1 className="text-primary text-lg font-semibold">Hi Everyone, I am</h1>
      <h1 className="lg:text-5xl text-4xl font-bold">Rizfan Herlaya</h1>
      <p className="lg:text-xl text-nr md:text-start text-center">
        Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque
        tellus tempus purus integer nisi cras fermentum.
      </p>
      <span className="flex gap-5">
        <button className="py-3 lg:px-14 px-5 rounded-md capitalize sm:text-lg text-sm bg-primary text-white">
          download cv
        </button>
        <button className="py-3 lg:px-14 px-5 rounded-md capitalize sm:text-lg text-sm bg-primary/20 text-primary border border-primary">
          explore more
        </button>
      </span>
    </section>
  );
};

const RightSection = () => {
  return (
    <section className="md:w-1/2 w-full flex items-center md:justify-end justify-center md:py-36 py-10 lg:pt-36 pt-28">
      <div className="relative lg:h-[300px] h-[250px] lg:w-[400px] w-[350px] bg-primary rounded-[30px]">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:h-96 h-80 w-96">
          <Image src="/hero.png" alt="profile" objectFit="contain" fill={true}/>
        </span>
      </div>
    </section>
  );
};