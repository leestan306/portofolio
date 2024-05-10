import GlowingCenterBox from "@/components/shared/GlowingCenterBox";
import Hero from "@/components/shared/sections/Hero";
import Introduction from "@/components/shared/sections/Introduction";
import Portofolio from "@/components/shared/sections/Portofolio";
import WordpressCms from "@/components/shared/sections/WordpressCms";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Portofolio />
      <WordpressCms />
    </>
  );
}
