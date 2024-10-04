import Header from "@/components/header";
import CollectionCaraousels from "@/components/herosection/carousels-home";
import Herosection from "@/components/herosection/herosection";
import ScrollingText from "@/components/herosection/scrolling-text";
import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Herosection />
      <ScrollingText />
      <CollectionCaraousels />
    </>
  );
}
