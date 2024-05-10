import React from "react";

export default function Quotes() {
  return (
    <div className=" w-full overflow-x-hidden min-h-[400px] flex flex-col items-center justify-center z-1 ">
      <div className="w-full relative">
        <div className="w-full absolute  left-0 flex justify-between px-20">
          <div className=" h-[200px] w-[300px] bg-accent blur-3xl"></div>
          <div className=" h-[200px] w-[300px] bg-secondary blur-3xl"></div>
        </div>
      </div>
      <div className=" min-h-[300px] flex flex-col shadow-lg bg-[#10101E] w-full p-4 items-center justify-center z-10 bg-blend-normal bg-opacity-25">
        <p className=" text-center text-xl">
          &quot; Don’t forget: when you start a website, it’s not yet a trusted
          site. So you have to bring people from a trusted site to your site to
          build up the trust in your site. &quot;
        </p>
        <p>
          <small className="text-slate-400">James ALtucher</small>
        </p>
      </div>
    </div>
  );
}
