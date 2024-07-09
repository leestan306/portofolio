import React from "react";

export default function TopBar() {
  return (
    <div className=" flex justify-between items-center py-4 px-2">
      <div>
        <div className=" bg-accent text-neutral font-bold py-1 px-4 rounded-bl-full rounded-tr-full cursor-pointer">
          Leestan
        </div>
      </div>
      <div className=" flex items-center justify-between w-fit gap-4">
        <a href="#about" className="hover:underline hover:text-accent">
          About
        </a>
        <a className="hover:underline hover:text-accent" href="#projects">
          Projects
        </a>
        <a className="hover:underline hover:text-accent" href="#contacts">
          Contacts
        </a>
        <a
          className="btn btn-accent rounded-full btn-sm"
          href="/resume.pdf"
          download={true}
        >
          resume
        </a>
      </div>
    </div>
  );
}
