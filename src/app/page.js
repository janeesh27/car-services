import Image from "next/image";
import Customerservice from "./components/Customerservice";
import Hero from "./components/Hero";
import Navigator from "./components/Navigator";
import Carservice from "./components/Carservice";
import Reviews from "./components/Reviews";
import BookYourCar from "./components/BookYourCar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BookYourCar />
      <Hero />
      <Navigator />
      <Carservice />
      <Customerservice />
      <Reviews />
      <Footer />
    </>
  );
}
