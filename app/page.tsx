import GlowingCenterBox from "@/components/shared/GlowingCenterBox";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
            <div className="flex gap-2">
              <button className=" btn btn-secondary">Get In Touch</button>
            </div>
          </div>
          <div className="relative">
            <div className="flex gap-2">
              <div className=" h-[184px] w-[82px] bg-accent rounded-full"></div>
              <div
                className=" border-2 border-accent flex-1 h-[184px]  "
                style={{
                  borderTopRightRadius: "90px",
                  borderBottomLeftRadius: "90px",
                }}
              ></div>
            </div>
            <div className="flex mt-2">
              <div
                className=" bg-accent flex-1 h-[184px]  "
                style={{
                  borderTopRightRadius: "90px",
                  borderBottomLeftRadius: "90px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
