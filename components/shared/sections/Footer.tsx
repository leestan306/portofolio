import React from "react";

export default function Footer() {
  return (
    <div className="p-4">
      <div className="p-4 text-right">
        <p className="text-3xl">
          Have a Project? <br />
          Let's Work Together
        </p>
      </div>
      <div className="bg-accent rounded-t-lg p-8 text-black font-extrabold">
        <a
          className=" text-4xl underline"
          href="mailto:leestankariuki@gmail.com"
        >
          leestankariuki@gmail.com
        </a>
        <div className="flex gap-4 my-4">
          <a className="hover:underline" href="tel:+254785017308">
            +254785017308
          </a>
          <a className="hover:underline" href="https://github.com/leestan306">
            Twitter
          </a>
          <a className="hover:underline" href="https://github.com/leestan306">
            Github
          </a>
          <a
            className="hover:underline"
            href="
          https://wa.me/+254707067474
          "
          >
            WhatsApp
          </a>
          <a
            className="hover:underline"
            href="
          https://www.linkedin.com/in/stanley-kariuki-b87014240/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BHIRLcdKQR6qyFeXlY5Kpww%3D%3D
          "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
