"use client";
import React from "react";
import GlowingCenterBox from "../GlowingCenterBox";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" p-4">
      <div className="relative w-full">
        <div className="absolute w-full">
          <GlowingCenterBox />
        </div>
        <div className="w-full grid md:grid-cols-2">
          <div>
            <h1 className="text-[50px] md:text-[70.7px] font-bold">
              Design , Develop
              <br /> <span className="text-accent">&</span> Deploying <br /> Web
              Apps
            </h1>
            <div className="flex gap-4 items-center">
              <a
                className="btn btn-secondary rounded-full  z-[100]"
                href="#contacts"
              >
                Get In Touch
              </a>

              {/* Glowings */}
              <div className=" h-4 w-4 rounded-full bg-gradient-radial from-secondary to-transparent "></div>
              <div className=" text-xl">Available for Hire</div>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-end">
            <Image
              width={400}
              height={375}
              alt="hero image"
              src={"/images/heroimg.png"}
              className=""
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
