import Image from "next/image";
import React from "react";

import { FaReact, FaAngular } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiTrpc } from "react-icons/si";
export default function Portofolio() {
  return (
    <div className=" p-4 my-20" id="projects">
      <h2 className=" font-bold text-3xl text-slate-500 text-center mb-10">
        Previous Work & Freelance
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative border-2 border-secondary rounded-lg p-4 md:p-8 bg-secondary bg-opacity-15">
          {/* overlay with accent */}
          <div className="relative">
            <div className=" absolute h-[300px] w-full top-0 bg-accent bg-opacity-15 rounded-lg"></div>
            <Image
              height={500}
              width={500}
              alt="Linkarp"
              src={"/images/linkarp.png"}
              className="border-2 border-accent h-[300px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">Linkarp</h3>
            <p className=" text-slate-500">Commercial networking platform</p>
          </div>
          <div className="Tech flex px-4">
            <RiNodejsLine className=" h-12 w-12 text-green-500" />
            <BiLogoPostgresql className=" h-12 w-12 text-blue-500" />
            <SiTailwindcss className=" h-12 w-12 text-sky-500" />
            <FaAngular className=" h-12 w-12 text-red-500" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Full Stack</div>
            <a
              href="http://linkarp.com"
              target="_blank"
              className="hover:underline text-accent"
            >
              linkarp.com &rarr;
            </a>
          </div>
        </div>

        <div className="relative border-2 border-secondary rounded-lg p-4 md:p-8 bg-secondary bg-opacity-15">
          {/* overlay with accent */}
          <div className="relative">
            <div className=" absolute h-[300px] w-full top-0 bg-accent bg-opacity-15 rounded-lg"></div>
            <Image
              height={500}
              width={500}
              alt="Linkarp"
              src={"/images/sokofresh.png"}
              className="border-2 border-accent h-[300px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">Sokofresh</h3>
            <p className=" text-slate-500">Online Grocery store</p>
          </div>
          <div className="Tech flex px-4">
            <RiNodejsLine className=" h-12 w-12 text-green-500" />
            <BiLogoPostgresql className=" h-12 w-12 text-blue-500" />
            <SiTailwindcss className=" h-12 w-12 text-sky-500" />
            <FaReact className=" h-12 w-12 text-sky-500" />
            <SiTrpc className=" h-12 w-12 text-red-500" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Personal Project</div>
            <a
              href="https://sokofresh.stanleykariuki.online"
              target="_blank"
              className="hover:underline text-accent"
            >
              sokofresh.online &rarr;
            </a>
          </div>
        </div>

        <div className="relative border-2 border-secondary rounded-lg p-4 md:p-8 bg-secondary bg-opacity-15">
          {/* overlay with accent */}
          <div className="relative">
            <div className=" absolute h-[300px] w-full top-0 bg-accent bg-opacity-15 rounded-lg"></div>
            <Image
              height={500}
              width={500}
              alt="Linkarp"
              src={"/images/admin-sokofreh.png"}
              className="border-2 border-accent h-[300px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">Sokofreh Admin</h3>
            <p className=" text-slate-500">Admin Portal for sokofresh</p>
          </div>
          <div className="Tech flex px-4">
            <RiNodejsLine className=" h-12 w-12 text-green-500" />
            <BiLogoPostgresql className=" h-12 w-12 text-blue-500" />
            <SiTailwindcss className=" h-12 w-12 text-sky-500" />
            <FaReact className=" h-12 w-12 text-sky-500" />
            <SiTrpc className=" h-12 w-12 text-red-500" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Full Stack</div>
            <a
              href="http://admin.sokofresh.stanleykarariuki.online"
              target="_blank"
              className="hover:underline text-accent"
            >
              admin.sokofresh.online &rarr;
            </a>
          </div>
        </div>

        <div className="relative border-2 border-secondary rounded-lg p-4 md:p-8 bg-secondary bg-opacity-15">
          {/* overlay with accent */}
          <div className="relative">
            <div className=" absolute h-[300px] w-full top-0 bg-accent bg-opacity-15 rounded-lg"></div>
            <Image
              height={500}
              width={500}
              alt="Linkarp"
              src={"/images/geometrydash.png"}
              className="border-2 border-accent h-[300px] w-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">GeometryDash</h3>
            <p className=" text-slate-500">Wordpress Gaming Blog</p>
          </div>
          <div className="Tech flex px-4 gap-4">
            {/* elementor */}
            <FaElementor className=" h-12 w-12 text-red-400" />
            {/* wordpress */}
            <FaWordpress className=" h-12 w-12 text-blue-900" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Frontend/CMS</div>
            <a
              href="https://www.geometrydash.me/"
              target="_blank"
              className="hover:underline text-accent"
            >
              geometrydash.me &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
