import { FaLocationArrow } from "react-icons/fa6";
import React from 'react';
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { LampContainer } from "../components/ui/lamp";
import { WobbleCard } from "./ui/WobbleCard";
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className = '-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
        <Spotlight className = 'top-40 -left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className = 'top-28 -left-80 h-[80vh] w-[50vw]' fill='blue' />
        
      </div>
      <div className="h-screen w-full dark:bg-black-100  bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0" ></div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-purple [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className = "flex justify-center relative my-20 z-10">
        <div className = "max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className = "uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"> Hey I'm Lakshmi, a FinTech enthusiast </h2>
            <h2>
                <TextGenerateEffect className = 'text-center text - [40px] md: text-5xl lg:text-6xl' words={"Hey there! I'm Lakshmi Krishnan, a tech enthusiast and software engineering student "}></TextGenerateEffect>
                <p className = "text-center md: tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Whether it's crafting sleek user interfaces or developing robust backend systems, I'm all in!
                </p>
                <a href="#about">
            <MagicButton/>
             <div>
              <LampContainer children = {"About me"} className="text-5xl" />
              <div className="flex items-center font-sans -mt-7 space-x-6 p-6 ">
      {/* Image with circular border */}
      <img 
        src="https://media.licdn.com/dms/image/D5603AQFVvl6sjjb4dA/profile-displayphoto-shrink_800_800/0/1675707827884?e=1724284800&v=beta&t=SW6y3mSqH-c4oIGz6_skGm5mYlgcKET4p5LemJQGeX0" 
        alt="Profile" 
        className="w-70 h-60 flex rounded-full border-4 border-gray-300" 
      />
      {/* Text content */}
      <div className="">
        <h1 className=" text-2xl">
          I'm a tech enthusiast and software engineering student at the University of Illinois at Chicago, originally from Bangalore, IL. I have a deep passion for FinTech, where I blend innovative solutions with financial applications to enhance user experiences and drive efficiency. My journey in technology is fueled by a fascination with financial technology and a relentless quest for knowledge. I thrive on exploring emerging fields like quantum finance and developing systems that analyze real-time data for smarter financial decisions. I transform complex problems into seamless experiences. Outside of coding, I love participating in hackathons, savoring a good cup of coffee, and exploring new cultures and places. Let's connect and create something amazing together!
        </h1>
      </div>
    </div>
              </div>
              
              

              
            
          </a>
            </h2>
        </div></div>
    </div>
  );
};

export default Hero;
