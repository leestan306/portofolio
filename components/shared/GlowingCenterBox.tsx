import React from "react";

export default function GlowingCenterBox() {
  return (
    <div className=" w-full h-[400px] flex justify-center items-center -z-10 ">
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-secondary to-secondary blur-3xl opacity-20"></div>
    </div>
  );
}
