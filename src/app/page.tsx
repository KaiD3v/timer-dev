import { Container } from "../components/Container";
import Image from "next/image";
import hero from "@/assets/homehero.svg";
import { Footer } from "../components/Footer";
import { HomeFaq } from "../components/HomeFaq";

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
        </main>
        <HomeFaq />
      </Container>
      <Footer />
    </>
  );
}
