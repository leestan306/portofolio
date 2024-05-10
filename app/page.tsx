import GlowingCenterBox from "@/components/shared/GlowingCenterBox";
import Footer from "@/components/shared/sections/Footer";
import Hero from "@/components/shared/sections/Hero";
import Introduction from "@/components/shared/sections/Introduction";
import Portofolio from "@/components/shared/sections/Portofolio";
import Quotes from "@/components/shared/sections/Quotes";
import WordpressCms from "@/components/shared/sections/WordpressCms";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Portofolio />
      <WordpressCms />
      <Quotes />
      <Footer />
    </>
  );
}
