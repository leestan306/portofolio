import React from "react";
import GlowingCenterBox from "../GlowingCenterBox";
import TechStack from "./TechStack";

export default function Introduction() {
  return (
    <div className=" p-4 relative grid md:grid-cols-2 my-20" id="about">
      <div className="relative">
        <div className="absolute">
          <GlowingCenterBox />
        </div>
        <div className=" grid gap-2">
          <small className=" text-slate-500">Introduction</small>
          <h3 className=" text-3xl font-bold">
            Hello , I&apos;m Stanley Kariuki <br />
            Web developer <br />
            based In Nairobi
          </h3>

          <p className="text-slate-500 mt-4">
            As I advance through my journey as a Computer Science student, I am
            deeply engaged in crafting immersive web experiences that seamlessly
            blend functionality with aesthetics. My expertise extends across a
            spectrum of Frontend technologies including React, Next.js, and
            Wordpress Elementor, enabling me to design intuitive user interfaces
            that captivate and delight. Moreover, my versatility extends to
            Backend realms where I occasionally leverage the power of Node.js
            and Laravel to architect robust and scalable systems. With each
            project and learning endeavor, I continue to refine my skills,
            ensuring that I stay at the forefront of web development innovation.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-end relative">
        <div className=" border-2 border-slate-600 rounded-lg p-4 w-[400px] border-opacity-20">
          <div className=" flex">
            <a
              className=" text-2xl"
              href="https://github.com/leestan306"
              target="_blank"
            >
              <span className=" text-blue-900">github</span>
              <span>/</span>
              <span className=" text-blue-400">leestan306</span>
            </a>
          </div>
          <p className=" text-slate-700">Passionate software engineer</p>
          <div className="my-4 flex justify-between">
            <div className=" h-8 w-20 bg-slate-50 bg-opacity-10 border-2 rounded-lg border-opacity-10 border-white"></div>
            <div className="flex gap-4">
              <div className=" h-8 w-20 bg-slate-50 bg-opacity-10 border-2 rounded-lg border-opacity-10 border-white"></div>
              <div className=" h-8 w-20 bg-slate-50 bg-opacity-10 border-2 rounded-lg border-opacity-10 border-white"></div>
              <div className=" h-8 w-20 bg-secondary  border-2 rounded-lg border-opacity-10 border-white"></div>
            </div>
          </div>
          <div className="h-40"></div>
        </div>
        <div className=" md:right-20 absolute top-40">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
