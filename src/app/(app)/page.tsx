import CollectionCaraousels from "@/components/herosection/carousels-home";
import Herosection from "@/components/herosection/herosection";
import ScrollingText from "@/components/herosection/scrolling-text";

export default function Home() {
  return (
    <>
      <Herosection />
      <ScrollingText />
      <CollectionCaraousels />
    </>
  );
}
