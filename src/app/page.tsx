import { Container } from "../components/Container";
import Image from "next/image";
import hero from "@/assets/homehero2.svg";
import { Footer } from "../components/Footer";
import { HomeFaq } from "../components/HomeFaq";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Container>
        <main className="flex flex-col w-full min-h-[calc(100vh-80px)] items-center justify-center">
          <h2 className="flex flex-col text-2xl font-semibold">
            Controle seu tempo,{" "}
            <span className="text-blue-600">conquiste seus projetos.</span>
          </h2>
          <Image src={hero} alt="Hero" priority />
          <a className="mt-5" href="#faq">
            <IoIosArrowDown
              className="text-gray-700 animate-bounce duration-500 cursor-pointer"
              size={26}
            />
          </a>
        </main>
        <HomeFaq />
      </Container>
      <Footer />
    </>
  );
}
