import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main className='w-full flex md:flex-row flex-col-reverse justify-center items-center lg:px-20 sm:px-10 px-5 md:gap-5 gap-10 py-16'>
      <section className='md:w-1/2 w-full flex items-center justify-center'>
        <Image 
        src="/about.png"
        alt='about'
        height={350}
        width={350}
        />
      </section>
      <section className='md:w-3/5 w-full font-main flex flex-col lg:gap-5 gap-3 justify-center md:items-start items-center'>
      <h1 className='text-primary text-lg font-semibold capitalize'>about</h1>
      <h1 className='lg:text-5xl text-4xl font-bold capitalize'>about me?</h1>
      <p className='lg:text-lg text-sm md:text-start text-center'>Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget. </p>
      </section>
    </main>
  )
}

export default About