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
export default function WordpressCms() {
  return (
    <div className=" p-4 my-20">
      <h2 className=" font-bold text-3xl text-slate-500 text-center mb-10">
        Wordpress and CMS
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
              src={"/images/artfulcrafter.png"}
              className="border-2 border-accent h-[300px] w-full  rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">TheArtfulCrafter</h3>
            <p className=" text-slate-500">Digital Art Blog</p>
          </div>
          <div className="Tech flex px-4 gap-4">
            {/* elementor */}
            <FaElementor className=" h-12 w-12 text-red-400" />
            {/* wordpress */}
            <FaWordpress className=" h-12 w-12 text-blue-900" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Wordpres/CMS</div>
            <a
              href="https://theartfulcrafter.com"
              target="_blank"
              className="hover:underline text-accent"
            >
              theartfulcrafter.com &rarr;
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
              src={"/images/puzzle-jigsaw.png"}
              className="border-2 border-accent h-[300px] w-full  rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">Puzzle Jigsaw</h3>
            <p className=" text-slate-500">Gaming Wordpress Blog</p>
          </div>
          <div className="Tech flex px-4 gap-4">
            {/* elementor */}
            <FaElementor className=" h-12 w-12 text-red-400" />
            {/* wordpress */}
            <FaWordpress className=" h-12 w-12 text-blue-900" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Wordpres/CMS</div>
            <a
              href="https://puzzle-jigsaw.com"
              target="_blank"
              className="hover:underline text-accent"
            >
              puzzle-jigsaw.com &rarr;
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
              src={"/images/grafiscopio.png"}
              className="border-2 border-accent h-[300px] w-full  rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">GrafisScopio</h3>
            <p className=" text-slate-500">Graphic Design Blog</p>
          </div>
          <div className="Tech flex px-4 gap-4">
            {/* elementor */}
            <FaElementor className=" h-12 w-12 text-red-400" />
            {/* wordpress */}
            <FaWordpress className=" h-12 w-12 text-blue-900" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Wordpres/CMS</div>
            <a
              href="https://www.grafiscopio.com"
              target="_blank"
              className="hover:underline text-accent"
            >
              grafiscopio.com &rarr;
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
              src={"/images/enigmaonline.png"}
              className="border-2 border-accent h-[300px] w-full  rounded-lg"
            />
          </div>
          <div className="p-4">
            <h3 className=" text-3xl font-bold">Enigma Online</h3>
            <p className=" text-slate-500">Entertainment News</p>
          </div>
          <div className="Tech flex px-4 gap-4">
            {/* elementor */}
            <FaElementor className=" h-12 w-12 text-red-400" />
            {/* wordpress */}
            <FaWordpress className=" h-12 w-12 text-blue-900" />
          </div>
          <div className=" px-4 flex justify-between items-center">
            <div>Wordpres/CMS</div>
            <a
              href="https://enigmaonline.com/"
              target="_blank"
              className="hover:underline text-accent"
            >
              enigmaonlinecom &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
