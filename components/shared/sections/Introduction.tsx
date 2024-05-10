import React from "react";
import GlowingCenterBox from "../GlowingCenterBox";
import TechStack from "./TechStack";

export default function Introduction() {
  return (
    <div className=" p-4 relative grid md:grid-cols-2 my-20">
      <div className="relative">
        <div className="absolute">
          <GlowingCenterBox />
        </div>
        <div className=" grid gap-2">
          <small className=" text-slate-500">Introduction</small>
          <h3 className=" text-3xl font-bold">
            Hello , I'm Stanley Kariuki <br />
            Programmer <br />
            based In Nairobi
          </h3>

          <p className="text-slate-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            rerum perspiciatis rem sint veniam? Mollitia animi ab voluptatum
            neque possimus incidunt similique, quidem corporis numquam est
            quibusdam dolor fugiat. Est.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-end">
        <div className=" border-2 border-slate-600 rounded-lg p-4 w-[400px] border-opacity-20">
          <div className=" flex">
            <p className=" text-2xl">
              <span className=" text-blue-900">github</span>
              <span>/</span>
              <span className=" text-blue-400">leestan306</span>
            </p>
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
        <div className=" right-20 absolute top-40">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
