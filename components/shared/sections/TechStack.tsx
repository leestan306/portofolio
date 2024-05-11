import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
export default function TechStack() {
  return (
    <div className=" bg-[#0F2F76] border-2 border-[#0F2F76] bg-opacity-20 p-8 rounded-lg wif-fit md:w-[400px]">
      <h2 className=" font-bold text-3xl text-slate-500">Tech Stack</h2>

      <div>
        <div className=" flex gap-2 items-center my-2">
          <FaReact className=" h-12 w-12 text-blue-400" />
          <RiNextjsFill className=" h-12 w-12 text-slate-white" />
          <FaWordpress className=" h-12 w-12 text-blue-900" />
          <FaElementor className=" h-12 w-12 text-red-400" />
        </div>
        <div className="flex gap-2 items-center my-2">
          <FaGitAlt className=" h-12 w-12 text-red-500" />
          <FaDocker className=" h-12 w-12 text-blue-500" />
          <RiNodejsLine className=" h-12 w-12 text-green-500" />
          <FaLaravel className=" h-12 w-12 text-red-500" />
        </div>
      </div>
    </div>
  );
}
