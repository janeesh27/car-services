import Image from "next/image";
import Customerservice from "./components/Customerservice";
import Hero from "./components/Hero";
import Navigator from "./components/Navigator";
import Carservice from "./components/Carservice";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Navigator />
      <Carservice />
      <Customerservice />
      <Reviews />
    </>
  );
}
