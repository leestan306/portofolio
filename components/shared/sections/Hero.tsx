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
            <h1 className=" text-[81.7px] font-bold">
              Designing
              <br /> <span className="text-accent">&</span> Deploying <br />{" "}
              Things
            </h1>
            <div className="flex gap-4 items-center">
              <button className=" btn btn-secondary">Get In Touch</button>
              {/* Glowings */}
              <div className=" h-4 w-4 rounded-full bg-gradient-radial from-secondary to-transparent "></div>
              <div className=" text-xl">Available for Hire</div>
            </div>
          </div>
          <div className="relative w-full flex flex-col items-end">
            <div className="flex gap-2  w-[420px]">
              <div className=" h-[184px] w-[82px] bg-accent rounded-full"></div>
              <div
                className=" border-2 border-accent flex-1 h-[184px]  "
                style={{
                  borderTopRightRadius: "90px",
                  borderBottomLeftRadius: "90px",
                }}
              ></div>
            </div>
            <div className="flex mt-2 w-[450px]">
              <div
                className=" bg-accent flex-1 h-[184px]  "
                style={{
                  borderTopRightRadius: "90px",
                  borderBottomLeftRadius: "90px",
                }}
              ></div>
            </div>
            <Image
              width={400}
              height={375}
              alt="hero image"
              src={"/images/heroimg.png"}
              className="absolute bottom-0 right-0 h-[375px] -translate-y-[40px]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
